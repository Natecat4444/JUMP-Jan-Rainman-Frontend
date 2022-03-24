import React, {useState} from "react";

function Login(){
    return(
        <div>
            <form>
                <label>Username:<input type="text" /></label> <br />
                <label>Password:<input type="password"/></label> <br />
                <input type="submit"  value="Login"/>
            </form>
        </div>
    )
}

export default Login;