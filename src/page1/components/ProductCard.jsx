import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// this component is the one card of product that display in the screen, and it's use the title,ccategory,id and price of the product
class ProductCard extends Component {
    state = { 
        // i make this one just for path of the Link
        productPageurl:"/product/",
     }
    render() { 
        return ( 
            <div className="ProductCard">
                {/* this link will take the user to the page product that have the same id of the product that he touch it */}
                <Link to={this.state.productPageurl+this.props.id}>
                <img src={this.props.image} alt={this.props.title}/>
                </Link>
                <div className="ProductInfo">
                    {/* this keep the app display غير مصنف if the category it's emthy or undifined */}
                        <li className="category">المنتج/{this.props.category ? this.props.category : "غير مصنف"}</li>
                        <li className="title">{this.props.title}</li>
                        <li className="price">{this.props.price} EGP</li>
                </div>
                {/* this button will go to productPage that have the same id of this product */}
                {/* <button className="buyBtn"><Link to={this.state.productPageurl+this.props.id}><a>المزيد</a></Link></button> */}
                <button className="buyBtn2"><Link to={this.state.productPageurl+this.props.id}><a>المزيد</a></Link></button>
            </div>
         );
    }
}
 
export default ProductCard;