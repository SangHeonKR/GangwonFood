import React from 'react';
import Navbar from './Navbar';
import './samcheok.css';

const Samcheok = ({ darkMode, setPage, toggleDarkMode }) => {
  return (
    <>
      <header className={`App-header ${darkMode ? 'dark-mode' : ''}`}>
        <Navbar darkMode={darkMode} setPage={setPage} toggleDarkMode={toggleDarkMode} />
      </header>
      <div className={`samcheok-page ${darkMode ? 'dark-mode' : ''}`}>
        <h1 className={`samcheok-title ${darkMode ? 'dark-mode' : ''}`}>#태백-삼척시</h1>
        <p>매력적인 고원도시, 태백 / 동해바다의 꿈, 삼척 </p>
        <div className="samcheok-dish">
          <img src={`${process.env.PUBLIC_URL}/images/waterchicken.png`} alt="물닭갈비" />
          <h2>삼척-태백 물닭갈비</h2>
          <p>물닭갈비는 닭갈비에 국물을 더해 찌개처럼 끓여 먹는 요리로, 일반적인 닭갈비와는 달리 국물의 풍미와 함께 매콤한 맛을 즐길 수 있습니다.</p>
        </div>
        <div className="samcheok-dish">
          <img src={`${process.env.PUBLIC_URL}/images/gomchi.png`} alt="삼척곰칫국" />
          <h2>삼척-태백 곰칫국</h2>
          <p>삼척과 태백의 곰치국은 시원하고 담백한 맛이 특징인 전통 음식입니다. 신선한 곰치와 함께 다양한 해산물로 맛을 낸 국입니다.</p>
        </div>
      </div>
    </>
  );
};

export default Samcheok;