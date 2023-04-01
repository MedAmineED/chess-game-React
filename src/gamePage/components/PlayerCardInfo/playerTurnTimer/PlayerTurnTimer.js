/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext} from "react";
import { PlayTr, Start } from "../../GameSpace";
import './PlayerTurnTimer.css'




 function PlayerTurnTimer (props) {
    

    const playerTurn = useContext(PlayTr)
    const [countDown, setCountDown] = useState(0)
    const [selectPlayerTurn, setSelectPlayerTurn] = useState({
                                                            selectLetter : "",
                                                            selectPlayer : "",
                                                            playerOpacity : ""
                                                                
                                                            })
    const start = useContext(Start);



    let myCountDown = 0;

    const countDownStyle = {top: `${countDown}%`}

    useEffect(()=> {
        if(start){
                if((props.player === "P1" && playerTurn % 2 !==0) || (props.player === "P2" && playerTurn % 2 === 0)){
                    setSelectPlayerTurn((sl)=> {
                        const updateClasses = {...sl}
                        updateClasses.selectLetter = "letter-selected"
                        updateClasses.selectPlayer = "pl-selected"
                        updateClasses.playerOpacity = "player-turn"
                        return updateClasses


                    })
                    if(countDown < 100){
                        myCountDown = setInterval(()=> {
                            setCountDown((cd)=> {
                                return cd += 100 / 30;
                            })
                        },1000)
                        return ()=> clearInterval(myCountDown)}
                }else {            
                    setSelectPlayerTurn((sl)=> {
                        const updateClasses = {...sl}
                        updateClasses.selectLetter = ""
                        updateClasses.selectPlayer = ""
                        updateClasses.playerOpacity = ""
                        return updateClasses

                })
                    setCountDown(0)
                    clearInterval(myCountDown)
                }
        }
    }, [countDown, playerTurn, start])
    
    return (
        <div className= {`player ${selectPlayerTurn.selectPlayer}`}>
        <div className= {`count-down ${selectPlayerTurn.playerOpacity}`} style = {countDownStyle}></div>
              <div className= {`letter ${selectPlayerTurn.selectLetter}`}>
                <h4>{props.player}</h4>
        </div>
                
        </div>
    )
}

export default PlayerTurnTimer