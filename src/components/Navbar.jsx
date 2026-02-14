import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link 
        to="/" 
        className={location.pathname === '/' ? 'active' : ''}
      >
        Home
      </Link>
      <Link 
        to="/add" 
        className={location.pathname === '/add' ? 'active' : ''}
      >
        Add Quote
      </Link>
    </nav>
  );
};

export default Navbar;
