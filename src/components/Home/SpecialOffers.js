import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/SpecialOffer.css';
import { Link } from 'react-router-dom';

function SpecialOffers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
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
          const selectedProducts = data.slice(0, 6);
          setProducts(selectedProducts);
        } else {
          throw new Error('No products available');
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="special-offers-section">
    <h3>Special Offers</h3>
    <div className="special-offers">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={`https://${product.imageUrl}`} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price.current.value}</p>
            <p>Color: {product.colour}</p>
          </Link>
        </div>
      ))}
    </div>
  </div>
  );
}

export default SpecialOffers;
