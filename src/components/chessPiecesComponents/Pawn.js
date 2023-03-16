import React, { useState } from "react";

function Pawn (props) {
    const onRender = () => {
        props.onRender();
    }
    const handleClick = () => {
        console.log(2+props.newPos.y);
        props.move(props.n);
    }
    return props.newPos && props.pos.y === 2 + props.newPos.y? <>{onRender()}<div onClick={handleClick}><img src="chessPiciesImg/Chess_plt60.png" /></div> </> : null
}

export default Pawn