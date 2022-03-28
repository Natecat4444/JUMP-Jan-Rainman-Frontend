import React, {useEffect, useState} from "react";
import RainUserAPI from "../../APIs/RainUserAPI";

function CitySelect(props){
    const options = props.items.map(
        (item) => <option value={item.id} name={props.name} key={item.id}>{item.name}</option>
    );

    return(
        <select name={props.name} onChange={(event) => props.viewhandler(event.target.value)}>
            {options}
        </select>
    );
}

function CityList(props){
    const [list, setList] = useState([]);
    useEffect(() =>{
        RainUserAPI.getCitiesList(setList);
    }, []);
    

    return(<CitySelect name={props.name} viewhandler={props.viewhandler} items={list} />)
}

export {CityList, CitySelect}