import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import './mancidetail.css';
import backArrow from './Pict/backArrow.png';

const Mancidetailpage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const history = useHistory();
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/Mancitydetails/${id}`);
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
              <div className="product-itemsmanci">
                  <img src={product.img} className="product-Imagemanci" />
                  <h1 className="man-city-heading">#ManCity</h1> 
               
                  <h2 className="product-Namemanci">{product.name}</h2>
                <div className="product-detailmanci">
                  <h3 className="product-Startingmanci">Starting From <span>฿ {product.Starting_From}</span></h3>
                  <h3 className="product-Highestmanci">Highest Bid <span>฿ {product.Highest_Bid}</span></h3>
                  <h3 className="product-Lastmanci">Last sale <span>฿ {product.Last_sale}</span></h3> 
                  
                  <div className="product-listmanci">
                  <h3 className="product-dmanci">{product.PD}</h3>
                  <h3 className="product-brandmanci">Brand <span>{product.Brand}</span></h3>
                  <h3 className="product-colormanci">Color <span>{product.Color}</span></h3>
                  <h3 className="product-datemanci">Release Date <span>{product.Release_Date}</span></h3>
                  <h3 className="product-sizemanci">Size <span>{product.Size}</span></h3>
              </div>
              </div>
              <button className="buy-button">Buy</button>
              </div>
            
            )}
            <footer className="footer1">
        
        <button className="backButton" onClick={goBack}>
          <img src={backArrow} alt="Back Arrow" /> {/* ใช้รูปภาพของลูกศร */}
        </button>
      </footer>
          </div>  
      );
    }
    
    export default Mancidetailpage;