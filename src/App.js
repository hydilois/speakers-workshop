/** @format */

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Donate from './components/Donate';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Message from './components/Message';


function App() {
  return (
    <BrowserRouter>
      <div className='ui container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/message' element={<Message />}></Route>
          <Route path='/donate' element={<Donate />}></Route>
          <Route path='/faq' element={<Faq />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
