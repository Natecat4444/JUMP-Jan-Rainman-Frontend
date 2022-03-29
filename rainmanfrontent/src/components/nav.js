import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Login from './login';
import Landing from './landing';
import SignUp from './signup';
import CreateBet from './createBet';
import Profile from './profile';
import {CSSTransition} from 'react-transition-group';
import LeaderBoard from './leaderboard';

function toggleButton(isActive)
{
  isActive = !isActive;

  console.log(isActive);
  return isActive;
}

function Header(){ 
  const [inProp, setInProp] = useState(false);

    return(
  <div className="Header">

    <BrowserRouter>
    
        <header id="header" className="">
        <button className="toggleButton" onClick={() => setInProp(toggleButton(inProp))}>open</button>
        <nav id="navbar" className="">
          <CSSTransition in={inProp} timeout={2000} onExited = {() => setInProp(false)} classNames="my-node" unmountOnExit appear>
            <div className="menu">
              <NavLink to="/login" className = "">
                <button>Login</button>
              </NavLink>
            
              <NavLink to="/signup" className = "">
                <button>Sign Up</button>
              </NavLink>
            
              <NavLink to="/createbet" className = "">
                <button>Create Bet</button>
              </NavLink>
            
              <NavLink to="/profile" className = "">
                <button>Profile</button>
              </NavLink>
            </div>
          </CSSTransition>
        </nav>
        </header>

        <Routes>
          <Route index element={<Landing/>}/>
          <Route path="/" element={<Landing />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/createbet" element={<CreateBet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        </Routes>
      </BrowserRouter>
  </div>
  ); 
}  



  
export default Header

