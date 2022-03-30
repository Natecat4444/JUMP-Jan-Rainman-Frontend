import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import RainAdminApi from '../APIs/RainAdminAPI';

function EditBet(props){
    const [credits, setCredits] = useState(1);
    const [temp, setTemp] = useState(0)
    const [bet, setBet] = useState([])

    let params = useParams();

    const handleSubmit = (event) =>{
        event.preventDefault()

        const bete = {
            "bet_id": bet.bet_id,
            "user": bet.user,
            "city": bet.city,
            "wager": bet.wager,
            "temperature": temp,
            "forecast_date": bet.forecast_date,
            "creation_date": bet.creation_date,
            "status": bet.status
        }

        // console.log(bete)

        RainAdminApi.editBet(bete)
    }

    useEffect(() =>{
        RainAdminApi.getBet(params.id, setBet)
    }, [])

    console.log(bet.user)
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter new temperature:<input type="number" value={temp} onChange={(event)=>{setTemp(event.target.value)}}/></label> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default EditBet