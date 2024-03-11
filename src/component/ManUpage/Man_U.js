// Man_U.js

import React, { Component } from 'react';
import axios from 'axios';
import './Man_U.css';
import LogoManU from './Picture/LogoManU.png';
import { Link } from 'react-router-dom'; // เพิ่ม import สำหรับ Link component

class Man_U extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    try {
      // Make a GET request to your Flask API endpoint for Manchester United products
      const response = await axios.get('http://127.0.0.1:5000/shirtmanu');
      
      // Update the state with the fetched products
      this.setState({ products: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    const { products } = this.state;

    return (
      <div className="ManU-info">
        <center>
          <div className="Logo-Man_U-info">
            <img src={LogoManU} alt="โลโก้ Manchester United" className="Logo-Man_U" />
          </div>
        </center>
        <center><h1 style={{ color: 'white' }}>Manchester United</h1></center>
        <center><h2 style={{ color: 'white' }}>{products.length} Products</h2></center>

       {/* Display the product data with links to the detail page */}
       <div className="product-list">
          {products.map(product => (
            <Link key={product._id} to={"/Manudetailpage/" + product._id} className="product-link">
            <div className="product-item">
              <img src={product.img} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">ราคา: ${product.price} บาท</p>
            </div>
          </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Man_U;
