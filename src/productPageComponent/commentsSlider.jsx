import React from 'react';
// this is a image slider that you can import it and use it in any place just put and array of images in the value of slides and it will work
import ImgageSlider from './imagesSlider';
// this is a cooment box component that display the comments of cleints with an image slider 
const CommentsBox = ({commentPictures}) => {
    return(
        <div className="commentsBox">
            <h1 className="title">:أراء عملائنا الكرام</h1>
            {/* the value of slides here it's an array of cleint images, that style of it i change it for look more good */}
            <ImgageSlider slides={commentPictures}/>
            <div className="containerSpace">
                <button className="buyBtn">أحصل عليه الأن</button>
            </div>
        </div>
    );
}
export default CommentsBox;