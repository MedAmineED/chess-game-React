import { useContext, useEffect, useState } from "react"
import { PlayTr, Start } from "../../GameSpace";

import { Check } from "../../GameSpace";



function Rook (props) {

    const playerTurn = useContext(PlayTr)
    const start = useContext(Start);
    const check = useContext(Check)


    const [canPlay, setCanPlay] = useState(false)
    const [blocked, setBlocked] = useState(false)

    useEffect(()=> {
        setBlocked(check)
    }, [check])
    
    useEffect(()=>{
        setCanPlay(start)
    }, [start])

    const hanDleClickMove = ()=> {
        if(playerTurn % 2 === 0 && props.data.color === "white") {return}
         if(playerTurn % 2 !== 0 && props.data.color === "black") {return}
        props.selectPath(props.data.id, props.position, props.data.color, props.data.name, playerTurn, canPlay, blocked)
    }
    if(props.data.color === "white") {
        return (
        <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_rlt60.png" /></div>
    )
    }else {
        return (
            <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_rdt60.png" /></div>
        )
    }
    

    
}

export default Rook