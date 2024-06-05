import React from "react";
import "../styles/Category.css"; 

function Category() {
  return (
    <div className="category">
      <div className="category-content">
        <h1>
          <i className="fas fa-tags"></i>
          <span>Shop by Category</span>
        </h1>
        <div className="search-box">
          <input type="text" placeholder="Search your product here" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="user-cart-icons">
        <i className="fas fa-user"></i>
        <i className="fas fa-shopping-cart"></i>
       
        </div>
      </div>
    </div>
  );
}

export default Category;
