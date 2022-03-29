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
        <div>
            <h2>Welcome {user}</h2>
            <h3>You currently have {credits} credits availble</h3>

            <table>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Amount wagered</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bets.map( b=>
                            <tr key={b.bet_id}>
                                <td>{b.city_id}</td>
                                <td>{b.wager}</td>
                                <td>{b.status}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Profile