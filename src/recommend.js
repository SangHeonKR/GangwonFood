import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; 
import './recommend.css';

function Recommend({ darkMode, setPage, toggleDarkMode }) {
  const [dishes, setDishes] = useState([
    { id: 1, name: '춘천 닭갈비', imgSrc: '/images/dakgalbi.png', recommendations: 0 },
    { id: 2, name: '춘천 막국수', imgSrc: '/images/makguksu.png', recommendations: 0 },
    { id: 3, name: '원주 추어탕', imgSrc: '/images/chu.png', recommendations: 0 },
    { id: 4, name: '원주 곤드레나물밥', imgSrc: '/images/gon.png', recommendations: 0 },
    { id: 5, name: '삼척 태백 돌솥갈비', imgSrc: '/images/waterchicken.png', recommendations: 0 },
    { id: 6, name: '강릉 감자옹심이', imgSrc: '/images/potato.png', recommendations: 0 },
    { id: 7, name: '속초 닭강정', imgSrc: '/images/sokchogang.png', recommendations: 0 },
    { id: 8, name: '속초 오징어순대', imgSrc: '/images/ojingeo.png', recommendations: 0 },
    { id: 9, name: '동해 대개', imgSrc: '/images/daegae.png', recommendations: 0 },
    { id: 10, name: '동해 생선찜', imgSrc: '/images/donghaefish.png', recommendations: 0 },
    { id: 11, name: '홍천 감자전', imgSrc: '/images/hongcheon.png', recommendations: 0 },
    { id: 12, name: '삼척 곰칫국', imgSrc: '/images/gomchi.png', recommendations: 0 },
  ]);

  useEffect(() => {
    const savedDishes = localStorage.getItem('dishes');
    if (savedDishes) {
      setDishes(JSON.parse(savedDishes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dishes', JSON.stringify(dishes));
  }, [dishes]);

  const handleRecommend = (id) => {
    setDishes(dishes.map(dish => 
      dish.id === id ? { ...dish, recommendations: dish.recommendations + 1 } : dish
    ));
  };

  const sortedDishes = dishes.sort((a, b) => b.recommendations - a.recommendations);

  return (
    <>
      <Navbar darkMode={darkMode} setPage={setPage} toggleDarkMode={toggleDarkMode} /> {}
      <div className="recommend-page">
        <h2> 🤩유저들이 뽑은 추천 먹거리 </h2>
        <div className="dish-list">
          {sortedDishes.map((dish, index) => (
            <div key={dish.id} className={`dish-item ${index < 3 ? `top-${index + 1}` : ''}`}>
              <span className="rank">{index + 1}위</span>
              <img src={dish.imgSrc} alt={dish.name} className="dish-image"/>
              <div className="dish-info">
                <p className="dish-name">{dish.name}</p>
                <p className="dish-recommendations">누적 추천받은 수: {dish.recommendations}</p>
              </div>
              <button onClick={() => handleRecommend(dish.id)} className="recommend-button">👍추천하기</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Recommend;