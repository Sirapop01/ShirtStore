import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './manudetail.css';
import Manushirt from './Pict/manushirt.png';

const Manudetailpage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

  return (
    <div className="container">
        {product && (
          <div className="product-items">
              <img src={product.img} className="product-Image" />
              <h1 className="man-united-heading">#ManUnited</h1> 
            <div className="product-manuname">
              <h2 className="product-Name">{product.name}</h2>
            <div className="product-detail">
              <h3 className="product-Starting">Starting From <span>{product.Starting_From}</span></h3>
              <h3 className="product-Highest">Highest Bid <span>{product.Highest_Bid}</span></h3>
              <h3 className="product-Last">Last sale <span>{product.Last_sale}</span></h3> 
              
              <div className="product-list">
              <h3 className="product-d">{product.PD}</h3>
              <h3 className="product-brand">Brand {product.Brand}</h3>
              <h3 className="product-color">Color {product.Color}</h3>
              <h3 className="product-date">Release Date {product.Release_Date}</h3>
              <h3 className="product-size">Size {product.Size}</h3>
          </div>
          </div>
          </div>
          </div>
        )}
      </div>  
  );
}

export default Manudetailpage;
