import React, { useState } from 'react';
import style from './Form.module.css';
import Display from './Display';

export default function Form() {
  const [name, setName] = useState('');
  const [phone, setphone] = useState('');
  const [displayData, setdisplayData] = useState({
    name: '',
    phone: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setdisplayData({
      name: name,
      phone: phone,
    });
  };

  return (
    <>
      <div className={style.container}>
        <form method="post" onSubmit={handleSubmit}>
          <h1>Fomr</h1>
          <input
            className={style.input}
            type="text"
            name="name"
            placeholder="Enter your name:"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <input
            className={style.input}
            type="text"
            name="phone"
            placeholder="Enter your phone number: "
            value={phone}
            onChange={(event) => setphone(event.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Display name={displayData.name} phone={displayData.phone} />
    </>
  );
}
