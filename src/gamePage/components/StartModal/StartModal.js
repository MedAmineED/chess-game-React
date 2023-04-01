import React, { useContext, useEffect, useState } from "react";
import { Start, ToatalTime } from "../GameSpace";
import "./StartModal.css"
import TextInput from "./textInput/TextInput";


function StartModal (props) {

    const start = useContext(Start);
    const totalTime = useContext(ToatalTime);

    const [unmountModal, setUnmountModal] = useState(false)

    const [removeAnimation, setRemoveAnimatoin] = useState("")

    useEffect(()=> {
        if(start){
            setRemoveAnimatoin("remove")
            setTimeout(()=> {
                setUnmountModal(start)
            }, 200)
        }
    }, [start])

    const  handleChangeFirstPlayer = (e)=> {
        props.changeName(e, 1)
    }
    const  handleChangeSecondPlayer = (e)=> {
        props.changeName(e, 2)
    }

    const handleChangeTotalTime = (e) => {
        props.changeTotalTime(e)
    }

    const handleClickToStartGame = (e) => {
        e.preventDefault();
        props.startGame();
    }





    return ( !unmountModal &&
        <div className= {`start-modal ${removeAnimation}`}>
            <form action="false" className="parameter-content">
                <TextInput inputId = "first-player-name" 
                            labelText = "choose the first player name" 
                            playerName = {props.playersNames.firstPlayerName}
                            handleChange= {handleChangeFirstPlayer} />

                <TextInput inputId = "second-player-name" 
                            labelText = "choose the second player name" 
                            playerName = {props.playersNames.secondPlayerName}
                            handleChange= {handleChangeSecondPlayer} />
                            
                <label htmlFor="game-time">
                        choose time of game <br /> {totalTime} min
                </label>
                <input className="input-parameter" 
                            value={totalTime}
                            onChange={handleChangeTotalTime}
                            type="range" 
                            step={5} min = {5} max = {60} 
                            id = "game-time"></input>


                <label htmlFor="waiting-time">
                        choose waiting time
                </label>
                <input className="input-parameter" 
                            id="waiting-time" 
                            type="range" 
                            step={30} min = {30} max = {180}></input>


                <button className="start" onClick={handleClickToStartGame}>START</button>
            </form>
        </div>
    )
}



export default StartModal