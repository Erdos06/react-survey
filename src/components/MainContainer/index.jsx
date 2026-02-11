import React from 'react';
import './MainContainer.scss';

function MainContainer() {
  return (
    <div className="main-container">
      <div className="text-container">
        Создай свой опрос и проходи чужой
        <div className="description-container">
          Популярный инструмент для исследования удовлетворенности пользователей, получения отзывов,
          маркетингового исследования и другие онлайн анкеты.
        </div>
      </div>
      <div className="image-container">
        <img src="https://cdn.survio.com/web-2020/images/home/main-2-min.jpg" alt="" />
      </div>
    </div>
  );
}

export default MainContainer;
