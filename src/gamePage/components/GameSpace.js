import React, { createContext, useState } from "react";
import "./GameSpace.css"
import Table from "./gameComponents/table/Table";
import PlayerCardInfo from "./PlayerCardInfo/PlayerCardInfo";
import CheckModal from "./checkModal/CheckModal";
import StartModal from "./StartModal/StartModal";




export const PlayTr = createContext(0)
export const PlayerName = createContext("")
export const Start = createContext(false)
export const ToatalTime = createContext({})
export const TurnTime = createContext({})
export const Check = createContext()


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
    const [check, setCheck] = useState(false);


    
    
    const changeCheck = (check) => {
        setCheck(check)
    }

    const startGame = ()=> {
        setStart(true)
    }

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
                        })
            }
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
          <Check.Provider value ={check}>

                <CheckModal/>
                <StartModal changeName = {createPlayerName}
                            playersNames = {{ firstPlayerName, secondPlayerName }}
                            startGame = {startGame} 
                            changeTime = {showTime}
                            />
                <PlayerCardInfo player = "P1" />
                <Table playerTurn = {newTurn}
                        changeCheck = {changeCheck}
                        isCheck = {check}
                        />
                <PlayerCardInfo player = "P2" />

          
          </Check.Provider>
          </TurnTime.Provider>
          </ToatalTime.Provider> 
          </PlayerName.Provider>
          </Start.Provider>
          </PlayTr.Provider>
        </div>
        
    )
}

export default GameSpace