import React from 'react';
import { BiCheck } from "react-icons/bi";
// this is the descraption box component, and we get this props from the page2 component
const DescraptionBox = ({
    title,
    category,
    description,
    price,
}) => {
    return(
        <div className="container1">
           <div className="DecraptionBox">
               <div className="productInfo">
                        <li className="category">المنتج/{category ? category : "غير مصنف"}</li>
                        <li className="title">{title}</li>
                        {/* if you need to use dollars just put $ in place of EGP */}
                        <li className="price">{price}EGP</li>
               </div>
               <div className="ProductFeatures">
                        <li className="title">:مميزاته</li>
                        {/* this if you have a descraption */}
                        <p className="descraptionText">{description}</p>
               </div>
                <div>
                    <button className="buyNow">شراء الأن</button>
                </div>
           </div>
        </div>
    );
}
export default DescraptionBox;