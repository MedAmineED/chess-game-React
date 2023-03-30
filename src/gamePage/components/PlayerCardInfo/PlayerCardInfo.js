import React, { useContext, useEffect, useState } from "react";
import { totalTime } from "../GameSpace";
import "./PlayerCardInfo.css"
import PlayerTurnTimer from "./playerTurnTimer/PlayerTurnTimer";
import TotalTimer from "./totalTimer/TotalTimer";



function PlayerCardInfo (props) {




    return (
    <div className="card-info">
            <TotalTimer player = {props.player}/>
            <h1>PLAY</h1>
            <PlayerTurnTimer player = {props.player} />
	</div>
    )
}

export default PlayerCardInfo