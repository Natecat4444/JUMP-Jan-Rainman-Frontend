import React, { Component, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Login from './login';
import Landing from './landing';
import SignUp from './signup';
import CreateBet from './createBet';

function Header(){ 
    return(
  <div className="Header">

    <BrowserRouter>
    
        <header id="header" className="">
        <nav id="navbar" className="">
          <ul>
            <li>
              <NavLink to="/login" className = "">
                <button>Login</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className = "">
                <button>Sign Up</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/createbet" className = "">
                <button>Create Bet</button>
              </NavLink>
            </li>
          </ul>
        </nav>
        </header>

        <Routes>
          <Route index element={<Landing/>}/>
          <Route path="/" element={<Landing />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/createbet" element={<CreateBet />} />
        </Routes>
      </BrowserRouter>
  </div>
  ); 
}  



  
export default Header