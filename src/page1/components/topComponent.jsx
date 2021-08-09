import React, {useContext} from 'react';
import ProductContext from '../../productContext'
// this component it's the top of the page, the title and the another things wiht it
const TopComponent = () => {
    // this is the moreProdects state that, we make it at the app.js and we use it here, for the text المنتجات من الى
    // i use useContext hook here
    const {moreProducts} = useContext(ProductContext)
    return(
        <div className="topContainer">
                 <div className="title">,أهلا</div>
                 <div className="meduimText">بك في متجرنا</div>
                 <div className="smallText">نقدم لكم أفضل المنتجات بأقل الأسعار.</div>
                 <div className="shopTitle">المتجر</div>
                 {/* if you change the number of items that display in the screen, don't froget to change this too */}
                 <div className="NumberOfProducts">{moreProducts ? "المناجات من 1 - 9" : "المنتجات من 1 - 6"}</div>
                 <div className="upperTriangle">
                     <div className="shop">المتجر</div>
                 </div>
             </div>
    );
}
 
export default TopComponent;