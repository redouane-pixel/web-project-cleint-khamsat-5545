import React, {useContext} from 'react';
import ProductCard from './ProductCard';
import ProductContext from '../../productContext'
// this component is the table or the table that the products display in it
// listProducts = ListOfProductsComponent
const ListProducts = () => {
    // we need to moreProducts state for know if we go to display 9 or 15 products, and setMoreProducts function for change the value with button
    const {moreProducts} = useContext(ProductContext)
    const {setMoreProducts} = useContext(ProductContext)
    // we need products for make a map function and do a product card for ech product.
    const {products} = useContext(ProductContext)
    const showMoreProducts = () => {
        // this function keep use choice the number of products that display with changing the moreProducts value
        setMoreProducts(!moreProducts);
    }
    if (!moreProducts) {
        // this will display a 6 products and this if moreProducts = false
        return(
            <div className="BlockOfProducts">
                {/* if you need to change the number of the products that display in the screen in the beggening change number 6 and if you change it don't forget to change the topcomponent */}
                {products.slice(0, 6).map(product => (
                         <div key={product.id}>
                        <ProductCard image={product.image} title={product.title} category={product.category} price={product.price} id={product.id}/>
                    </div>
                ))}
            <div className="ContainerSpace">
                {/* i use container space for give the btn a space between it and the border screen */}
            <button className="moreBtn" onClick={() => {showMoreProducts()}}>{moreProducts ? 'إخفاء' : 'إظهار المزيد'}</button>
            </div>
        </div>
        );
    }
    else {
        // this will display a 9 products and this if moreProducts = true
        return(
            <div className="BlockOfProducts">
                {/* if you need to change the number of the products that display in the screen in the beggening change number 9 */}
                {products.slice(0, 9).map(product => (
                         <div key={product.id}>
                        <ProductCard image={product.image} title={product.title} category={product.category} price={product.price} id={product.id}/>
                    </div>
                ))}
            <div className="ContainerSpace">
                {/* i use container space for give the btn a space between it and the border screen */}
            <button className="moreBtn" onClick={() => {showMoreProducts()}}>{moreProducts ? 'إخفاء' : 'إظهار المزيد'}</button>
            </div>
        </div>
    );   
    }
    
}
export default ListProducts;