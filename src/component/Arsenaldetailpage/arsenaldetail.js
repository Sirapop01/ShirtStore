import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './arsenaldetail.css';


const Arsenaldetailpage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/arsdetail/${id}`);
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
          <div className="product-itemsars">
              <img src={product.img} className="product-Imagears" />
              <h1 className="ars-heading">#Arsenal</h1> 
            <div className="product-manunamears">
              <h2 className="product-Namears">{product.name}</h2>
            <div className="product-detailars">
              <h3 className="product-Startingars">Starting From <span>{product.Starting_From}</span></h3>
              <h3 className="product-Highestars">Highest Bid <span>{product.Highest_Bid}</span></h3>
              <h3 className="product-Lastars">Last sale <span>{product.Last_sale}</span></h3> 
              
              <div className="product-Listars">
              <h3 className="product-dars">{product.PD}</h3>
              <h3 className="product-brandars">Brand <span>{product.Brand}</span></h3>
              <h3 className="product-colorars">Color <span>{product.Color}</span></h3>
              <h3 className="product-datears">Release Date <span>{product.Release_Date}</span></h3>
              <h3 className="product-sizears">Size <span>{product.Size}</span></h3>
          </div>
          </div>
          </div>
          </div>
        )}
      </div>  
  );
}

export default Arsenaldetailpage;
