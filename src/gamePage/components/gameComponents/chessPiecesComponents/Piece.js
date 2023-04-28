/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { useContext, useEffect, useState } from "react";
import { Check, PlayTr, Start } from "../../GameSpace";
import './Piece.css'





function Piece (props) {


    const row = props.data.position.y
    const col = props.data.position.x
    const inProtect = props.inProtect

    const playerTurn = useContext(PlayTr)
    const start = useContext(Start);

    const check = useContext(Check)

    const [canPlay, setCanPlay] = useState(false)
    const [protect, setProtect] = useState(false)
    

    const image = props.data.image
    


        

    useEffect(()=>{
        setCanPlay(start)
    }, [start])

    useEffect(()=>{
        const isInProtectMode  = inProtect.some((pos)=> pos.protector.row === row && pos.protector.col === col)
        if(isInProtectMode){
            setProtect(true)
        }
        else {
            setProtect(false)
        }
    })
    const getCellsCanMoveInProtect = ()=> {
        
        if(protect){
            let attackerPiece = {...inProtect.filter((pc)=> {
                return pc.protector.col === col && pc.protector.row === row
            })[0]}
            console.log(attackerPiece, "attackerPice")
            return getProtectPath(col, row, attackerPiece.attacker.col, attackerPiece.attacker.row )
        }
    }
    

    const hanDleClickMove = ()=> {
        const pathCanMove = getCellsCanMoveInProtect();
        console.log(pathCanMove, "pcn")
        console.log(protect)
        if((playerTurn % 2 === 0 && props.data.color === "white") || !canPlay) {return}
        if(playerTurn % 2 !== 0 && props.data.color === "black") {return}
        if(protect){return}
        props.selectPath(row, col, pathCanMove, protect)
    }
        
    
    
    return (
            <div className="piece" onClick={hanDleClickMove}>
                    <img src=  {image} />
            </div>)
    
}


function getProtectPath(protectorX, protectorY, attackerX, attackerY) {
    const dx = attackerX - protectorX;
    const dy = attackerY - protectorY;
    const slope = dx !== 0 ? dy / dx : (dy > 0 ? Infinity : -Infinity);
    const path = [];
  
    for (let i = 1; i < Math.max(Math.abs(dx), Math.abs(dy)); i++) {
      const x = dx !== 0 ? protectorX + Math.round(i * Math.sign(dx)) : (slope > 0 ? protectorX : attackerX);
      const y = protectorY + Math.round(i * slope * Math.sign(dy));
      path.push({row : y, col: x});
    }
  
    return path;
  }


export default Piece