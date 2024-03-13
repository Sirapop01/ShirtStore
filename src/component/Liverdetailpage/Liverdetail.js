import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './liverdetail.css';

const Liverdetailpage = () => {
  const { id } = useParams();  // Assuming category is fixed as 'lfcdetails'
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/lfcdetails/${id}`);
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
          <div className="product-itemslfc">
              <img src={product.img} className="product-Imagelfc" />
              <h1 className="liver-heading">#LiverpoolFC</h1> 
           
              <h2 className="product-Namelfc">{product.name}</h2>
            <div className="product-detaillfc">
              <h3 className="product-Startinglfc">Starting From <span>฿ {product.Starting_From}</span></h3>
              <h3 className="product-Highestlfc">Highest Bid <span>฿ {product.Highest_Bid}</span></h3>
              <h3 className="product-Lastlfc">Last sale <span>฿ {product.Last_sale}</span></h3> 
              
              <div className="product-listlfc">
              <h3 className="product-dlfc">{product.PD}</h3>
              <h3 className="product-brandlfc">Brand <span>{product.Brand}</span></h3>
              <h3 className="product-colorlfc">Color <span>{product.Color}</span></h3>
              <h3 className="product-datelfc">Release Date <span>{product.Release_Date}</span></h3>
              <h3 className="product-sizelfc">Size <span>{product.Size}</span></h3>
          </div>
          </div>
          </div>
        
        )}
      </div>  
  );
}

export default Liverdetailpage;
