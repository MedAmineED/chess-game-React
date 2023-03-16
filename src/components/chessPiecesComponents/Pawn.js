import React, { useState } from "react";

function Pawn (props) {
    if(props.pColor === "white"){
        return <div style={props.style}><img src="chessPiciesImg/Chess_plt60.png" /></div>
    }else {
        return <div style={props.style}><img src="chessPiciesImg/Chess_pdt60.png" /></div>
    }


}

export default Pawn