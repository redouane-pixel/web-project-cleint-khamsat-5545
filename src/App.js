import React, {useState, useEffect} from 'react';
import './styles/style.scss';
import Page1 from './page1/components/page1';
import Page2 from './productPageComponent/page2';
import ProductContext from './productContext';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
const App = () => {
  // this is for the data from the api
  const [products, setPoducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // for i can change it in any place, i make it that i can change it to true in any place with context, i use it in listOfPoducts component
  const [moreProducts, setMoreProducts] = useState(false);
  // this state is just for the path of the route: /product/id
  const [productPageurl, setProductPageurl] = useState("/product/")
  // this useeffect it get the data from the api, and i use a fake api just change the link 
  useEffect(() => {
    fetch("http://localhost:3000/products2")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPoducts(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        // this one it's for errors, if you need to display erros just use this
        // (error) => {
        //   setIsLoaded(true);
        //   setError(error);
        // }
      )
  }, [])
  const contextValue = {products, setPoducts, isLoaded, setIsLoaded, moreProducts, setMoreProducts,}
  // if you need to make it look more good just made a loader here
  if (!isLoaded) {
    return(
      <div>it's leading...</div>
    );
  }
  else {
    return (
      <Router>
      <ProductContext.Provider value={contextValue}>
     <Switch>
     <Route path="/" exact>
       {/* this is the route of the first page, the default page */}
       <Page1/>
     </Route>
     {/* this one create for every product product page with the id, the meaning of page2 is the product Page*/}
     {/* it's a lot of data and parms, but if you have an array of images for product or cleints comments put it here, and change the components*/}
     {/* for the video make it a url link or a form that youtube give it to you */}
     {products.map(product => (
         <Route path={productPageurl+product.id} exact>
            <Page2 
             title={product.title}
             category={product.category}
             description={product.description} 
             price={product.price} 
             PriceCuts={product.PriceCuts} 
            //  this is the product images, if you have an array put it
             image={product.image}
             image2={product.image2}
             image3={product.image3}
             image4={product.image4}
            //  this images are for cleints comments
             commentPicture1={product.commentPicture1}
             commentPicture2={product.commentPicture2}
             commentPicture3={product.commentPicture3}
            //  this one is for the embedId of the youtube video
            embedId={product.embedId}
             />
        </Route>
     ))}
 </Switch>
 </ProductContext.Provider>
 </Router>
    );
  }
  }
export default App;