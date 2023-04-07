import { useContext, useEffect, useState } from "react"
import { Check, PlayTr, Start } from "../../GameSpace";




function Knight (props) {
    const playerTurn = useContext(PlayTr)
    const start = useContext(Start);
    const [blocked, setBlocked] = useState(false)


    const [canPlay, setCanPlay] = useState(false)
    const check = useContext(Check)
    

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
    if(props.data.color === "white"){
        return (<div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_nlt60.png" /></div>
    )}
    else {
        return (<div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_ndt60.png" /></div>)
    }
    
}

export default Knight