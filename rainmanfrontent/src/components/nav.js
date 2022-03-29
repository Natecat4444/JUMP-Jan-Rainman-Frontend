import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Login from './login';
import Landing from './landing';
import SignUp from './signup';
import CreateBet from './createBet';
import Profile from './profile';
import {CSSTransition} from 'react-transition-group';
import LeaderBoard from './leaderboard';
import { List, ArrowUp } from 'react-bootstrap-icons';
import Admin from './admin';
import EditUser from '../adminsubpages/EditUser';
import EditBet from '../adminsubpages/EditBet';

function toggleButton(isActive)
{
  isActive = !isActive;

  if(isActive)
  {
    toggleImage = <ArrowUp color="white" size={24}/>;
  }
  else
  {
    toggleImage = <List color="white" size={24}/>;
  }

  console.log(isActive);
  return isActive;
}

var toggleImage = <List color="white" size={24}/>;

function Header(){ 
  const [inProp, setInProp] = useState(false);

    return(
  <div className="Header">

    <div className = "navInfo">
      <div className = "navUser">
        <div className = "navUserImg">
        </div>
        <div className = 'navUserName'>
          hello
        </div>
      </div>

      <div className = "navCredits">
        <p>world</p>
      </div>
    </div>

    <BrowserRouter>
        <header id="header" className="">
        <button className="toggleButton bi bi-list" onClick={() => setInProp(toggleButton(inProp))}>{toggleImage}</button>
        </header>
        <CSSTransition in={inProp} timeout={2000} onExited = {() => setInProp(false)} classNames="my-node" unmountOnExit appear>
        <div className="menu">
            <nav id="navbar" className="">
              <NavLink to="/login" className = "" onClick={() => setInProp(false)}>
                <button>Login</button>
              </NavLink>
            
              <NavLink to="/signup" className = "" onClick={() => setInProp(false)}>
                <button>Sign Up</button>
              </NavLink>
            
              <NavLink to="/createbet" className = "" onClick={() => setInProp(false)}>
                <button>Create Bet</button>
              </NavLink>
            
              <NavLink to="/profile" className = "" onClick={() => setInProp(false)}>
                <button>Profile</button>
              </NavLink>

              <NavLink to="/leaderboard" className = "" onClick={() => setInProp(false)}>
                <button>Leaderboard</button>
              </NavLink>
              </nav>
        </div>
        </CSSTransition>

        <Routes>
          <Route index element={<Landing/>}/>
          <Route path="/" element={<Landing />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/createbet" element={<CreateBet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/edituser/{id}" element={<EditUser />} />
          <Route path="/admin/editbet/{id}" element={<EditBet />} />
        </Routes>
      </BrowserRouter>
  </div>
  ); 
}  



  
export default Header

