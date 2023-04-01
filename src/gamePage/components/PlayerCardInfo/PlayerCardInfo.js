/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { PlayerName, Start, totalTime } from "../GameSpace";
import "./PlayerCardInfo.css"
import PlayerTurnTimer from "./playerTurnTimer/PlayerTurnTimer";
import TotalTimer from "./totalTimer/TotalTimer";




function PlayerCardInfo (props) {

    const playerName = useContext(PlayerName)

    const start = useContext(Start)

    const [firstPlayerName, setFirstPlayerName]= useState("Playe1")
    const [secondPlayerName, setSecondPlayerName]= useState("Playe2")


    useEffect(()=>{
        if(start){
            setFirstPlayerName(playerName.firstPlayerName)
            setSecondPlayerName(playerName.secondPlayerName)
        }

    },[start])

    return (
    <div className="card-info">
            <TotalTimer player = {props.player}/>
            <h1>{props.player === "P1"? firstPlayerName: secondPlayerName} </h1>
            <PlayerTurnTimer player = {props.player} />
	</div>
    )
}

export default PlayerCardInfo