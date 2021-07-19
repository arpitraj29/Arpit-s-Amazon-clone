import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{basket,user}, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }

  return (
      <div  className = 'header'>

            <Link to='/'>

            <img className="header_logo"  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />

            </Link>

            <div className="header_search">
            <input className="header_searchInput" type="text" />
            <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header__nav">
              <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header_option'>
                  <span className='header_option_1'>Hello {!user ? 'Guest' : user.email}</span>
                  <span className='header_option_2'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
              </Link>
                <Link to='/orders'>
                <div className='header_option'>
                  <span className='header_option_1'>Returns</span>
                  <span className='header_option_2'>& Orders</span>
                </div>
                </Link>

                <div className='header_option'>
                  <span className='header_option_1'>Your</span>
                  <span className='header_option_2'>Prime</span>
                </div>
                <Link to="/checkout">
                <div className="header_optionBasket">
                <ShoppingBasketIcon />
                <span className="header_option_2 header_basketCount">{basket?.length}</span>
                </div>
                </Link>
            </div>
      </div>
  )
}

export default Header
