import React, { useState } from "react";

function Pawn (props) {
    
    const move = ()=> {
        props.move(props.data.position, props.data.color);
    }
    if(props.data.color === "white"){
        return <div style={props.style} onClick = {move}><img src="chessPiciesImg/Chess_plt60.png" /></div>
    }else {
        return <div style={props.style} onClick = {move}><img src="chessPiciesImg/Chess_pdt60.png" /></div>
    }


}

export default Pawn