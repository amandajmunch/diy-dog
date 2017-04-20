import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{
  return (
    <nav>
       <ul>
          <li><Link to='/'>My Recipes</Link></li>
          <li><Link to='/search'>Search</Link></li>
          <li><Link to='/logout'>Logout</Link></li>
          <h1> Beer App </h1>
      </ul>
    </nav>
  )
}

export default Navbar;
