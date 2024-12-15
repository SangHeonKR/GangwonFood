import React from 'react';
import Navbar from './Navbar';
import './sokcho.css';

const Sokcho = ({ darkMode, setPage, toggleDarkMode }) => {
  return (
    <>
      <header className={`App-header ${darkMode ? 'dark-mode' : ''}`}>
        <Navbar darkMode={darkMode} setPage={setPage} toggleDarkMode={toggleDarkMode} />
      </header>
      <div className={`sokcho-page ${darkMode ? 'dark-mode' : ''}`}>
        <h1 className={`sokcho-title ${darkMode ? 'dark-mode' : ''}`}>#속초시</h1>
        <p>시민은 하나로, 속초는 미래로!</p>
        <div className="sokcho-dish">
          <img src={`${process.env.PUBLIC_URL}/images/sokchogang.png`} alt="속초닭강정" />
          <h2>속초 닭강정</h2>
          <p>속초 닭강정은 바삭한 튀김과 달콤한 소스가 어우러져 인기가 많습니다. 특히 중앙시장에서 매우 유명합니다.</p>
        </div>
        <div className="sokcho-dish">
          <img src={`${process.env.PUBLIC_URL}/images/ojingeo.png`} alt="속초오징어순대" />
          <h2>속초 오징어순대</h2>
          <p>속초 오징어순대는 오징어 속에 찹쌀과 각종 야채를 채워 만든 속초의 대표적인 별미입니다. 특히 아바이마을에서 유명합니다!</p>
        </div>
      </div>
    </>
  );
};

export default Sokcho;
