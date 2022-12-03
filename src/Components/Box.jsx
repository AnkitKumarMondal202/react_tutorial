import React from 'react';
import style from './Box.module.css';
import img from './box-image.jpg';

export default function Box() {
  return (
    <div className={style.box}>
      <img src={img} alt="No iamge" className={style.img} />
      <div className={style.text}>My name is Box</div>
    </div>
  );
}
