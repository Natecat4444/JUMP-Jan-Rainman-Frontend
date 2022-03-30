import React, {useEffect, useState} from 'react';

function EditBet(props){
    const [credits, setCredits] = useState(1);
    const [date, setDate] = useState("")
    const [temp, setTemp] = useState(0)
    const[city, setCity] = useState('')

    const changeCity = (value) =>{
        setCity(value)
    }

    useEffect(() =>{
        
    })

    return(
        <div>

        </div>
    )
}

export default EditBet