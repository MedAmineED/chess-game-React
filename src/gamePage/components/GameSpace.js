import React, { createContext, useEffect, useState } from "react";
import Table from "./gameComponents/table/Table";

import "./GameSpace.css"
import PlayerCardInfo from "./PlayerCardInfo/PlayerCardInfo";
import StartModal from "./StartModal/StartModal";



export const PlayTr = createContext(0)

export const PlayerName = createContext("")

export const Start = createContext(false)

export const ToatalTime = createContext(10)

export const TurnTime = createContext(15)


function GameSpace () {


    const [playerTurn, setPlayerTurn] = useState(1);

    const [firstPlayerName, setFirstPlayesName] = useState("")
    const [secondPlayerName, setSecondPlayesName] = useState("")


    const [start, setStart] = useState(false)


    const [totalTime, setTotalTime] = useState(15)


    const createPlayerName = (e , player) => {
        if(player === 1)setFirstPlayesName(e.target.value)
        if(player === 2)setSecondPlayesName(e.target.value)
    }


    const showToatalTime = (e) => {
       setTotalTime(e.target.value)
    }





    const startGame = ()=> {
        setStart(true)
    }



    const newTurn = () => {
        setPlayerTurn((plTr)=> plTr + 1)
    }
    
    return (
        <div className='container' >
          <PlayTr.Provider value={playerTurn} >
          <Start.Provider value = {start}>
          <PlayerName.Provider value= {{firstPlayerName, secondPlayerName}} >
          <ToatalTime.Provider value={totalTime} >
                <StartModal startGame = {startGame} 
                            changeName = {createPlayerName} 
                            playersNames = {{firstPlayerName : firstPlayerName, secondPlayerName : secondPlayerName}} 
                            changeTotalTime = {showToatalTime}
                            />
                <PlayerCardInfo player = "P1" />
                <Table playerTurn = {newTurn}/>
                <PlayerCardInfo player = "P2" />
          </ToatalTime.Provider> 
          </PlayerName.Provider>
          </Start.Provider>
          </PlayTr.Provider>
        </div>
        
    )
}

export default GameSpace