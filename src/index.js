//React imports
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//Pages imports
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Shops from './pages/Shops';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

//Components imports
import Header from './components/Header';
import Cart from './components/Cart';

//Utils imports
import GlobalStyle from './utils/style/Globalstyle';
import { CartProvider } from './utils/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <CartProvider>
        <Header />
        <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/shops/:id" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CartProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
