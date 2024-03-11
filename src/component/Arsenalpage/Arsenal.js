import axios from 'axios';
import React, { Component } from 'react';
import './Arsenal.css';
import LogoArse from './Pictu/Arsenal.png'; 
import { Link } from 'react-router-dom';


class Arsenal extends Component {
    constructor() {
        super();
        this.state = {
          products: [],
        };
      }
    
      async componentDidMount() {
        try {
          // Make a GET request to your Flask API endpoint for Liverpool products
          const response = await axios.get('http://127.0.0.1:5000/shirtarsenal');
          
          // Update the state with the fetched products
          this.setState({ products: response.data });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    
      render() {
        const { products } = this.state;
    
        return (
          <div className="Arse-info">
            <center>
              <div className="Logo-Arse-info">
                <img src={LogoArse} alt="โลโก้ Arsenal FC" className="Logo-Arse" />
              </div>
            </center>
            <center><h1 style={{ color: 'white' }}>Arsenal FC</h1></center>
            <center><h2 style={{ color: 'white' }}>{products.length} Products</h2></center>
    
            {/* Display the product data with links to the detail page */}
        <div className="product-list">
          {products.map(product => (
            <Link key={product._id} to={`/Arsenaldetailpage/${product._id}`} className="product-link">
              <div className="product-item">
                <img src={product.img} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{`ราคา: ${product.price} บาท`}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Arsenal;
