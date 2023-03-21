import React, { useState } from "react";

function Pawn (props) {
    
    // const index = props.data.id;
    const handelSelecPathOnClick = ()=> {
        props.selectPath(props.data.id, props.position, props.data.color);
    }
    if(props.data.color === "white"){
        return <div style={props.style} onClick = {handelSelecPathOnClick} ><img src="chessPiciesImg/Chess_plt60.png" /></div>
    }else {
        return <div style={props.style} onClick = {handelSelecPathOnClick} ><img src="chessPiciesImg/Chess_pdt60.png" /></div>
    }


}

export default Pawn