import React, { createContext, useEffect, useState } from "react";
import Table from "./gameComponents/table/Table";

import "./GameSpace.css"
import PlayerCardInfo from "./PlayerCardInfo/PlayerCardInfo";



export const PlayTr = createContext(0)


function GameSpace () {


    const [playerTurn, setPlayerTurn] = useState(1)

    const newTurn = () => {
        setPlayerTurn((plTr)=> plTr + 1)
    }
    
    return (
        <div className='container' >
          <PlayTr.Provider value={playerTurn} >
                <PlayerCardInfo player = "P1" />
                <Table playerTurn = {newTurn}/>
                <PlayerCardInfo player = "P2" />
          </PlayTr.Provider>
        </div>
        
    )
}

export default GameSpace