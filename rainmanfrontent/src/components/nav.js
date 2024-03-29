import React, { useEffect, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Login from './login';
import Landing from './landing';
import SignUp from './signup';
import CreateBet from './createBet';
import Profile from './profile';
import {CSSTransition} from 'react-transition-group';
import LeaderBoard from './leaderboard';
import { List, ArrowUp, Coin } from 'react-bootstrap-icons';
import Admin from './admin';
import EditUser from '../adminsubpages/EditUser';
import EditBet from '../adminsubpages/EditBet';
import RainUserAPI from '../APIs/RainUserAPI';

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

  return isActive;
}

function closeTab()
{
  toggleImage = <List color="white" size={24}/>;
  return false;
}

function pageLoading()
{
    return true;
}

var toggleImage = <List color="white" size={24}/>;

function Header(){ 
  const [inProp, setInProp] = useState(false);
  const [loadPage, setLoadPage] = useState(false);
  const [username, setUsername] = useState('')
  const [credit, setCredits] = useState(0)

  useEffect(() =>{
    RainUserAPI.getUser(setUsername, setCredits)
  })

    return( 
  <div className="Header">

    

    <BrowserRouter>
        <header id="header" className="">

        <div className = "navUser">
        <div className = "navUserImg">
        <NavLink to="/profile" className = "" onClick={() => setInProp(closeTab())}>
                <button onClick={() => setLoadPage(pageLoading())}><img src="assets/images/emptyProfile.jpg" alt="profileImg"></img></button>
        </NavLink>
        </div>
        <div className = 'navUserName'>
          <p>{username}</p>
        </div>
      </div>

      <div className = "navCredits">
        <div className = "navCreditImg">
          <p><Coin color="royalblue" size={40}/></p>
        </div>
        <div className = 'navCreditAmount'>
          <p>{credit}</p>
        </div>
      </div>

      <button className="toggleButton" onClick={() => setInProp(toggleButton(inProp))}>{toggleImage}</button>

        </header>
        <CSSTransition in={inProp} timeout={500} classNames="my-node" unmountOnExit>
        <div className="menu">
            <nav id="navbar" className="">
              <NavLink to="/login" className = "" onClick={() => setInProp(closeTab())}>
                <button onClick={() => setLoadPage(pageLoading())}>Login</button>
              </NavLink>
            
              <NavLink to="/signup" className = "" onClick={() => setInProp(closeTab())}>
                <button onClick={() => setLoadPage(pageLoading())}>Sign Up</button>
              </NavLink>
            
              <NavLink to="/createbet" className = "" onClick={() => setInProp(closeTab())}>
                <button onClick={() => setLoadPage(pageLoading())}>Create Bet</button>
              </NavLink>

              <NavLink to="/leaderboard" className = "" onClick={() => setInProp(closeTab())}>
                <button onClick={() => setLoadPage(pageLoading())}>Leaderboard</button>
              </NavLink>
              </nav>
        </div>
        </CSSTransition>
        
        <CSSTransition in={loadPage} timeout={300} onEntered={() => setLoadPage(false)} classNames="route-Load">
          <div className ="routePages" >
            <Routes>
              <Route index element={<Landing/>}/>
              <Route path="/" element={<Landing />}/>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/createbet" element={<CreateBet />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/edituser/:id" element={<EditUser />} />
              <Route path="/admin/editbet/:id" element={<EditBet />} />
            </Routes>
          </div>
        </CSSTransition>
      </BrowserRouter>
  </div>
  ); 
}  



  
export default Header

