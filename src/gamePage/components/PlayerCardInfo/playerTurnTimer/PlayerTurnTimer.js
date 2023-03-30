import React from "react";
import './PlayerTurnTimer.css'

 function PlayerTurnTimer (props) {
    
    
    return (
        <div className="player">
        <div className="count-down"></div>
              <div className="letter">
                <h4>{props.player}</h4>
        </div>
                
        </div>
    )
}

export default PlayerTurnTimer