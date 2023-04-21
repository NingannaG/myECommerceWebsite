import React from 'react'
import styled from 'styled-components'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
      <div className="wrapper">
        <div className="left">
          <div className="language">
            EN
          </div>
          <div className='searchbox'>
            <input type="text" className="input" />
            <i className="bi bi-search"></i>
          </div>

        </div>
        <div className="center">Ninganna</div>
        <div className="right">
          <div className='menu'>Resister</div>
          <div className='menu'>Sign In</div>
          <div className='menu'>
            <i className="bi bi-cart"></i>
            <i className="bi bi-badge-8k-fill"></i></div></div>
      </div>
    </div>
  )
}

export default Navbar