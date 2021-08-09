import React, {useState} from 'react';
// if the arrow don't look good for you just use this one and change the name component in return()
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
// this component get the slides value(array), like a props that you put in where you use it
const ImgageSlider = ({slides}) => {
  // if you put a array of images and it's deosn't working you can check a file:"sliderDataExample.jsx" and you will found it in prductPageComponent
    const [current, setCurrent] = useState(0);
    // if you need to display a specific number of images just change the length to a number 
    const length = slides.length 
    const nextSlide = () => {
      // this function go to the left one more and if the current number is equal to length - 1 that's mean the last index it's back to the 0
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
      const prevSlide = () => {
        // this function go to the right one more, and it's the opposite of teh nextSlide function
        setCurrent(current === 0 ? length - 1 : current - 1);
      };
      // this line check if we have a real array, and if we not it return null
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
      }
    return(
        <section className='slider'>
          {/* this is the arrow to the left and it's an icon from react-icons, and when it's clicked it run prevSlide function */}
            <AiOutlineLeft className='left-arrow' onClick={prevSlide}/>
            {/* this is the arrow to the right and it's an icon from react-icons, and when it's clicked it run nextSlide function */}
            <AiOutlineRight className='right-arrow' onClick={nextSlide}/>
            {/* this lines of code return eche image in the array but if it had the index number that mean the current number if not it's hidden */}
            {slides.map((slide, index) => {
                return(
                    <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                  >
                    {/* if you use it don't forget to change the slider class for you can use it at any position of the page, and you wil find a %slider for basic and put the top and ... */}
                         {index === current && (
                             <div>
                                 <img src={slide.image} alt='travel image' className='image' />
                                 {/* this line display the image number 0,1,2,3... */}
                                 <div className="currentNum">{current+1}</div>
                             </div>
                            )}
                    </div>
                ); 
            })}   
       </section>
    );
}
export default ImgageSlider;