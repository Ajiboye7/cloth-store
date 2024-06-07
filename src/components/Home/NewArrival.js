import React, { useEffect, useState } from 'react';
import '../styles/NewArrival.css';

function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN', {
          headers: {
            'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
            'x-rapidapi-key': 'cdd55f2df6msh1337361e79a64f1p1b12c6jsn48d27f4e316a'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.results.slice(0, 8));
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
    <div className="new-arrivals-section">
      <h3>New Arrivals</h3>
      <div className="new-arrivals">
        {products.map((product) => (
          <div className="product-card" key={product.articleCode}>
            <img src={product.images[0].url} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;

