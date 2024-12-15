import React from 'react';
import './Navbar.css';

const Navbar = ({ darkMode, setPage, toggleDarkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <button className="main-title" onClick={() => setPage('home')}>
        <img src={`${process.env.PUBLIC_URL}/images/icon.png`} alt="강원별미" className="main-title-icon" /> {}
      </button>
      <ul className="navbar-links">
        <li><a href="#opinion" className={darkMode ? 'dark-mode' : ''} onClick={() => setPage('opinion')}>의견제시</a></li>
        <li><a href="#recommend" className={darkMode ? 'dark-mode' : ''} onClick={() => setPage('recommend')}>추천하기</a></li>
        <li><a href="#login" className={`button ${darkMode ? 'dark-mode' : ''}`} onClick={() => setPage('anymore')}>목록전체</a></li>
        <li><a href="#dark-mode" className={`button ${darkMode ? 'dark-mode' : ''}`} onClick={toggleDarkMode}>다크모드</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;