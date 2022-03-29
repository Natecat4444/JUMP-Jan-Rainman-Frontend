import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.production.min'
import RainUserAPI from '../APIs/RainUserAPI'

function Profile(props){
    const [user, setuser] = useState('')
    const [credits, setCredits] = useState(0)
    const [bets, setBets] = useState([])

    useEffect(() => {
        RainUserAPI.getUser(setuser, setCredits)
    })

    return(
        <div>

        </div>
    )
}

export default Profile