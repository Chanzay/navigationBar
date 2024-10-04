import React from 'react'
import logo from '../assets/cat.png';
import menu from '../assets/MenuButton.png';

function Logo({handleClick}) {
  return (
    <div className='logoContent'>
      <img src={logo} alt="Logo" className='logo'/>
      <div className='brand'>MEOW</div>
      <button onClick={handleClick}> <img src={menu} alt="Logo" className='logo'/></button>
      </div>
  )
}

export default Logo
