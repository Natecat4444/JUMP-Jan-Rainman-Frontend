import React, {useEffect, useState} from 'react'
import RainUserAPI from '../APIs/RainUserAPI'

function Profile(props){
    const [user, setuser] = useState('')
    const [credits, setCredits] = useState(0)
    const [bets, setBets] = useState([])

    console.log("landed")
    useEffect(() => {
        RainUserAPI.getUser(setuser, setCredits)
        console.log("Calling get bets")
        RainUserAPI.getBets(setBets)
    }, [])

    

    return(
        <div className = "routeContent">
        <div className = "routeTitle">
          <h1>Profile</h1>
        </div>
            <h2>Welcome {user}</h2>
            <h3>You currently have {credits} credits availble</h3>
            <div className='tablewrap'> 
            <table>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Amount wagered</th>
                        <th>Temperature</th>
                        <th>Status</th>
                        <th>Creation Date</th>
                        <th>Forecast Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bets.map( b=>
                            <tr key={b.bet_id}>
                                <td>{b.city.name}</td>
                                <td>{b.wager}</td>
                                <td>{b.temperature}</td>
                                <td>{b.status}</td>
                                <td>{b.creation_date}</td>
                                <td>{b.forecast_date}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Profile