import React from 'react';
import style from './Main.module.css';
import Box from './Box';
import { boxData } from '../data/Mydata';

export default function Main() {
  return (
    <div className={style.main_container}>
      <div className={style.container}>
        {boxData.map(() => {
          return <Box />;
        })}
      </div>
    </div>
  );
}
