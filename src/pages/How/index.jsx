import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.sass';

function How({ setCount }) {
  const navigate = useNavigate();

  const handleClick = change => {
    setCount(prev => prev + change);
    navigate('/when');
  };

  const isVertical = window.innerHeight > window.innerWidth;

  return (
    <div className={`how-container ${isVertical ? 'vertical' : 'horizontal'}`}>
      <h1 className='how-title'>¿Cómo te fue hoy?</h1>
      <div className='how-section win' onClick={() => handleClick(1)}>
        <span className='how-text'>BIEN</span>
      </div>
      <div className='how-section lose' onClick={() => handleClick(-1)}>
        <span className='how-text'>MAL</span>
      </div>
    </div>
  );
}

export default How;
