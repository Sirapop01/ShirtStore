// Liver.js
import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Liver.css';
import LogoLiver from './Pict/Liverpool.png';

class Liver extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    try {
      // Make a GET request to your Flask API endpoint for Liverpool products
      const response = await axios.get('http://127.0.0.1:5000/shirtLiver');

      // Update the state with the fetched products
      this.setState({ products: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    const { products } = this.state;

    return (
      <div className="Liver-info">
        <center>
          <div className="Logo-Liver-info">
            <img src={LogoLiver} alt="Logo Liverpool FC" className="Logo-Liver" />
          </div>
        </center>
        <center><h1 style={{ color: 'white' }}>Liverpool FC</h1></center>
        <center><h2 style={{ color: 'white' }}>{products.length} Products</h2></center>

        {/* Display the product data with links to the detail page */}
        <div className="product-list">
          {products.map(product => (
            <Link key={product._id} to={`/Liverdetailpage/${product._id}`} className="product-link">
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

export default Liver;
