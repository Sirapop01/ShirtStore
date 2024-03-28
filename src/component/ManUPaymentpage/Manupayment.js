// Payment.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import './Manupayment.css';
import Logopayment from './Picture/Vector.png';
import backArrow2 from './Picture/left.png';

const ManUpaymentpage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const history = useHistory();
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/Manudetails/${id}`);
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

                    <div children="Payment">
                       <h3 className="payment">Payment</h3>
                  
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
      </footer>
    </div>
  );
}

export default ManUpaymentpage;