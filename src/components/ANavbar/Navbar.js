import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('');


  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };


  return (
    <div className="navbar">
      <div className="nav-item">
        <Link
          className={activeMenu === 'home' ? 'icon active' : 'icon'}
          to="alternativeHome"
          smooth={true}
          duration={500}
          onClick={() => handleMenuClick('')}
        >
          <FaHome />
        </Link>
      </div>
      <Link
        className={activeMenu === 'recentBook' ? 'nav-item active' : 'nav-item'}
        to="homePage"
        smooth={true}
        duration={500}
        onClick={() => handleMenuClick('')}
      >
        Recent Book
      </Link>
      <Link
        className={activeMenu === 'addBook' ? 'nav-item active' : 'nav-item'}
        to="addBook"
        smooth={true}
        duration={500}
        onClick={() => handleMenuClick('')}
      >
        Add Book
      </Link>
   
      <Link
        className={activeMenu === 'library' ? 'nav-item active' : 'nav-item'}
        to="library"
        smooth={true}
        duration={500}
        onClick={() => handleMenuClick('')}
      >
        Library
      </Link>

      <Link
        className={activeMenu === 'library' ? 'nav-item active' : 'nav-item'}
        to="Footer"
        smooth={true}
        duration={500}
        onClick={() => handleMenuClick('')}
      >
        About Us
      </Link>
    </div>
  );
};


export default Navbar;
