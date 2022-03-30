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
        <div>

        <div className = "routeTitle">
          <h1>Login</h1>
        </div>

            <form onSubmit={handleSubmit}>
                <label>Username:<input type="text" value={username} onChange={(event)=>{setUsername(event.target.value)}}/></label> <br />
                <label>Password:<input type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/></label> <br />
                <input type="submit"  value="Login"/>
            </form>
        </div>
    )
}

export default Login;