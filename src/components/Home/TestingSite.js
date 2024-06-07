/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/TestingSite.css.css';

function TestingSite() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const options = {
        method: 'GET',
        url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
        params: {
          country: 'us',
          lang: 'en',
          currentpage: '0',
          pagesize: '30',
          categories: 'kids_all',
          concepts: 'H&M MAN'
        },
        headers: {
          'x-rapidapi-key': 'cdd55f2df6msh1337361e79a64f1p1b12c6jsn48d27f4e316a',
          'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const data = response.data.results;
        if (data && data.length > 0) {
          const selectedProducts = data.slice(0, 3);
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
          <div className="product-card" key={product.articleCode}>
            <img src={product.images[0].url} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: {product.price.formattedPrice}</p>
            <p>Color: {product.rgbColors ? product.rgbColors.join(', ') : 'Various'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestingSite;*/
