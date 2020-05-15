import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <NavLink to='/' activeClassName='nav-active' exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard' activeClassName='nav-active' exact>
            Admin
          </NavLink>
        </li>
        <li>
          <NavLink to='/info' activeClassName='nav-active' exact>
            Info
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' activeClassName='nav-active' exact>
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Miss Toys',
  icon: 'fas fa-gamepad',
};

export default Navbar;
