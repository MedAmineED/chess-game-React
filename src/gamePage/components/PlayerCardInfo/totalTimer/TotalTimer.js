/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { PlayTr } from "../../GameSpace";

import "./TotalTimer.css"


function TotalTimer (props) {
    const [timer, setTimer] = useState({
                                        hr : 0,
                                        min : 1,
                                        sec : 5
                                    })

    const [timeOut, setNewTimeOut] = useState("")



    let myTimer =  0;
    const playerTurn = useContext(PlayTr)

    useEffect(()=>{
        
        if(timer.hr === 0 && timer.min === 0 && timer.sec < 60){
                timer.sec % 2 !== 0? setNewTimeOut("timeOut") : setNewTimeOut("")
            }
        if((props.player === "P1" && playerTurn % 2 !==0) || (props.player === "P2" && playerTurn % 2 === 0)){
            
                    if(timer.sec === -1 && timer.min > -1){
                        setTimer((tm)=>{
                            const newTimer = {...tm}
                                newTimer.sec = 59;
                                newTimer.min -= 1
                            return newTimer;
                        })
                    }
                    if(timer.min === -1 && timer.hr > 0){
                        setTimer((tm)=>{
                            const newTimer = {...tm}
                                newTimer.min = 59;
                                newTimer.hr -= 1
                            return newTimer;
                        })
                    }
                    if(timer.hr > 0 || timer.min > 0 || timer.sec > 0){
                        myTimer = setInterval(()=> {
                                        setTimer((tm)=>{
                                            const newTimer = {...tm}
                                                    newTimer.sec -= 1;
                                            return newTimer
                                        })
                                   },1000)
                        return ()=> clearInterval(myTimer)
                    }
                    else {
                        clearInterval(myTimer)
                    }
        }else {
            clearInterval(myTimer)
        }

    }, [timer, playerTurn])





    const padST = (num)=> {
        return num.toString().padStart(2, "0")};

    return  (<div className= {`timer`}>
                <h4 className= {timeOut}>{padST(timer.hr)} : {padST(timer.min)} : {padST(timer.sec)}</h4>
            </div>)
}


export default TotalTimer