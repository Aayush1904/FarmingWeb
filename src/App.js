import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shopex from './Pages/Shopex';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/cart';
import LoginSignUp from './Pages/LoginSignUp';
import Banner_Fruits from './Components/Assests/Assets/Banner_Fruits.webp'
import Banner_vegetables from './Components/Assests/Assets/Banner_vegetable.jpg';
import Banner_OrganicProducts from './Components/Assests/Assets/Organic_products.jpg.avif';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shopex />} />
            <Route path='/Mens' element={<ShopCategory banner={Banner_vegetables} category="Vegetable" />} />
            <Route path='/Womens' element={<ShopCategory banner={Banner_Fruits} category="Fruits" />} />
            <Route path='/kids' element={<ShopCategory banner={Banner_OrganicProducts} category="OrganicProducts" />} />
            <Route path='/foundProduct/:productid' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
