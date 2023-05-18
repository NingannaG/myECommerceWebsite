import React from 'react'
import styled from 'styled-components'
import './navbar.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {
  const cart=useSelector(state=>state.cart.quantity);
  console.log(cart)
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
          <Link to="/cart">
          <div className='menu'>
            <i className="bi bi-cart"></i>
            <i className="bi bi-badge-fill"><span style={{fontSize:"12px",color:"black",position:"relative",left:-1,bottom:13}}>
              {cart}</span></i></div>
          </Link>
              </div>
      </div>
    </div>
  )
}

export default Navbar