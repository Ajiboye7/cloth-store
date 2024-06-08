import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home/Home';
import Footer from './components/Footer';
import Shop from './components/Pages/Shop';
import ProductDetail from './components/Pages/ProductDetail';
import ClothProductDetail from './components/Pages/ClothProuctDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='shop' element= {<Shop/>}/>
      {/*  <Route path='/product/:productId' element={<ProductDetail />} />*/} 
      <Route path="/clothProductDetail/:productId" element={<ClothProductDetail />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
