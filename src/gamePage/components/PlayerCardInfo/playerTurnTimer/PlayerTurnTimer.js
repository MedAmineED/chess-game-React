/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext} from "react";
import { PlayTr } from "../../GameSpace";
import './PlayerTurnTimer.css'

 function PlayerTurnTimer (props) {
    

    const playerTurn = useContext(PlayTr)
    const [countDown, setCountDown] = useState(0)



    let myCountDown = 0;

    const countDownStyle = {top: `${countDown}%`}

    useEffect(()=> {
        
            if(countDown < 100){
                myCountDown = setInterval(()=> {
                    setCountDown((cd)=> {
                        return cd += 100 / 30;
                    })
                },1000)
                return ()=> clearInterval(myCountDown)}
    }, [countDown, playerTurn])
    
    return (
        <div className="player">
        <div className="count-down" style = {countDownStyle}></div>
              <div className="letter">
                <h4>{props.player}</h4>
        </div>
                
        </div>
    )
}

export default PlayerTurnTimer