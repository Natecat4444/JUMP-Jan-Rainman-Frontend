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
            "role": "ROLE_User",
            "enabled": true,
            "credit": 50
        }

        
        RainUserAPI.createAccount(user)
    }

    return( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:<input type="text" value={username} onChange={(event)=>{setUsername(event.target.value)}} /></label> <br />
                <label>First Name:<input type="text" value={first_name} onChange={(event)=>{setFirst_name(event.target.value)}} /></label> <br />
                <label>Last Name:<input type="text" value={last_name} onChange={(event)=>{setLast_name(event.target.value)}} /></label> <br />
                <label>Password:<input type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} /></label> <br />
                <input type="submit" value="Create Account" />
            </form>
        </div>
    )
}

export default SignUp;