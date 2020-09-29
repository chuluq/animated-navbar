import React from 'react';
import { Link } from 'react-router-dom';
// icons
import IconHome from '../icons/IconHome';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            <IconHome className='icon' />
            <span className='link text'>Home</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
