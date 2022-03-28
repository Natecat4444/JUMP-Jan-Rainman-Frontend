import React, {useState} from 'react'
import RainUserAPI from '../APIs/RainUserAPI'
import { CityList } from './inner/CitySelect';

function CreateBet(props){
    const [viewhandler, setviewhandler] = useState(0);
    const [credits, setCredits] = useState(1);
    const [date, setDate] = useState("")
    const [temp, setTemp] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault();

        const bet = {
            "bet_id": null,
            "user_id": null,
            "city_id": viewhandler,
            "wager": credits,
            "temperature": temp,
            "forecast_date": date,
            "status": "PENDING"
        }

        console.log(bet);

        RainUserAPI.createBet(bet)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Credits: <input type="number" min="1" step='1' value={credits} onChange={(event)=>{setCredits(event.target.value)}}/></label> <br />
                <label>City: <CityList name="citySelect" viewhandler={setviewhandler} /></label> <br />
                <label>Date: <input type="date" value={date} onChange={(event)=>{setDate(event.target.value)}}/></label> <br />
                <label>Temperature: <input type="number" step='1' value={temp} onChange={(event)=>{setTemp(event.target.value)}}/></label> <br />
                <input type="submit" value="Create Bet" />
            </form>
        </div>
    )
}

export default CreateBet;