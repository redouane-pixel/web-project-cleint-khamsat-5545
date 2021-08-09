import React, {useState} from 'react';
// this one is for the i can use the context that i make it in the app.js file
import ProductContext from '../productContext';
// this is the components that i use them in the page, the productpage
import Header from './header';
import DescraptionBox from './descraptionBox';
import ProductSlider from './productSlider';
import Video from './videoComponent';
import CommentsBox from './commentsSlider';
import PriceTable from './pricesTable';
import InfoBox from './informationBox';
// this props are all for the product page like title and category, title...
const Page2 = ({
  title,
  category,
  description,
  price,
  PriceCuts,
  image,
  image2,
  image3,
  image4,
  commentPicture1,
  commentPicture2,
  commentPicture3,
  embedId,
  // the last one is for the youtube video
}) => {
  // you don't need to change the productsImages just put your the names of your image like the image, image2, image3...., or put more it's gp to work
  // if in your dataBase you have an array of images for each product just put it here in the value of productImages and it's will work just remeber the name should be image:"" for it work, and have the same structure of this array
  const [productImages, setProductImages] = useState([
    {image: image},
    {image: image2},
    {image: image3},
    {image: image4},
   ]);
  // if in your dataBase you have an array of comments images for each product just put it here in the value of commentPictures and it's will work just remeber the name should be image:"" for it work, and have the same structure of this array
   const [commentPictures, setCommentPictures] = useState([
     {image: commentPicture1},
     {image: commentPicture2},
     {image: commentPicture3},
    ])
    return(
     <div>
       {/* this is the header component and it's simple juse some divs and link to the first page */}
      <Header/>
      {/* we need this data for the descraption part, and this component display the information of the product like the title, category, price and description*/}
       <DescraptionBox 
            title={title} 
            category={category} 
            description={description} 
            price={price}
            />
       {/* the slides value it's the array of images that will run,  and this component is a slider of the product images*/}
       <ProductSlider slides={productImages}/>
       {/* this is the video component and if you have a link of video from the dataBase put it like a props and put it in the link in the component */}
       <Video embedId={embedId}/>
       {/* again the commentPictures are like the slides in the productSlider, and this component display the comments of the cleints*/}
       <CommentsBox commentPictures={commentPictures}/>
       {/* this component is a table that display the price of the product, and the price Cuts for two product */}
       <PriceTable price={price} PriceCuts={PriceCuts} title={title}/>
       {/* this last component deosn't have any props because the cleint will put his information like the: his name, city, phoneNumber and the home Address */}
       <InfoBox/>
     </div>
);
  }
export default Page2;