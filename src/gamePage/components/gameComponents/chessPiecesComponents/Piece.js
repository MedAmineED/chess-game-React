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
    const getCellsCanMoveInProtect = (pathCanMove)=> {
        
        if(protect){
            const attackerPiece = {...inProtect.filter((pc)=> {
                                        return pc.protector.col === col && pc.protector.row === row
                                    })[0]
                                }
            getProtectPath(col, row, attackerPiece.attacker.col, attackerPiece.attacker.row, pathCanMove )
        }
    }
    

    const hanDleClickMove = ()=> {
        const pathCanMove = []
        getCellsCanMoveInProtect(pathCanMove);
        if((playerTurn % 2 === 0 && props.data.color === "white") || !canPlay) {return}
        if(playerTurn % 2 !== 0 && props.data.color === "black") {return}
        props.selectPath(row, col, pathCanMove, protect)
    }
        
    
    
    return (
            <div className="piece" onClick={hanDleClickMove}>
                    <img src=  {image} />
            </div>)
    
}








function getProtectPath(protectorX, protectorY, attackerX, attackerY, pathCanMove) {
    const dx = attackerX - protectorX;
    const dy = attackerY - protectorY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const stepSizeX = dx / distance;
    const stepSizeY = dy / distance;
  
    for (let i = 1; i < distance; i++) {
      const x = protectorX + Math.round(i * stepSizeX);
      const y = protectorY + Math.round(i * stepSizeY);
      pathCanMove.push({ row: y, col: x });
      
      if (x === attackerX && y === attackerY) {
        break;
      }
    }
    pathCanMove.push({ row: attackerY, col: attackerX });
  }
  


export default Piece