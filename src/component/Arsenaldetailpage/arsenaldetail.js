import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './arsenaldetail.css';
import arsshirt from './Pict/arsshirt.png';

const Arsenaldetailpage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

  return (
    <div className="container">
      <div className="Manu-info">
        <div className="Shirt-main-manu">
          <img src={arsshirt} alt="Shirt Manu" className="Shirt-Manu" />
        </div> 
        <h1 className="man-united-heading">#ManUnited</h1> 
        {product && (
          <div className="product-items">
            <h3 className="product-Name">{product.name}</h3>
            <h3 className="product-Starting">Starting From {product.Starting_From}</h3>
            <h3 className="product-Highest">Highest Bid {product.Highest_Bid}</h3>
            <h3 className="product-Last">Last sale {product.Last_sale}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Arsenaldetailpage;
