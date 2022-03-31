import React, {useState} from "react";

function Landing(){
    return(
        <div className = "routeContent">
        <div className = "routeTitle">
          <h1>Landing</h1>
        </div>
            <p>Welcome to Weather Better! <br /> If your account is not visible up to please <a href="/login">Login</a> or <a href="/signup">Sign Up</a> to use</p>
        </div>
    )
}

export default Landing;