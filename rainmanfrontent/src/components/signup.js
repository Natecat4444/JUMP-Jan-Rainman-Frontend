import React, {useState} from 'react'
import RainUserAPI from '../APIs/RainUserAPI'

function SignUp(props){
    const[username, setUsername] = useState('')
    const[first_name, setFirst_name] = useState('')
    const[last_name, setLast_name] = useState('')
    const[password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const user = {
            "userID": null,
            "username": username,
            "first_name": first_name,
            "last_name": last_name,
            "password": password,
            "role": "ROLE_USER",
            "enabled": true,
            "credit": 50
        }

        console.log(JSON.stringify(user))        
        RainUserAPI.createAccount(user)
    }

    return( 
        <div className = "routeContent">
        <div className = "routeTitle">
          <h1>Signup</h1>
        </div>
            <div className = 'form'>
                <form onSubmit={handleSubmit}>
                    <div className="formElement"> <label>Username</label><input type="text" value={username} onChange={(event)=>{setUsername(event.target.value)}} /></div> <br />
                    <div className="formElement"><label>First Name</label><input type="text" value={first_name} onChange={(event)=>{setFirst_name(event.target.value)}} /></div> <br />
                    <div className="formElement"><label>Last Name</label><input type="text" value={last_name} onChange={(event)=>{setLast_name(event.target.value)}} /></div> <br />
                    <div className="formElement"><label>Password</label><input type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} /></div> <br />
                    <input type="submit" value="Create Account" />
                </form>
            </div>
        </div>
    )
}

export default SignUp;