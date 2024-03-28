// Payment.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import './arsenalpayment.css';
import Logopayment from './Picture/Vector.png';
import backArrow2 from './Picture/left.png';

const Arsenalpayment = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const history = useHistory();
  const [discountApplied, setDiscountApplied] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/arsdetail/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
  
    fetchProduct();
  }, [id]);
  

  const goBack = () => {
    history.goBack(); // ใช้ history.goBack() เพื่อย้อนกลับไปหน้าก่อนหน้า
  };

  const handleDiscountChange = (event) => {
    const addressValue = event.target.value.toLowerCase();
    if (addressValue.includes('ไอซ์รักอู้ด')) {
      setDiscountApplied(true);
    } else {
      setDiscountApplied(false);
    }
  };


  const applyDiscount = () => {
    if (product) {
      let discountedPrice = product.Price;
      if (discountApplied) {
        // คำนวณราคาหลังลด 5%
        discountedPrice -= (product.Price * 0.15);
      }
      return discountedPrice.toFixed(0); // แปลงเป็นทศนิยม 0 ตำแหน่ง
    } else {
      return "0"; // หรือค่าเริ่มต้นที่คุณต้องการให้แสดงถ้าไม่มีสินค้า
    }
  };
  

  return (
    <div className="container">
      {product && (
        <div className="Block-Payment">
          <img src={Logopayment} alt="" className="Logo-payment" />
          <h1 className="Payment-heading">Payment</h1>        
          <div className="Block-Shirt">
            <img src={product.img} alt="" className="img-payment" />
            <div className="Teamshirt">
              <h2 className="payment-Namemanu">{product.name}</h2>
              <h2 className="football-Namemanu">MANCHESTER UNITED FOOTBALL SHIRT</h2>

              <div className="shirtDetails">
                <h3 className="product-size1">Size <span>{product.Size}</span></h3>
                <h3 className="product-package">Packaging Seal <span>{product.Packaging_Seal}</span></h3>
                <h3 className="product-condition">Condition <span>{product.Condition}</span></h3>
                <h3 className="product-price1">Price <span>฿ {product.Price}</span></h3>

                <div className="Address">
                    <h3 className="address">Address</h3>
                    <input type="text" className="add-address" placeholder="+ Address" />

                    <div className="Payment">
                       <h3 className="payment">Payment</h3>
                       <h3 className="payment-method">Payment Method <span>Credit / Debit card</span></h3>  
                       <h3 className="Discount">Discount Code</h3>
                       <input type="text" className="add-discount" placeholder="+ Discount Code" onChange={handleDiscountChange} />
                       <h3 className="Shipping">Shipping Fee <span>Free</span></h3>
                       <h3 className="Fee">Fee <span>Free</span></h3>
                       <h3 className="discounted-price">Total  <span>฿ {applyDiscount()}</span></h3>
                    
                  </div>    
                </div>
              </div>
            </div>
          </div>
          {/* เพิ่มเส้นขั้นตรงกลาง */}
          <div className="midline"></div>
        </div>
      )}
      
      <footer className="footer2">
        <button className="backButton" onClick={goBack}>
          <img src={backArrow2} alt="Back Arrow" /> {/* ใช้รูปภาพของลูกศร */}
        </button>
        <button className="PaymentButton">
              <h3 className="Btt-payment">Continue to payment <span>฿ {applyDiscount()}</span></h3>
          </button>
      </footer>
    </div>
  );
}

export default Arsenalpayment;