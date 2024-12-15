import React from 'react';
import Navbar from './Navbar';
import './Chuncheon.css';

const Chuncheon = ({ darkMode, setPage, toggleDarkMode }) => {
  return (
    <>
      <header className={`App-header ${darkMode ? 'dark-mode' : ''}`}>
        <Navbar darkMode={darkMode} setPage={setPage} toggleDarkMode={toggleDarkMode} />
      </header>
      <div className={`chuncheon-page ${darkMode ? 'dark-mode' : ''}`}>
        <h1 className={`chuncheon-title ${darkMode ? 'dark-mode' : ''}`}>#춘천시</h1>
        <p>시민 성공시대, 다시 뛰는 춘천!</p>
        <div className={`chuncheon-dish ${darkMode ? 'dark-mode' : ''}`}>
          <img src={`${process.env.PUBLIC_URL}/images/dakgalbi.png`} alt="닭갈비" />
          <h2>닭갈비</h2>
          <p>춘천 닭갈비는 매콤한 양념에 재운 닭고기를 철판에 볶아 먹는 요리로, 쫄깃한 식감과 풍부한 맛이 특징입니다.</p>
        </div>
        <div className={`chuncheon-dish ${darkMode ? 'dark-mode' : ''}`}>
          <img src={`${process.env.PUBLIC_URL}/images/makguksu.png`} alt="막국수" />
          <h2>막국수</h2>
          <p>춘천 막국수는 메밀면에 양념장과 각종 채소를 넣어 비벼 먹는 담백하고 상쾌한 면 요리입니다.</p>
        </div>
      </div>
    </>
  );
};

export default Chuncheon;
