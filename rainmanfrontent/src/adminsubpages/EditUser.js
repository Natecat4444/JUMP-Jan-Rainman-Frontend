import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import RainAdminApi from '../APIs/RainAdminAPI';

function EditUser(props){
    const[user, setUser] = useState([])
    const[username, setUsername] = useState('');

    let params = useParams();
    useEffect (()=>{
        RainAdminApi.getUser(params.id, setUser)
        
    }, []) //once this runs initilize all state values for the form
    return(
        <div>
            <form>

            </form>
        </div>
    )
}

export default EditUser