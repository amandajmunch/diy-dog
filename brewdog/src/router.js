import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Test from './components/Test';
import BeerDeets from './components/BeerDeets';
import Login from './components/Login';

export default (
  <BrowserRouter>
    <div className="app">
      <Navbar />
      <Route exact path='/' component={App} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/beers/:id' component={BeerDeets} />
      <Route exact path='/search' component={Search}/>
      <Route exact path='/gallery' component={Test}/>
      <Footer />
    </div>
  </BrowserRouter>
);




