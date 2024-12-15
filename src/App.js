import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Chuncheon from './Chuncheon';
import Wonju from './wonju';
import Sokcho from './sokcho';
import Gang from './gang';
import Donghae from './donghae';
import Samcheok from './samcheok'; 
import Anymore from './Anymore';
import Footer from './Footer';
import Recommend from './recommend';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState('home');
  const [opinions, setOpinions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    setOpinions([]);
  }, [page]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      const currentDateTime = new Date().toLocaleString();
      setOpinions([...opinions, { text: inputValue, time: currentDateTime }]);
      setInputValue('');
    }
  };

  const renderNavbar = () => (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <button className="main-title" onClick={() => setPage('home')}>
        <img src={`${process.env.PUBLIC_URL}/images/icon.png`} alt="강원별미" className="main-title-icon" />
      </button>
      <ul className="navbar-links">
        <li><a href="#opinion" className={darkMode ? 'dark-mode' : ''} onClick={() => setPage('opinion')}>의견제시</a></li>
        <li><a href="#recommend" className={darkMode ? 'dark-mode' : ''} onClick={() => setPage('recommend')}>추천하기</a></li>
        <li><a href="#list" className={`button ${darkMode ? 'dark-mode' : ''}`} onClick={() => setPage('anymore')}>목록전체</a></li>
        <li><a href="#dark-mode" className={`button ${darkMode ? 'dark-mode' : ''}`} onClick={toggleDarkMode}>다크모드</a></li>
      </ul>
    </nav>
  );

  const renderPageContent = () => {
    switch (page) {
      case 'home':
        return (
          <>
            <header className={`App-header ${darkMode ? 'dark-mode' : ''}`}>
              {renderNavbar()}
              <div className="header-content">
                <div className={`text-content ${darkMode ? 'dark-mode' : ''}`}>
                  <div className="subtitle-container">
                    <p className="subtitle">🐻강원의 맛을 세계로, 현지의 맛과 열정이 만나다!</p>
                    <p className="description"> - 강원특별자치도만의 매력이 담긴 맛의 정원에 당신을 초대합니다!</p>
                  </div>
                </div>
              </div>
            </header>
            <main>
              <p className="today-recommendation">⬇️오늘의 추천 먹거리⬇️</p>
              <p className="today-recommendation2">해당 음식관련 종류가 있는 웹페이지로 이동합니다.</p>
              <div className="dishes">
                <div className="dish">
                  <a href="https://www.diningcode.com/list.dc?query=%EC%B6%98%EC%B2%9C%20%EB%8B%AD%EA%B0%88%EB%B9%84" target="_blank" rel="noopener noreferrer">
                    <img src="/images/dish1.png" alt="춘천닭갈비" />
                    <h2>[춘천] 닭갈비</h2>
                    <p>춘천닭갈비는 불판 위에서 춤추는 매콤한 닭고기의 유혹이다.</p>
                  </a>
                </div>
                <div className="dish">
                  <a href="https://www.diningcode.com/list.dc?query=%ED%99%94%EC%B2%9C%20%EC%82%B0%EC%B2%9C%EC%96%B4%EB%8F%8C%EC%86%A5%EB%B0%A5" target="_blank" rel="noopener noreferrer">
                    <img src="/images/dish2.png" alt="산천어돌솥밥" />
                    <h2>[화천] 산천어돌솥밥</h2>
                    <p>신선한 산천어와 각종 채소를 돌솥에 정성껏 끓여내어 깊은 맛과 영양을 동시에 즐길 수 있는 강원도의 대표적인 별미</p>
                  </a>
                </div>
                <div className="dish">
                  <a href="https://www.diningcode.com/list.dc?query=%ED%9A%A1%EC%84%B1%20%EB%8D%94%EB%8D%95%EA%B5%AC%EC%9D%B4" target="_blank" rel="noopener noreferrer">
                    <img src="/images/dish3.png" alt="더덕구이" />
                    <h2>[횡성] 더덕구이</h2>
                    <p>횡성군의 더덕이 새콤달콤한 고추장 양념과 만나 새롭고 맛있는 구이 요리로 재탄생 했습니다.</p>
                  </a>
                </div>
                <div className="dish">
                  <a href="https://www.diningcode.com/search.dc?query=%EC%B2%A0%EC%9B%90%20%EB%8F%BC%EC%A7%80%EA%B0%88%EB%B9%84" target="_blank" rel="noopener noreferrer">
                    <img src="/images/dish4.png" alt="철원 돼지갈비" />
                    <h2>[철원] 돼지갈비</h2>
                    <p>맛있는 양념이 발라진 돼지갈비가 숯불과 함께 더욱 더 매력있는 음식으로 변화 했습니다!</p>
                  </a>
                </div>
              </div>
            </main>
          </>
        );
      case 'opinion':
        return (
          <>
            <header className={`App-header ${darkMode ? 'dark-mode' : ''}`}>
              {renderNavbar()}
            </header>
            <div className="opinion-page-container">
              <div className="opinion-page">
                <h2>🚨의견을 제시 해주세요</h2>
                <p>❗당신이 생각하는 로컬푸드가 있으신가요?</p>
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="춘천의 닭갈비가 맛있어요" 
                />
                <div className="button-group">
                  <button className={darkMode ? 'dark-mode' : ''} onClick={handleSubmit}>전송</button>
                  <button onClick={() => setPage('home')} className={`back-button ${darkMode ? 'dark-mode' : ''}`}>
                    <FaArrowLeft className="back-button-icon" /> 홈으로
                  </button>
                </div>
                <div className="opinions-list">
                  <h3>나의 문의내역 :</h3>
                  {opinions.map((opinion, index) => (
                    <p key={index}>{opinion.text} <span>[ :: {opinion.time} :: ]</span></p>
                  ))}
                </div>
              </div>
            </div>
          </>
        );
      case 'recommend':
        return <Recommend darkMode={darkMode} setPage={setPage} toggleDarkMode={toggleDarkMode} />;
      case 'developing':
        return (
          <div className={`developing-page ${darkMode ? 'dark-mode' : ''}`}>
            <h2>🚧죄송합니다. 해당 페이지는 개발중에 있습니다.</h2>
            <button onClick={() => setPage('home')} className={`back-button ${darkMode ? 'dark-mode' : ''}`}>
              <FaArrowLeft className="back-button-icon" /> 홈으로
            </button>
          </div>
        );
      case 'chuncheon':
        return <Chuncheon darkMode={darkMode} setPage={setPage} toggleDarkMode={toggleDarkMode} />;
      case 'wonju':
        return <Wonju darkMode={darkMode} setPage={setPage} toggleDarkMode={toggleDarkMode} />;
      case 'gang':
        return <Gang darkMode={darkMode} setPage={setPage} toggleDarkMode={toggleDarkMode} />;
      case 'sokcho':
        return <Sokcho darkMode={darkMode} setPage={setPage} toggleDarkMode={toggleDarkMode} />;
      case 'donghae':
        return <Donghae darkMode={darkMode} setPage={setPage} toggleDarkMode={toggleDarkMode} />;
      case 'samcheok':
        return <Samcheok darkMode={darkMode} setPage={setPage} toggleDarkMode={toggleDarkMode} />;
      case 'anymore':
        return <Anymore darkMode={darkMode} setPage={setPage} toggleDarkMode={toggleDarkMode} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {renderPageContent()}
      <Footer darkMode={darkMode} setPage={setPage} />
    </div>
  );
}

export default App;
