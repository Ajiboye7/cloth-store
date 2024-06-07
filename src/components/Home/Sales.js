import React from "react";
import "../styles/Sales.css";
import Sale1 from "../Images/sale4.jpg";
import sale5 from "../Images/sale5.jpg";

function Sales() {
  return (
    <div className="card-section">
      <div className="card card1">
        <img src={Sale1} alt="Cloth 1" />
        <div className="card-content">
          <h2>Clothes sale</h2>
          <p>Get up to 30% discount</p>
          <button>Shop now</button>
        </div>
      </div>
      <div className="card card2">
        <img src={sale5} alt="Cloth 1" />
        <div className="card-content">
          <h2>Offer</h2>
          <p>Up to 50% sale for men wares</p>
          <button>Shop now</button>
        </div>
      </div>
      <div className="card card3">
        <img src={Sale1} alt="Cloth 1" />
        <div className="card-content">
          <h2>Top sales</h2>
          <p>Get the best quality of wears</p>
          <button>Shop now</button>
        </div>
      </div>
    </div>
  );
}

export default Sales;
