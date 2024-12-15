import React from 'react';
import Navbar from './Navbar';
import './Wonju.css';

const Wonju = ({ darkMode, setPage, toggleDarkMode }) => {
  return (
    <>
      <header className={`App-header ${darkMode ? 'dark-mode' : ''}`}>
        <Navbar darkMode={darkMode} setPage={setPage} toggleDarkMode={toggleDarkMode} />
      </header>
      <div className="wonju-page">
        <h1 className="wonju-title">#원주시</h1>
        <p>새로운 변화, 큰 행복, 더 큰 원주!</p>
        <div className="wonju-dish">
          <img src={`${process.env.PUBLIC_URL}/images/chu.png`} alt="추어탕" />
          <h2>추어탕</h2>
          <p>원주 추어탕은 강원도 원주에서 유명한 전통 음식으로, 신선한 미꾸라지를 이용해 깊은 맛을 자랑합니다. 다양한 한약재와 채소를 함께 끓여 몸에 좋은 보양식으로 인기가 많습니다.</p>
        </div>
        <div className="wonju-dish">
          <img src={`${process.env.PUBLIC_URL}/images/gon.png`} alt="곤드레나물밥" />
          <h2>곤드레나물밥</h2>
          <p>곤드레나물밥은 한국의 전통 음식으로, 곤드레 나물을 쌀과 함께 지어 만든 건강식입니다. 특유의 향긋한 맛과 고소한 향이 특징이며, 간장 양념장과 함께 먹으면 더욱 맛있습니다.</p>
        </div>
      </div>
    </>
  );
};

export default Wonju;
