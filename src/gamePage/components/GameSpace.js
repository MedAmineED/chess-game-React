import React, { createContext, useEffect, useState } from "react";
import Table from "./gameComponents/table/Table";

import "./GameSpace.css"
import PlayerCardInfo from "./PlayerCardInfo/PlayerCardInfo";
import StartModal from "./StartModal/StartModal";



export const PlayTr = createContext(0)

export const PlayerName = createContext("")

export const Start = createContext(false)

export const ToatalTime = createContext({})

export const TurnTime = createContext({})


function GameSpace () {


    const [playerTurn, setPlayerTurn] = useState(1);

    const [firstPlayerName, setFirstPlayesName] = useState("")
    const [secondPlayerName, setSecondPlayesName] = useState("")


    const [start, setStart] = useState(false)


    const [totalTime, setTotalTime] = useState({
                                                rangeValue : 0,
                                                hours : 0,
                                                minutes : 5
                                            })
    const [turnTime, setTurnTime] = useState({
                                                rangeValue : 30,
                                                seconds : 30,
                                                minutes : 0
                                            })


    const createPlayerName = (e , player) => {
        if(player === 1)setFirstPlayesName(e.target.value)
        if(player === 2)setSecondPlayesName(e.target.value)
    }


    const showTime = (e, num) => {
        if(num === 1){
             setTotalTime((pr)=>{
                    const updateToatalTime = {...pr}
                            updateToatalTime.hours = Math.trunc(e.target.value / 60)
                            updateToatalTime.minutes = e.target.value % 60
                            updateToatalTime.rangeValue = e.target.value
                    return updateToatalTime;
                        } )
        }
        if(num === 2){
             setTurnTime((pr)=>{
                    const updateTurnTime = {...pr}
                            updateTurnTime.minutes = Math.trunc(e.target.value / 60)
                            updateTurnTime.seconds = e.target.value % 60
                            updateTurnTime.rangeValue = e.target.value
                    return updateTurnTime;
                        } )
            }
        }
    





    const startGame = ()=> {
        if(firstPlayerName !== "" && secondPlayerName !== "")setStart(true)
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
          <TurnTime.Provider value={turnTime}>


                <StartModal startGame = {startGame} 
                            changeName = {createPlayerName} 
                            playersNames = {{firstPlayerName : firstPlayerName, secondPlayerName : secondPlayerName}} 
                            changeTime = {showTime}
                            />
                <PlayerCardInfo player = "P1" />
                <Table playerTurn = {newTurn}/>
                <PlayerCardInfo player = "P2" />


          </TurnTime.Provider>
          </ToatalTime.Provider> 
          </PlayerName.Provider>
          </Start.Provider>
          </PlayTr.Provider>
        </div>
        
    )
}

export default GameSpace