import React from 'react';
import s from './FriendsItems.module.css';

const FriendsItems = () => {
  return (
    <div className={s.items}>
      <div className={s.item}>
        <img
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          alt=""
        />
        <span>Artem</span>
      </div>
      <div className={s.item}>
        <img
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          alt=""
        />
        <span>Bogdan</span>
      </div>
      <div className={s.item}>
        <img
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          alt=""
        />
        <span>Vadim</span>
      </div>
    </div>
  );
};

export default FriendsItems;