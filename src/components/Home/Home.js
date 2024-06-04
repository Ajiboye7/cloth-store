import React from "react";
import Category from "./Category";
import "../styles/Home.css";
import Hero from "./Hero";
import Image1 from '../Images/Image1.jpg'
import Image2 from '../Images/Image2.jpg'
import Image3 from '../Images/Image3.jpg'

function Home() {
  const slides = [
    {
      image: Image1,
      title: "Discover Your Style",
      description:
        "Elevate your wardrobe with our exclusive collection of premium fabrics and timeless designs. From casual chic to sophisticated elegance, find the perfect ensemble for every occasion. Explore our latest arrivals and experience the luxury of fine craftsmanship and impeccable tailoring.",
    },
    {
      image: Image2,
      title: "New Arrivals",
      description:
        "Step into the spotlight with our latest arrivals. Embrace the season's trends with confidence and flair. Whether you're looking for statement pieces or wardrobe staples, we have something for every style and taste.",
    },
    {
        image: Image3,
        title: "New Arrivals",
        description:
          "Step into the spotlight with our latest arrivals. Embrace the season's trends with confidence and flair. Whether you're looking for statement pieces or wardrobe staples, we have something for every style and taste.",
      },
  ];
  return (
    <div className="home-container">
      <Category />
      <Hero slides={slides} />
      {/* Other components or sections */}
    </div>
  );
}

export default Home;
