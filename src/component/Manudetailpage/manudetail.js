import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams from react-router-dom
import './manudetail.css';
import Manushirt from './Pict/manushirt.png';

const Manudetailpage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log('Fetching product with id:', id);
        const response = await axios.get(`http://localhost:5000/Manudetails/${id}`);
        console.log('Response:', response.data);
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
        {/* Render Manushirt image and ManUnited heading */}
        <div className="Shirt-main-manu">
          <img src={Manushirt} alt="Shirt Manu" className="Shirt-Manu" />
        </div> 
        <center><h1 style={{ color: 'black' }}>#ManUnited</h1></center> 
        {/* Display the product data */}
        <Link key={product && product._id} to={`/Manudetailpage/${product && product._id}`} className="product-link">
          <div className="product-items">
            <h3 className="product-Name">{product && product.name}</h3>
            <h3 className="product-Starting">Starting From {product && product.Starting_From}</h3>
            <h3 className="product-Highest">Highest Bid {product && product.Highest_Bid}</h3>
            <h3 className="product-Last">Last sale {product && product.Last_sale}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Manudetailpage;
