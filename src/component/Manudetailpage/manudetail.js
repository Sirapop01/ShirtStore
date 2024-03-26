import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory, Link} from 'react-router-dom';
import './manudetail.css';
import backArrow from './Pict/backArrow.png';



const Manudetailpage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const history = useHistory();
  
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
          <div className="product-itemsmanu">
              <img src={product.img} className="product-Imagemanu" />
              <h1 className="man-united-heading">#ManUnited</h1> 
            <div className="product-manuname">
              <h2 className="product-Namemanu">{product.name}</h2>
            <div className="product-detailmanu">
              <h3 className="product-Startingmanu">Starting From <span>฿ {product.Starting_From}</span></h3>
              <h3 className="product-Highestmanu">Highest Bid <span>฿ {product.Highest_Bid}</span></h3>
              <h3 className="product-Lastmanu">Last sale <span>฿ {product.Last_sale}</span></h3> 
              
              <div className="product-Listmanu">
              <h3 className="product-dmanu">{product.PD}</h3>
              <h3 className="product-brandmanu">Brand <span>{product.Brand}</span></h3>
              <h3 className="product-colormanu">Color <span>{product.Color}</span></h3>
              <h3 className="product-datemanu">Release Date <span>{product.Release_Date}</span></h3>
              <h3 className="product-sizemanu">Size <span>{product.Size}</span></h3>
          </div>
          </div>
          </div>
          {/* เพิ่มปุ่ม Buy */}
          <Link to={"/ManUpaymentpage/"+ product._id} className="buy-link">
        <button className="buy-button">Buy</button>
      </Link>
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

export default Manudetailpage;
