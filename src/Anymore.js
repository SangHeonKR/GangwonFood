import React, { useRef } from 'react';
import Navbar from './Navbar';
import './Anymore.css';

function Anymore({ darkMode, setPage, toggleDarkMode }) {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    const slider = sliderRef.current;
    const slideWidth = slider.querySelector('.slide').offsetWidth;
    if (direction === 'next') {
      slider.scrollBy({ left: slideWidth + 20, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: -(slideWidth + 20), behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`App-header ${darkMode ? 'dark-mode' : ''}`}>
        <Navbar darkMode={darkMode} setPage={setPage} toggleDarkMode={toggleDarkMode} />
      </header>
      <main>
        <div className="news-slider">
          <div className="slider-title">
            <h1>🥕로컬푸드 정보</h1>
            <button className="add-button" onClick={() => setPage('opinion')}>의견 추가</button>
          </div>
          <div className="slider-container-wrapper">
            <button className="scroll-button left" onClick={() => slide('prev')}>❮</button>
            <div className="slider-container" ref={sliderRef}>
              <div className="slide">
                <img src={`${process.env.PUBLIC_URL}/images/dakgalbi.png`} alt="춘천 닭갈비" />
                <p>춘천 닭갈비</p>
              </div>
              <div className="slide">
                <img src={`${process.env.PUBLIC_URL}/images/makguksu.png`} alt="춘천 막국수" />
                <p>춘천 막국수</p>
              </div>
              <div className="slide">
                <img src={`${process.env.PUBLIC_URL}/images/chu.png`} alt="원주 추어탕" />
                <p>원주 추어탕</p>
              </div>
              <div className="slide">
                <img src={`${process.env.PUBLIC_URL}/images/gon.png`} alt="원주 곤드레나물밥" />
                <p>원주 곤드레나물밥</p>
              </div>
              <div className="slide">
                <img src={`${process.env.PUBLIC_URL}/images/waterchicken.png`} alt="삼척-태백 물닭갈비" />
                <p>삼척 태백 물닭갈비</p>
              </div>
              <div className="slide">
                <img src={`${process.env.PUBLIC_URL}/images/potato.png`} alt="강릉 감자옹심이" />
                <p>강릉 감자옹심이</p>
              </div>
              <div className="slide">
                <img src={`${process.env.PUBLIC_URL}/images/sokchogang.png`} alt="속초 닭강정" />
                <p>속초 닭강정</p>
              </div>
              <div className="slide">
                <img src={`${process.env.PUBLIC_URL}/images/ojingeo.png`} alt="속초 오징어순대" />
                <p>속초 오징어순대</p>
              </div>
              <div className="slide">
                <img src={`${process.env.PUBLIC_URL}/images/daegae.png`} alt="동해 대개" />
                <p>동해 대개</p>
              </div>
              <div className="slide">
                <img src={`${process.env.PUBLIC_URL}/images/donghaefish.png`} alt="동해 생선찜" />
                <p>동해 생선찜</p>
              </div>
              <div className="slide">
                <img src={`${process.env.PUBLIC_URL}/images/hongcheon.png`} alt="홍천 감자전" />
                <p>홍천 감자전</p>
              </div>
              <div className="slide">
                <img src={`${process.env.PUBLIC_URL}/images/gomchi.png`} alt="삼척 곰칫국" />
                <p>삼척 곰칫국</p>
              </div>
            </div>
            <button className="scroll-button right" onClick={() => slide('next')}>❯</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Anymore;
