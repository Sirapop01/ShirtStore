import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Manupayment.css';
import Logopayment from './Picture/Vector.png';


const Payment = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      // Send payment details to the server for processing
      const response = await axios.post('http://localhost:5000/process-payment', {
        productId: id,
        paymentInfo
      });
      console.log('Payment successful:', response.data);
      // Optionally, you can redirect the user to a confirmation page or show a success message
    } catch (error) {
      console.error('Error processing payment:', error);
      // Handle errors (e.g., show an error message to the user)
    }
  };

  return (
    <div className="container">
      {product && (
        <div className="Block-Payment">
        <img src={Logopayment} className="Logo-payment" />
        <h1 className="Payment-heading">Payment</h1>        
        <div className="Block-Shirt">
           <img src={product.img} className="img-payment" />
           <div className="Teamshirt">
           <h2 className="payment-Namemanu">{product.name}</h2>
           <h2 className="football-Namemanu">MANCHESTER UNITED FOOTBALL SHIRT</h2>

           <div className="shirtDetails">
           <h3 className="product-size1">Size <span>{product.Size}</span></h3>
           <h3 className="product-package">Packaging Seal <span>{product.Packaging_Seal}</span></h3>
           <h3 className="product-condition">Condition <span>{product.Condition}</span></h3>
           <h3 className="product-price1">Price <span>฿ {product.Price}</span></h3>
           </div>
           </div>
        </div>
        </div>
      )}
      
    </div>

    
  );
}

export default Payment;
