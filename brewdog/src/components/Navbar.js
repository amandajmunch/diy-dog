import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{
  return (
    <div className="nav">
      <nav>
         <ul>
            <li><Link to='/'>My Recipes</Link></li>
            <li><Link to='/gallery'>My Images</Link></li>
            <li><Link to='/search'>Search</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
