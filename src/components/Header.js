import React from "react";
import { Link } from "react-router-dom";

function Header() {

  return (
    <div>
      <div>
        <img
          className='ui image'
          alt='logo speakers 237'
          src='/images/banner.png'
        />
      </div>
      <div className='ui huge menu m-0'>
        <Link to='/' className='item'>
          Acceuil
        </Link>
        <Link to='/message' className='item'>
          Laisser un message
        </Link>
        <Link to='/about' className='item'>
          A propos
        </Link>
        <div class='right menu'>
          <Link to='/donate' className='item'>
            Faire un don
          </Link>
        </div>
      </div>
    </div>
  );

}

export default Header;