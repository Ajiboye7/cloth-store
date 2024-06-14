import React from "react";
import Category from "./Category";
import "../styles/Home.css";
import Hero from "./Hero";
import NewArrivals from "./NewArrival";
import SpecialOffers from './SpecialOffers';
import ProductOfTheYear from "./ProductOfTheYear";

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
