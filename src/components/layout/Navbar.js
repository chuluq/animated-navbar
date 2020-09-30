import React from 'react';
import { Link } from 'react-router-dom';
// icons
import IconRightArrow from '../icons/IconRightArrow';
import IconHome from '../icons/IconHome';
import IconSearch from '../icons/IconSearch';
import IconCalendar from '../icons/IconCalendar';
import IconAbout from '../icons/IconAbout';
import IconUser from '../icons/IconUser';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar-nav'>
        <li className='logo'>
          <Link to='/' className='nav-link'>
            <span className='link-text logo-text'>Navbar</span>
            <span>
              <IconRightArrow className='icon' />
            </span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            <span>
              <IconHome className='icon' />
            </span>
            <span className='link-text'>Home</span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/search' className='nav-link'>
            <span>
              <IconSearch className='icon' />
            </span>
            <span className='link-text'>Search Ajarn</span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/calendar' className='nav-link'>
            <span>
              <IconCalendar className='icon' />
            </span>
            <span className='link-text'>Calendar</span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/about' className='nav-link'>
            <span>
              <IconAbout className='icon' />
            </span>
            <span className='link-text'>About</span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/profile' className='nav-link'>
            <span>
              <IconUser className='icon' />
            </span>
            <span className='link-text'>Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
