import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import RainAdminApi from '../APIs/RainAdminAPI';

function EditUser(props){
    const[user, setUser] = useState([])
    const[role, setRole] = useState('ROLE_USER')
    const[addcredit, setAddCredit] = useState(0)

    let params = useParams();
    useEffect (()=>{
        RainAdminApi.getUser(params.id, setUser)
        console.log(user)
    }, []) //once this runs initilize all state values for the form
    

    const handleSubmit = (event) =>{
        event.preventDefault()
        const usere ={
            "userID": user.userID,
            "username": user.username,
            "password": user.password,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "role": role,
            "credit": user.credit+parseInt(addcredit),
            "enabled": true
        }

        console.log(usere)

        RainAdminApi.editUser(usere)
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add Credits:<input type="number" value={addcredit} onChange={(event)=>{setAddCredit(event.target.value)}}/></label> <br />
                <label>Role<select onChange={(event)=>setRole(event.target.value)}> 
                    <option value="ROLE_USER">ROLE_USER</option>
                    <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                    </select>
                </label><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default EditUser