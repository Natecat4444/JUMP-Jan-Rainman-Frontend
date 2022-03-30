import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import RainAdminApi from '../APIs/RainAdminAPI';

function EditUser(props){
    const[user, setUser] = useState([])
    const[username, setUsername] = useState('');
    const[id, setID] = useState(0)
    const[first_name, setFirst_name] = useState('')
    const[last_name, setLast_name] = useState('')
    const[credit, setCredit] = useState(0)
    const[role, setRole] = useState('')

    let params = useParams();
    useEffect (()=>{
        RainAdminApi.getUser(params.id, setUser)
    }, []) //once this runs initilize all state values for the form

    setUsername(user.username)
    setID(user.userID)
    setFirst_name(user.first_name)
    setLast_name(user.last_name)
    setCredit(user.credit)
    setRole(user.role)

    const handleSubmit = (event) =>{
        event.preventDefault()
        const user ={
            "userID": id,
            "username": username,
            "first_name": first_name,
            "last_name": last_name,
            "role": role,
            "credit": credit,
        }

        RainAdminApi.editBet(user)
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>ID:<input type="number" value={id} /></label>
                <label>Username:<input type="text" value={username} onChange={(event)=>{setUsername(event.target.value)}}/></label>
                <label>First Name:<input type="text" value={first_name} onChange={(event)=>{setFirst_name(event.target.value)}}/></label>
                <label>Last Name:<input type="text" value={last_name} onChange={(event)=>{setLast_name(event.target.value)}}/></label>
                <label>Credits:<input type="number" value={credit} onChange={(event)=>{setCredit(event.target.value)}}/></label>
                <label>Role<select onChange={(event)=>setRole(event.target.value)}>
                    <option value="ROLE_USER">ROLE_USER</option>
                    <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                    </select>
                </label>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default EditUser