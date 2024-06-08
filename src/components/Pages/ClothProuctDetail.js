/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ClothProductDetail.css'; 
import { useParams } from 'react-router-dom';

function ClothProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      const options = {
        method: 'GET',
        url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail',
        params: {
          lang: 'en',
          country: 'us',
          productcode: id
        },
        headers: {
          'x-rapidapi-key': 'cdd55f2df6msh1337361e79a64f1p1b12c6jsn48d27f4e316a',
          'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setProduct(response.data);
        console.log(response.data)
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="cloth-detail">
      <h1 className="product-name">{product.name}</h1>
      <img className="product-image" src={product.image} alt={product.name} />
      <p className="product-description">Description: {product.description}</p>
      <p className="product-color">Color: {product.color}</p>
      <p className="product-price">Price: {product.price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ClothProductDetail;*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/ClothProductDetail.css'; // Import CSS file for styling

function ClothProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      const options = {
        method: 'GET',
        url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail',
        params: {
          lang: 'en',
          country: 'us',
          productcode: productId
        },
        headers: {
          'x-rapidapi-key': 'cdd55f2df6msh1337361e79a64f1p1b12c6jsn48d27f4e316a',
          'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
        }
      };
  
      try {
        const response = await axios.request(options);
        console.log("API response:", response.data); // Log the API response
        // Adjust based on actual response structure
        setProduct(response.data.product || response.data); 
        setLoading(false);
      } catch (error) {
        console.error("API request error:", error);
        setError(error);
        setLoading(false);
      }
    };
  
    fetchProductDetail();
  }, [productId]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="cloth-detail">
      <h1 className="product-name">{product.name}</h1>
      {product.images && product.images.length > 0 && (
        <img className="product-image" src={product.images[0].url} alt={product.name} />
      )}
      <p className="product-description">Description: {product.description}</p>
      <p className="product-color">Color: {product.color}</p>
      <p className="product-price">Price: ${product.price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ClothProductDetail;

