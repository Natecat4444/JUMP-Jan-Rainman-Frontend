import React, { Component, useState } from 'react'

function Header(){ 
    return(  
  <div className="Header">

  <header id="header" className="">

    <nav id="navbar" className="">
      <ul>
        <li><a href="login" className=""><button><span>Log in</span></button></a></li>
        <li><a href="signup" className=""><button><span>Sign Up</span></button></a></li>
        <li><a href="createbet" className=""> <button><span>Create Bet</span></button></a></li>
        {/* <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li> */}
      </ul>
    </nav>

  </header>
  </div>
  ); 
}  



  
export default Header