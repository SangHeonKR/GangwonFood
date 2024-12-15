import React from 'react';
import Navbar from './Navbar';
import './gang.css';

const Gang = ({ darkMode, setPage, toggleDarkMode }) => {
  return (
    <>
      <header className={`App-header ${darkMode ? 'dark-mode' : ''}`}>
        <Navbar darkMode={darkMode} setPage={setPage} toggleDarkMode={toggleDarkMode} />
      </header>
      <div className={`gang-page ${darkMode ? 'dark-mode' : ''}`}>
        <h1 className={`gang-title ${darkMode ? 'dark-mode' : ''}`}>#강릉시</h1>
        <p>강원제일! 행복 강릉!</p>
        <div className="wonju-dish">
          <img src={`${process.env.PUBLIC_URL}/images/potato.png`} alt="감자옹심이" />
          <h2>감자옹심이</h2>
          <p>강원도의 향토 음식으로, 간 감자를 녹말가루와 섞어 새알처럼 빚어 끓여 먹는 음식입니다.</p>
        </div>
        <div className="wonju-dish">
          <img src={`${process.env.PUBLIC_URL}/images/sundubu.png`} alt="순두부" />
          <h2>순두부</h2>
          <p>강릉의 초당마을의 전통 순두부로 만든 음식입니다. 특히 짬뽕순두부가 지역 음식으로 매우 유명합니다!</p>
        </div>
      </div>
    </>
  );
};

export default Gang;
