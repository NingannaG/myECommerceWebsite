import React, { useState } from 'react'
import styled from 'styled-components'
import './navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {logout} from "../../redux/userRedux"
import { Redirect } from 'react-router-dom'

const Navbar = () => {
  const cart=useSelector(state=>state.cart.quantity);
  const [user,setUser]=useState();
  let currentUser=useSelector(state=>state.user.currentUser);
  const dispatch=useDispatch();
  // if(currentUser!==null){
  //   setUser(true);
  //   console.log(currentUser)
  // }
  // else{
  //   setUser(false);
  //   console.log(currentUser)
  // }
  const hancleClick=()=>{
    dispatch(logout());
    console.log("clicked")
  }
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
        <Link to="/" style={{textDecoration:"none"}}>
        <div className="center" style={{cursor:"pointer"}}>Ninganna</div>
        </Link>
        <div className="right">
          {currentUser ? 
          <Link to="/login">
            <div className='menu' onClick={hancleClick}>Logout</div>
          </Link>
            
          :
          <>
          <Link to="/register" style={{textDecoration:"none"}}>            
          <div className='menu' >Resister</div>
          </Link>
          <Link to="/login" style={{"textDecoration":"none"}}>
            <div className='menu'>Sign In</div>
          </Link>
          </> 
          }
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