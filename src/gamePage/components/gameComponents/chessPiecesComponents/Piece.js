import { useContext, useEffect, useState } from "react";
import { Check, PlayTr, Start } from "../../GameSpace";





function Queen (props) {

    const playerTurn = useContext(PlayTr)
    const start = useContext(Start);

    const check = useContext(Check)

    const [canPlay, setCanPlay] = useState(false)
    const [blocked, setBlocked] = useState(false)

    const pieceName = props.data.name
    

    useEffect(()=> {
        setBlocked(check)
    }, [check])



    useEffect(()=>{
        setCanPlay(start)
    }, [start])

    const hanDleClickMove = ()=> {
        if(playerTurn % 2 === 0 && props.data.color === "white") {return}
         if(playerTurn % 2 !== 0 && props.data.color === "black") {return}
        props.selectPath(props.data.id, props.position, props.data.color, pieceName, playerTurn, canPlay, blocked)
    }

    if (props.data.color === 'white') {
        return (
            pieceName === "pawn"?  <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_plt60.png" /></div>:
            pieceName === "rook"?  <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_rlt60.png" /></div>:
            pieceName === "bishop"?  <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_blt60.png" /></div>:
            pieceName === "knight"?  <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_nlt60.png" /></div>:
            pieceName === "queen"?  <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_qlt60.png" /></div>:
            pieceName === "king"?  <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_klt60.png" /></div>:
            null
            )
    }else {
        return (
            pieceName === "pawn"?  <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_pdt60.png" /></div>:
            pieceName === "rook"?  <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_rdt60.png" /></div>:
            pieceName === "bishop"?  <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_bdt60.png" /></div>:
            pieceName === "knight"?  <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_ndt60.png" /></div>:
            pieceName === "queen"?  <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_qdt60.png" /></div>:
            pieceName === "king"?  <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_kdt60.png" /></div>:
            null

        )
    }
    

    
}

export default Queen