import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/Shop.css';

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch New Arrivals
        const newArrivalsResponse = await fetch('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN', {
          headers: {
            'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
            'x-rapidapi-key': 'cdd55f2df6msh1337361e79a64f1p1b12c6jsn48d27f4e316a'
          }
        });
        if (!newArrivalsResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const newArrivalsData = await newArrivalsResponse.json();
        const newArrivals = newArrivalsData.results.slice(0, 8);

        // Fetch Product of the Year
        const productOfTheYearOptions = {
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

        const productOfTheYearResponse = await axios.request(productOfTheYearOptions);
        const productOfTheYearData = productOfTheYearResponse.data.products;
        const productOfTheYear = productOfTheYearData[30];

        // Combine and shuffle products
        const combinedProducts = [
          ...newArrivals,
          {
            ...productOfTheYear,
            type: 'product-of-the-year'
          }
        ];

        // Shuffle the combined products array
        for (let i = combinedProducts.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [combinedProducts[i], combinedProducts[j]] = [combinedProducts[j], combinedProducts[i]];
        }

        setProducts(combinedProducts);
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
    <div className="shop-section">
      <h3>Shop</h3>
      <div className="products">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={`https://${product.imageUrl || product.images[0].url}`} alt={product.name} />
            <div className="product-details">
              <h2>{product.name}</h2>
              {product.type === 'product-of-the-year' ? (
                <p>{product.description || 'No description available.'}</p>
              ) : (
                <p>${product.price.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
