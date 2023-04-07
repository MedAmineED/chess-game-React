import React, { useContext, useEffect, useState} from "react";
import { Check, PlayTr, Start} from "../../GameSpace";



function Pawn (props) {
     const playerTurn =  useContext(PlayTr)
     const start = useContext(Start);
 
 
     const [canPlay, setCanPlay] = useState(false)
     const [blocked, setBlocked] = useState(false)
     const check = useContext(Check)
    

     useEffect(()=> {
         setBlocked(check)
     }, [check])
     
     useEffect(()=>{
         setCanPlay(start)
     }, [start])
    
     const handelSelecPathOnClick = ()=> {
         if(playerTurn % 2 === 0 && props.data.color === "white") {return}
         if(playerTurn % 2 !== 0 && props.data.color === "black") {return}
        props.selectPath(props.data.id, props.position, props.data.color, props.data.name, playerTurn, canPlay, blocked);
    }


    if(props.data.color === "white"){
        return <div style={props.style} onClick = {handelSelecPathOnClick} ><img src="chessPiciesImg/Chess_plt60.png" /></div>
    }else {
        return <div style={props.style} onClick = {handelSelecPathOnClick} ><img src="chessPiciesImg/Chess_pdt60.png" /></div>
    }


}

export default Pawn