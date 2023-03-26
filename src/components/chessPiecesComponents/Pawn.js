import React, { useContext, useState } from "react";
import { PlayTr } from "../table/Table";

function Pawn (props) {
     const playerTurn =  useContext(PlayTr)
    
     const handelSelecPathOnClick = ()=> {
         if(playerTurn % 2 === 0 && props.data.color === "white") {return}
         if(playerTurn % 2 !== 0 && props.data.color === "black") {return}
         
        console.log("from pawn : " + playerTurn);
        props.selectPath(props.data.id, props.position,props.data.color, props.data.name);
    }


    if(props.data.color === "white"){
        return <div style={props.style} onClick = {handelSelecPathOnClick} ><img src="chessPiciesImg/Chess_plt60.png" /></div>
    }else {
        return <div style={props.style} onClick = {handelSelecPathOnClick} ><img src="chessPiciesImg/Chess_pdt60.png" /></div>
    }


}

export default Pawn