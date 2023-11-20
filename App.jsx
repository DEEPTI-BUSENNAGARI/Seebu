import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import About from "./pages/about";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Signup from './pages/signup'
import Checkout from './pages/checkout'
import Forgotpasword from './pages/forgotpasword'
import Wishlist from "./pages/wishlist";
import "./App.css";
import ShopContext from "./components/shopcontext";
import Details from "./pages/details";
function App() {
  return (
    <div>
      <ShopContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="blog" element={<Blog />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='forgotpasword' element={<Forgotpasword />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path='checkout' element={<Checkout />} />
              <Route path="details" element={<Details />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShopContext>
    </div>
  );
}

export default App;
