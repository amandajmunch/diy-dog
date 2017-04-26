import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search2.png';
import Logo from '../logo2.png';
// import Dog from '../dog.jpg';

const Navbar = () =>{
  return (
    <div className="nav">
      <nav>
         <ul>
            <img src={Logo} className="logo" alt=""/>
            <li><Link to='/'>RECIPES</Link></li>
            <li><Link to='/gallery'>IMAGES</Link></li>
            <li><Link to='/search'><img src={Search} className="searchIcon" alt=""/></Link></li>
            <li className="title">DIY DOG</li>
          {/*  <li className="logout"><Link to='/' onClick={(e)=>"FB.logout()"}>LOGOUT</Link></li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
