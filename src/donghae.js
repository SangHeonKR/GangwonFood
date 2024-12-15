import React from 'react';
import Navbar from './Navbar';
import './donghae.css';

const Donghae = ({ darkMode, setPage, toggleDarkMode }) => {
  return (
    <>
      <header className={`App-header ${darkMode ? 'dark-mode' : ''}`}>
        <Navbar darkMode={darkMode} setPage={setPage} toggleDarkMode={toggleDarkMode} />
      </header>
      <div className={`donghae-page ${darkMode ? 'dark-mode' : ''}`}>
        <h1 className={`donghae-title ${darkMode ? 'dark-mode' : ''}`}>#동해시</h1>
        <p>아름다운 해오름의 고장 동해시!</p>
        <div className="donghae-dish">
          <img src={`${process.env.PUBLIC_URL}/images/daegae.png`} alt="동해대게" />
          <h2>동해 대게</h2>
          <p>동해 대게는 신선한 대게를 다양한 요리로 즐길 수 있는 동해의 대표 음식입니다. 특히 항구 주변에서 맛볼 수 있습니다.</p>
        </div>
        <div className="donghae-dish">
          <img src={`${process.env.PUBLIC_URL}/images/donghaefish.png`} alt="동해생선찜" />
          <h2>동해 생선찜</h2>
          <p>동해 생선찜은 다양한 생선을 신선한 채로 찜 요리로 즐기는 동해의 별미입니다. 특히 동해의 항구에서 유명합니다!</p>
        </div>
      </div>
    </>
  );
};

export default Donghae;