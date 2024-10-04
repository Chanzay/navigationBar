import React from 'react'

function NavLinks({mobileTab}) {
  return (
    <div className={`linkTab ${mobileTab === true ? 'linkTabActive': ''}`}>
      <a href='/#' className='tab'>Home</a>
      <a href='/#' className='tab'>Shop</a>
      <a href='/#' className='tab'>Search</a>
      <a href='/#' className='tab'>About Us</a>
      </div>
  )
}

export default NavLinks