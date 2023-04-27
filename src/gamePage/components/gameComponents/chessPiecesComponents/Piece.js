/* eslint-disable jsx-a11y/alt-text */
import { useContext, useEffect, useState } from "react";
import { Check, PlayTr, Start } from "../../GameSpace";
import './Piece.css'





function Piece (props) {


    const row = props.data.position.y
    const col = props.data.position.x

    const playerTurn = useContext(PlayTr)
    const start = useContext(Start);


    const [canPlay, setCanPlay] = useState(false)
    const [protect, setProtect] = useState(false)
    

    const image = props.data.image
    

    useEffect(()=>{
        const isInProtect  =  props.inProtect.some((pos)=> pos.row === row && pos.col === col)
        if(isInProtect){
            setProtect(true)
        }
        else {
            setProtect(false)
        }

    })
        

    useEffect(()=>{
        setCanPlay(start)
    }, [start])

    const hanDleClickMove = ()=> {
        if((playerTurn % 2 === 0 && props.data.color === "white") || !canPlay) {return}
        if(playerTurn % 2 !== 0 && props.data.color === "black") {return}
        if(protect){return}
        props.selectPath(row, col)
    }
        
    
    
    return (
            <div className="piece" onClick={hanDleClickMove}>
                    <img src=  {image} />
            </div>)
    
}

export default Piece