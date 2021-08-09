import React, { useState } from 'react';
// this last component deosn't have any props because the cleint will put his information like the: his name, city, phoneNumber and the home Address
const InfoBox = () => {
    // if you need the data of the cleint you can use this states for change your database of add 
    const [cleintName, setCleintName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [cleintCity, setCleintCity] = useState("");
    const [homeAddress, setHomeAddress] = useState("");
    const handleChangeName = event => {
        // this function work for get the value that put in the input and put it in state
        setCleintName(event.target.value);
      }
    const handleChangePhoneNumber = event => {
         // this function work for get the value that put in the input and put it in state
        setPhoneNumber(event.target.value);
    }
    const handleChangeCity = event => {
         // this function work for get the value that put in the input and put it in state
        setCleintCity(event.target.value);
        }
    const handleChangeHomeAdress = event => {
         // this function work for get the value that put in the input and put it in state
        setHomeAddress(event.target.value);
    }
    return(
        <div className="infoBox">
            <div className="flex">
                <h1 className="titel">:إملئ المعلومات و أطلب الأن</h1>
                {/* this is the part of inputs */}
                <div className="inputsBox">
                    <input type="text" placeholder="الإسم الثالثي" className="infoInput" value={cleintName} onChange={handleChangeName}/>
                    <input type="number" placeholder="رقم الهاتف" className="infoInput" value={phoneNumber} onChange={handleChangePhoneNumber}/>
                    <input type="text" placeholder="المحافظة" className="infoInput" value={cleintCity} onChange={handleChangeCity}/>
                    <input type="text" placeholder="العنوان+ أقرب علامة مميزة" className="infoInput" value={homeAddress} onChange={handleChangeHomeAdress}/>
                </div>
                <div className="text">الدفع عند الإستلام</div>
                {/* i use container space for give the button some space */}
                <div className="containerSpace">
                    <button className="buyBtn">أطلب الأن</button>
                </div>
            </div>
        </div>
    );
}
export default InfoBox;