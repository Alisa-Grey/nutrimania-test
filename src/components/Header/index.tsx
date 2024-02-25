import { FC } from 'react';
import './style.css';

export const Header: FC = () => {
  return (
    <header className='header'>
      <button className='header__button'>
        <svg
          fill='#565867'
          height='200px'
          width='200px'
          version='1.1'
          id='Layer_1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 476.213  476.213'
          stroke='#565867'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0' fill='transparent'></g>
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            <polygon points='476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 '></polygon>
          </g>
        </svg>
      </button>
      <h1 className='title'>Питание 11.03</h1>
    </header>
  );
};
