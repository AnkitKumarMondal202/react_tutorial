import React from 'react';
import style from './Display.module.css';

export default function Display(props) {
  return (
    <div className={style.container}>
      <h1>My name is : {props.name}</h1>
      <h1>My phone number is : {props.phone}</h1>
    </div>
  );
}
