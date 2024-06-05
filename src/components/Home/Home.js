import React from "react";
import Category from "./Category";
import "../styles/Home.css";
import Hero from "./Hero";


function Home() {
  return (
    <div className="home-container">
      <Category />
      <Hero/>
    </div>
  );
}

export default Home;
