import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory, Link } from 'react-router-dom';
import './liverdetail.css';
import backArrow from './Pict/backArrow.png';

const Liverdetailpage = () => {
  const { id } = useParams();  // Assuming category is fixed as 'lfcdetails'
  const [product, setProduct] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/shirtLiver/${id}`);
        console.log(response.data);  // ตรวจสอบข้อมูลที่ได้จาก API
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
      <footer className="footer1">

        <button className="backButton" onClick={goBack}>
          <img src={backArrow} alt="Back Arrow" /> {/* ใช้รูปภาพของลูกศร */}
        </button>
      </footer>

    </div>
  );
}

export default Liverdetailpage;
