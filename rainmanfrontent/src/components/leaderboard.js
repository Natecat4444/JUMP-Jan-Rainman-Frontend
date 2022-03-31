import React, {useEffect, useState} from "react";
import RainUserAPI from "../APIs/RainUserAPI";

function LeaderBoard(props){
    const [leaders, setLeaders] = useState([])

    useEffect(() =>{
        RainUserAPI.getLeaderBoard(setLeaders)
    }, [])

    console.log(leaders)

    return(
        
        <div className = "routeContent">
        <div className = "routeTitle">
          <h1>Leaderboard</h1>
        </div>
            <h2>Top Ten Weather Betters</h2>
            <div className="tablewrap">
            <table>
                <thead>
                    <th>Username</th>
                    <th>Credits</th>
                </thead>
                <tbody>
                    {
                        leaders.map(l =>
                            <tr key={l.id}>
                                <td>{l.username}</td>
                                <td>{l.credit}</td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default LeaderBoard;