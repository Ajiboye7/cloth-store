import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetails.css';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const options = {
        method: 'GET',
        url: 'https://asos2.p.rapidapi.com/products/v4/detail',
        params: {
          id: productId,
          lang: 'en-US',
          store: 'US',
          sizeSchema: 'US',
          currency: 'USD'
        },
        headers: {
          'x-rapidapi-key': 'cdd55f2df6msh1337361e79a64f1p1b12c6jsn48d27f4e316a',
          'x-rapidapi-host': 'asos2.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProduct();
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
    <div className="product-detail">
      <img src={`https://${product.media.images[0].url}`} alt={product.name} className="product-detail-image" />
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p>Price: {product.price.current.text}</p>
        <p>Description: {product.description || 'No description available.'}</p>
        <p>Color: {product.color}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
