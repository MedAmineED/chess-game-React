/* eslint-disable jsx-a11y/alt-text */
import { useContext, useEffect, useState } from "react";
import { Check, PlayTr, Start } from "../../GameSpace";
import './Piece.css'





function Piece (props) {

    const playerTurn = useContext(PlayTr)
    const start = useContext(Start);

    const check = useContext(Check)

    const [canPlay, setCanPlay] = useState(false)
    const [blocked, setBlocked] = useState(false)

    const pieceName = props.data.pieceName
    const image = props.data.image
    

    useEffect(()=> {
        setBlocked(check)
    }, [check])

        

    useEffect(()=>{
        setCanPlay(start)
    }, [start])

    const hanDleClickMove = ()=> {
        const row = props.data.position.y
        const col = props.data.position.x
        if(playerTurn % 2 === 0 && props.data.color === "white") {return}
        //  if(playerTurn % 2 !== 0 && props.data.color === "black") {return}
        props.selectPath(row, col)
    }
        
    
    
    return (
            <div className="piece" onClick={hanDleClickMove}>
                    <img src=  {image} />
            </div>)
    
}

export default Piece