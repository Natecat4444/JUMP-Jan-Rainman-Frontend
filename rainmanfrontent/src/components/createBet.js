import React, {useEffect, useState} from 'react'
import RainUserAPI from '../APIs/RainUserAPI'
import { CityList } from './inner/CitySelect';

function CreateBet(props){
    const [viewhandler, setviewhandler] = useState(0);
    const [credits, setCredits] = useState(1);
    const [date, setDate] = useState("")
    const [temp, setTemp] = useState(0)
    const[city, setCity] = useState('')

    const changeCity = (value) =>{
        setCity(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const bet = {
            "bet_id": null,
            "user_id": null,
            "city": city,
            "wager": credits,
            "temperature": temp,
            "forecast_date": date,
            "status": "PENDING"
        }
        console.log(bet);

        RainUserAPI.createBet(bet)

        

        
    }
    return(
        <div className = "routeContent">
        <div className = "routeTitle">
          <h1>Create Bet</h1>
        </div>
            
            <div className = 'form'>
                <form onSubmit={handleSubmit}>
                    <div className="formElement"><label>Credits</label> <input type="number" min="1" step='1' value={credits} onChange={(event)=>{setCredits(event.target.value)}}/></div> <br />
                    <div className="formElement"><label>City</label> <CityList name="citySelect" viewhandler={changeCity} /> <br /></div>
                    <div className="formElement"><label>Date</label> <input type="date" value={date} onChange={(event)=>{setDate(event.target.value)}}/></div> <br />
                    <div className="formElement"><label>Temperature</label> <input type="number" step='1' value={temp} onChange={(event)=>{setTemp(event.target.value)}}/></div> <br />
                    <input type="submit" value="Create Bet" />
                </form>
            </div>
        </div>
    )
}

export default CreateBet;