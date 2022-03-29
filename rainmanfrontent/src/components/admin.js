import React, {useEffect, useState} from 'react';
import RainAdminApi from '../APIs/RainAdminAPI';

function Admin(props){
    const [users, setUsers] = useState([])
    const [bets, setBets] = useState([])

    useEffect (()=>{
        RainAdminApi.getUsers(setUsers);
        RainAdminApi.getBets(setBets)
    })
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <h3>Users</h3>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Credits</th>
                    <th>Role</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {
                        users.map(u=>
                            <tr key={u.user_id}>
                                <td>{u.user_id}</td>
                                <td>{u.username}</td>
                                <td>{u.first_name}</td>
                                <td>{u.last_name}</td>
                                <td>{u.credit}</td>
                                <td>{u.role}</td>
                                <td><a href='/admin/edituser/{u.user_id}'>Edit</a></td>
                                <td></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <h3>Bets</h3>
                <thead>
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
                                <td></td>
                                <td></td>
                            </tr>    
                        )
                    }
                </tbody>
        </div>
    )
}

export default Admin;