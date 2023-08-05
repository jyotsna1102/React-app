import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
  <nav className="header">
    {/*logo on the left */}
        <Link to="/" target="_parent">
        <img
          className="header__logo"
          src="https://www.linkpicture.com/q/log_8.png"
          alt=""
          />
          </Link>
      
      {/*search box*/}
       <div className = "header__search">
       <input type="text" className="header__searchInput"/>
       <SearchIcon className = "header__searchIcon" />
       </div>
        
      {/*3 links */}
       <div className = "header__nav">

        {/*1st link */}
        <Link to="/login" target="_parent" className = "header__link">
        <div className = "header__option">
        <span className="header__optionLineOne">Hello Jyo</span>
        <span className="header__optionLineTwo">Sign In</span>
        </div>
        </Link>

        {/*2nd link */}
        <Link to="/login" target="_parent" className = "header__link">
        <div className = "header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">Orders</span>
        </div>
        </Link>

        {/*3rd  link */}
        <Link to="/checkout" target="_parent" className="header__link">
        <div className = "header__optionBasket">
        {/*shopping Basket icon */}
         <ShoppingBasketIcon />
        {/* number of items in the basket*/}
        <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
        </Link>

       </div>

      {/*Basket icon with number */}
      </nav>
  );
}

export default Header;
