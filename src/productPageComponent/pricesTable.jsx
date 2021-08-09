import React, {useState } from 'react';
// this component it's the price table, that display the price and price cuts of the product, and we need this props for do this
const PriceTable = ({
    price,
    PriceCuts,
    title
}) => {
    // this state is for if the user choice the one product price or the two product price, and you can use it's for the api
    const [priceCoice1, setPriceCoice1] = useState(true);
    const ChangeToPrice1 = () => {
        // this function make the price choice to true that's mean is the first choice, one product
        setPriceCoice1(true)
    }
    const ChangeToPrice2 = () => {
        // this function make the price choice to false that's mean is the second choice, two product
        setPriceCoice1(false)
    }
    return(
        <div className="priceBox">
            <h1 className="titel">your Product:</h1>
            <div className="priceTable">
                <div className="line"></div>
                <div className="product">product</div>
                <div className="price">price</div>
                {/* this second part it's for the part display the prices and and price Cuts*/}
                <div className="container">
                    {/* this is the first price */}
                    <div className="group">
                        <div className="groumSmall">
                            <div className={priceCoice1 ? 'checkbox active' : 'checkbox'} onClick={ChangeToPrice1}></div>
                            <div className="product2">{title}</div>
                        </div>
                        {price} EGP
                    </div>
                    {/* this is the second price */}
                    <div className="group2">
                        <div className="groumSmall2">
                            <div className={priceCoice1 ? 'checkbox' : 'checkbox active'} onClick={ChangeToPrice2}></div>
                            <div className="product2">قطعتين</div>
                        </div>
                        {PriceCuts} EGP
                    </div>

                </div>
            
            </div>
        </div>
          
    );
}
export default PriceTable;