import React from 'react';
import style from './Header.module.css';

export default function Header() {
  return (
    <div className={style.nav}>
      <ul className={style.navbar}>
        <li className={style.li}>Home</li>
        <li className={style.li}>About</li>
        <li className={style.li}>Contact</li>
      </ul>
    </div>
  );
}
