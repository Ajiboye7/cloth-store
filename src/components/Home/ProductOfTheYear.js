import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ProductOfTheYear.css';

function ProductOfTheYear() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const options = {
        method: 'GET',
        url: 'https://asos2.p.rapidapi.com/products/v2/list',
        params: {
          store: 'US',
          offset: '0',
          categoryId: '4209',
          country: 'US',
          sort: 'freshness',
          currency: 'USD',
          sizeSchema: 'US',
          limit: '48',
          lang: 'en-US'
        },
        headers: {
          'x-rapidapi-key': 'cdd55f2df6msh1337361e79a64f1p1b12c6jsn48d27f4e316a',
          'x-rapidapi-host': 'asos2.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const data = response.data.products;
        if (data && data.length > 0) {
          setProduct(data[30]);
        } else {
          throw new Error('No products available');
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

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
    <div className="product-of-the-year">
      <h3>Product of the Year</h3>
      <div className="product-of-the-year-card">
        <img src={`https://${product.imageUrl}`} alt={product.name} />
        <div className="product-of-the-year-details">
          <h2>{product.name}</h2>
          <p>{product.description || 'No description available.'}</p>
          <p>Price: {product.price.current.text}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductOfTheYear;
