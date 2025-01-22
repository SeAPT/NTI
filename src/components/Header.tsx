import { useState } from 'react';
import styled from '../styles/header.module.scss';
import init, { greet } from 'wasm-lib';

const header = () => {
  const [isLanguage, setLanguage] = useState<string>('Eng');

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  //import Rust lib from React
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    await init('/wasm_lib_bg.wasm'); // WebAssembly init
    const greeting = greet('Neo Terra');
    setMessage(greeting);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <p>{message}</p>
      <header id={styled.header}>
        <div id={styled.logo}>
          <span id={styled.main}>NTI</span>
          <span>NEO TERRA INVEST</span>
        </div>
        <div id={styled.menu}>
          <button id={styled.language}>
            <select
              name="language"
              id="language-select"
              onChange={handleLanguageChange}
              value={isLanguage}
            >
              <option value="eng">ENG</option>
              <option value="kor">KOR</option>
            </select>
          </button>
        </div>
      </header>
      <div id={styled.banner}>
        <div id={styled.bannerImage} />
      </div>
    </div>
  );
};

export default header;
