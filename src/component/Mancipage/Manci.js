import axios from 'axios';
import React, { Component } from 'react';
import './Manci.css';
import LogoManci from './Pic/Mancity.png'; 
import { Link } from 'react-router-dom';

class Manci extends Component {
    constructor() {
        super();
        this.state = {
          products: [],
        };
      }
    
      async componentDidMount() {
        try {
          // Make a GET request to your Flask API endpoint for Manchester City products
          const response = await axios.get('http://127.0.0.1:5000/shirtmancity');
          
          // Update the state with the fetched products
          this.setState({ products: response.data });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    
      render() {
        const { products } = this.state;
    
        return (
          <div className="Manci-info">
            <center>
              <div className="Logo-Manci-info">
                <img src={LogoManci} alt="โลโก้ Manchester City FC" className="Logo-Manci" />
              </div>
            </center>
            <center><h1 style={{ color: 'white' }}>Manchester City FC</h1></center>
            <center><h2 style={{ color: 'white' }}>{products.length} Products</h2></center>
    
            {/* Display the product data with links to the detail page */}
       <div className="product-list">
          {products.map(product => (
            <Link key={product._id} to={"/Mancidetailpage/" + product._id} className="product-link">
            <div className="product-item">
              <img src={product.img} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">ราคา: {product.price} บาท</p>
            </div>
          </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Manci;
