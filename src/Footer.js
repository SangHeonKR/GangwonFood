import React from 'react';
import './Footer.css'; // Import the Footer.css file

function Footer({ darkMode, setPage }) {
  return (
    <footer className={`footer ${darkMode ? 'dark-mode' : ''}`}> {}
      <div className={`footer-content ${darkMode ? 'dark-mode' : ''}`}>
        <button className="main-title" onClick={() => setPage('home')}>
          <img src={`${process.env.PUBLIC_URL}/images/icon.png`} alt="강원별미" className="footer-title-icon" /> {}
        </button>
        <p className={`hashtag ${darkMode ? 'dark-mode' : ''}`}>[ 20212837 / 임상헌 ] </p>
        <br></br>
        <p className="daepyo"> #강원도의 대표지역 </p>
        <div className={`regions ${darkMode ? 'dark-mode' : ''}`}>
          <div className={`region-buttons ${darkMode ? 'dark-mode' : ''}`}>
            <button className={`region-button ${darkMode ? 'dark-mode' : ''}`} onClick={() => setPage('chuncheon')}>춘천시</button>
            <button className={`region-button ${darkMode ? 'dark-mode' : ''}`} onClick={() => setPage('wonju')}>원주시</button>
            <button className={`region-button ${darkMode ? 'dark-mode' : ''}`} onClick={() => setPage('gang')}>강릉시</button>
            <button className={`region-button ${darkMode ? 'dark-mode' : ''}`} onClick={() => setPage('sokcho')}>속초시</button>
            <button className={`region-button ${darkMode ? 'dark-mode' : ''}`} onClick={() => setPage('samcheok')}>태백-삼척시</button>
            <button className={`region-button ${darkMode ? 'dark-mode' : ''}`} onClick={() => setPage('donghae')}>동해시</button>
          </div>
          <button className={`more ${darkMode ? 'dark-mode' : ''}`} onClick={() => setPage('anymore')}>더 많은 지역특별음식 확인</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
