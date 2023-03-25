import React, { useState } from 'react';
import './HomePage.css';
import { Link } from 'react-scroll';


const HomePage = () => {
  const [activeMenu, setActiveMenu] = useState('');


  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };


  return (
    <div className="homepage" id="homePage">
      <div className="recently-read">
        <img
          src="https://kbimages1-a.akamaihd.net/cbcee2a0-26d9-41eb-a441-7b5f3fde406c/1200/1200/False/don-quixote-167.jpg"
          alt="Buku Terakhir Dibaca"
          className="book-cover"
        />
        <h2>Ayo Baca Buku</h2>
        <Link
          className={activeMenu === 'recentBook' ? 'nav-item active' : 'nav-item'}
          to="library"
          smooth={true}
          duration={500}
          onClick={() => handleMenuClick()}>
          <button className='button'>Your Recent Book!</button>
        </Link>
      </div>
    </div>
  );
};


export default HomePage;
