import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Shop.css';

function Shop() {
  const [suits, setSuits] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [currentSuitsPage, setCurrentSuitsPage] = useState(1);
  const [currentShoesPage, setCurrentShoesPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSuits = async () => {
      try {
        const response = await axios.get('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list', {
          params: {
            country: 'us',
            lang: 'en',
            currentpage: '0',
            pagesize: '30',
            categories: 'men_all',
            concepts: 'H&M MAN'
          },
          headers: {
            'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
            'x-rapidapi-key': 'cdd55f2df6msh1337361e79a64f1p1b12c6jsn48d27f4e316a'
          }
        });

        setSuits(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchShoes = async () => {
      try {
        const response = await axios.get('https://asos2.p.rapidapi.com/products/v2/list', {
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
        });

        setShoes(response.data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSuits();
    fetchShoes();
  }, []);

  // Pagination logic for suits
  const indexOfLastSuit = currentSuitsPage * productsPerPage;
  const indexOfFirstSuit = indexOfLastSuit - productsPerPage;
  const currentSuits = suits.slice(indexOfFirstSuit, indexOfLastSuit);

  // Pagination logic for shoes
  const indexOfLastShoe = currentShoesPage * productsPerPage;
  const indexOfFirstShoe = indexOfLastShoe - productsPerPage;
  const currentShoes = shoes.slice(indexOfFirstShoe, indexOfLastShoe);

  const paginateSuits = (pageNumber) => setCurrentSuitsPage(pageNumber);
  const paginateShoes = (pageNumber) => setCurrentShoesPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="shop-section">
      <div className="suits-section">
        <h3>Suits</h3>
        <div className="shop-products">
          {currentSuits.map((product, index) => (
            <div className="suit-card" key={index}>
              <img src={product.images[0].url} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price.value}</p>
            </div>
          ))}
        </div>
        <Pagination productsPerPage={productsPerPage} totalProducts={suits.length} paginate={paginateSuits} />
      </div>
      <div className="shoes-section">
        <h3>Shoes</h3>
        <div className="shop-products">
          {currentShoes.map((product, index) => (
            <div className="shoe-card" key={index}>
              <img src={`https://${product.imageUrl}`} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price.current.text}</p>
            </div>
          ))}
        </div>
        <Pagination productsPerPage={productsPerPage} totalProducts={shoes.length} paginate={paginateShoes} />
      </div>
    </div>
  );
}

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Shop;
