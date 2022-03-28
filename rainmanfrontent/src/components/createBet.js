import React, {useState} from 'react'
import RainUserAPI from '../APIs/RainUserAPI'

function CreateBet(props){
    return(
        <div>
            <form>
                <label>credits: <input type="number" min="1" step="1" /></label>
            </form>
        </div>
    )
}

export default CreateBet;