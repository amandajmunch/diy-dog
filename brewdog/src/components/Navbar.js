import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{
  return (
    <div className="nav">
      <nav>
         <ul>
            <li><Link to='/'>My Recipes</Link></li>
            <li><Link to='/search'>Search</Link></li>
            <li><Link to='/logout'>Logout</Link></li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
