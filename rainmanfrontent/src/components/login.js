import React, {useState} from "react";
import RainUserAPI from "../APIs/RainUserAPI";

function Login(props){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) =>{

        event.preventDefault()
        
        const setData = {
            "username": username,
            "password": password
        }

        console.log(JSON.stringify(setData))

        RainUserAPI.getToken(setData);

    }

    return(
        <div className = "routeContent">

        <div className = "routeTitle">
          <h1>Login</h1>
        </div>
        
            <div className = 'form'>
                <form onSubmit={handleSubmit}>
                    <div className="formElement"><label>Username</label><input type="text" value={username} onChange={(event)=>{setUsername(event.target.value)}}/></div> <br />
                    <div className="formElement"><label>Password</label><input type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/></div> <br />
                    <input type="submit"  value="Login"/>
                </form>
            </div>
        </div>
    )
}

export default Login;