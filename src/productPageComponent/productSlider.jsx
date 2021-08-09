import React from 'react';
// this is a image slider that you can import it and use it in any place just put and array of images in the value of slides and it will work
import ImgageSlider from './imagesSlider';
const ProductSlider = ({slides}) => {
    return(
        <div>
            {/* if you need to use the image slider in any nother place juse import it and use it and put the data(array) that you need to slider it */}
            {/* the slides value here it's a array of product images */}
            <ImgageSlider slides={slides}/>
        </div>
    );
}
export default ProductSlider;