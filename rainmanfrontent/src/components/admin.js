import React, {useEffect, useState} from 'react';
import RainAdminApi from '../APIs/RainAdminAPI';
import {NavLink, useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Admin(props){
    const [users, setUsers] = useState([])
    const [bets, setBets] = useState([])

    let navigate = useNavigate();
    useEffect (()=>{
        RainAdminApi.getUsers(setUsers);
        RainAdminApi.getBets(setBets)
    }, [])

    const deleteUser =  (event) =>{
        RainAdminApi.deleteUser(event.target.value)
    }

    const deleteBet = (event) =>{
        RainAdminApi.deleteBet(event.target.value)
    }

    const updateBets = (event) =>{
        RainAdminApi.forceBetUpdate()
    }
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <h3>Users</h3>
            <div className='tablewrap'>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Credits</th>
                    <th>Role</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(u=>
                            <tr key={u.userID}>
                                <td>{u.userID}</td>
                                <td>{u.username}</td>
                                <td>{u.first_name}</td>
                                <td>{u.last_name}</td>
                                <td>{u.credit}</td>
                                <td>{u.role}</td>
                                <td><NavLink to={`/admin/edituser/${u.userID}`}>Edit</NavLink></td>
                                <td><button onClick={deleteUser} value={u.userID} href="/admin/" >Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
            <h3>Bets</h3>
            <div className='tablewrap'>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>City</th>
                    <th>Wager</th>
                    <th>Temperature</th>
                    <th>Status</th>
                    <th>Creation Date</th>
                    <th>Forecast Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bets.map(b=>
                            <tr key={b.bet_id}>
                                <td>{b.bet_id}</td>
                                <td>{b.user.username}</td>
                                <td>{b.city.name}</td>
                                <td>{b.wager}</td>
                                <td>{b.temperature}</td>
                                <td>{b.status}</td>
                                <td>{b.creation_date}</td>
                                <td>{b.forecast_date}</td>
                                <td><NavLink to={`/admin/editbet/${b.bet_id}`}>Edit</NavLink></td>
                                <td><button onClick={deleteBet} value={b.bet_id}>Delete</button></td>
                            </tr>    
                        )
                    }
                </tbody>
                </table>
                </div>
                <button onClick={updateBets}>Force Bet Updates</button>
        </div>
    )
}

export default Admin;