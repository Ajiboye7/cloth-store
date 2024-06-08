import React from "react";
import Category from "./Category";
import "../styles/Home.css";
import Hero from "./Hero";
import Sales from "./Sales";
import NewArrivals from "./NewArrival";
import BestSellers from "./BestSellers";
import SpecialOffers from './SpecialOffers';
import ProductOfTheYear from "./ProductOfTheYear";
import Shop from "../Pages/Shop";

function Home() {
  return (
    <div className="home-container">
      <Category />
      <Hero/>

      <NewArrivals/>
      <ProductOfTheYear/>
      <SpecialOffers/>
    </div>
  );
}

export default Home;
