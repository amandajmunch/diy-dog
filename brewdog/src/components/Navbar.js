import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search.png';
import Logo from '../logo.png';

const Navbar = () =>{
  return (
    <div className="nav">
      <nav>
         <ul>
            <img src={Logo} className="logo" alt=""/>
            <li><Link to='/'>My Recipes</Link></li>
            <li><Link to='/gallery'>My Images</Link></li>
            <li><Link to='/search'><img src={Search} className="searchIcon" alt=""/></Link></li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
