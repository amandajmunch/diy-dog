import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default (
  <BrowserRouter>
    <div className="app">
      <Navbar />
      <Route exact path='/' component={App} />
      <Route exact path='/search' component={Search}/>
      <Footer />
    </div>
  </BrowserRouter>

);


