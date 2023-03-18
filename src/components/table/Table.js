import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect, useState } from 'react';
import Case from '../case/Case';
import './table.css'
import Pawn from '../chessPiecesComponents/Pawn'
import King from '../chessPiecesComponents/King'
import Queen from '../chessPiecesComponents/Queen'
import Bishop from '../chessPiecesComponents/Bishop'
import Knight from '../chessPiecesComponents/Knight'
import Rook from '../chessPiecesComponents/Rook'


import pieces from '../../piecesData/piecesData';


function Table ()  {



    const [useNewPos, setNewPos] = useState([
        {x: 0, y: 1},
        {x: 1, y: 1},
        {x: 2, y: 1},
        {x: 3, y: 1},
        {x: 4, y: 1},
        {x: 5, y: 1},
        {x: 6, y: 1},
        {x: 7, y: 1}
    ])
    
    const move = (index, color)=> {
        console.log(index);
        const piece = board[useNewPos[index].y][useNewPos[index].x]  
        if (color === "white") {
            setBoard((br)=> {
                const upDateBoard = [...br];
                upDateBoard[useNewPos[index].y][useNewPos[index].x] = "";
                upDateBoard[useNewPos[index]+1][useNewPos[index].x]= piece;
                
                return upDateBoard
            })
            setNewPos((prevPos)=>{
                const updatePos = [...prevPos];
                updatePos[index].y += 1 
                return updatePos;
                 })
        }}
    const [board, setBoard] = useState([
                                [<Rook pColor = {`white`} />, <Knight pColor = {`white`}/>, <Bishop pColor = {`white`}/>, <Queen pColor = {`white`}/>, <King pColor = {`white`}/>, <Bishop pColor = {`white`}/>, <Knight pColor = {`white`}/>, <Rook pColor = {`white`} />],
                                [<Pawn position = {useNewPos}  move = {move} data =  {pieces.whitePlayer.pawn1} />, <Pawn position = {useNewPos}  move = {move} data =  {pieces.whitePlayer.pawn2} />, <Pawn position = {useNewPos} move = {move} data =  {pieces.whitePlayer.pawn3}  />, <Pawn position = {useNewPos} move = {move} data =  {pieces.whitePlayer.pawn4} />, <Pawn position = {useNewPos} move = {move} data =  {pieces.whitePlayer.pawn5} />, <Pawn position = {useNewPos} move = {move} data =  {pieces.whitePlayer.pawn6} />, <Pawn position = {useNewPos} move = {move} data =  {pieces.whitePlayer.pawn7} />, <Pawn position = {useNewPos}  move = {move} data =  {pieces.whitePlayer.pawn8} />],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                [<Pawn position = {useNewPos} data =  {pieces.blackPlayer.pawn1} move = {move} />, <Pawn position = {useNewPos} data =  {pieces.blackPlayer.pawn2} move = {move} />, <Pawn position = {useNewPos} data =  {pieces.blackPlayer.pawn3} move = {move} />, <Pawn position = {useNewPos} data =  {pieces.blackPlayer.pawn4} move = {move} />, <Pawn position = {useNewPos} data =  {pieces.blackPlayer.pawn5} move = {move} />, <Pawn position = {useNewPos} data =  {pieces.blackPlayer.pawn6} move = {move}/>, <Pawn position = {useNewPos} data =  {pieces.blackPlayer.pawn7} move = {move} />, <Pawn position = {useNewPos} data =  {pieces.blackPlayer.pawn8} move = {move} />],
                                [<Rook pColor = {`black`} />, <Knight pColor = {`black`}/>, <Bishop pColor = {`black`}/>, <Queen pColor = {`black`}/>, <King pColor = {`black`}/>, <Bishop pColor = {`black`}/>, <Knight pColor = {`black`}/>, <Rook pColor = {`black`} />],
      ]);
      
      
       const newPos = (index)=> {
          setNewPos((arr)=> {
            const upDateNewPos = [...arr];
            upDateNewPos[8-index].x = useNewPos[8-index].x + 1;
            return upDateNewPos
          })
       }
       
       
       
       const myCases = ()=> {
        let cases = [];
        let k = 0
        //--set cases and color cases--
        for (let i = 0; i < 8; i++) {                              
                for (let j = 0; j < 8; j++) {  
                    console.log(i, j);
                    const row = i + 1;
                    const col = 8 - j ;
                    k++
                    if ((row % 2) === 0 && (col % 2)!==0) {
                            cases.push(<div key={`${row}${col}`} className= {`case black-player ${row}${col}`} >
                                        {board[i][j]}</div>
                    )}
                    else if ((row % 2) !== 0 && (col % 2)===0) {
                            cases.push(<div key={`${row}${col}`} className= {`case black-player ${row}${col}`} >
                                       {board[i][j]}</div>
                                            )
                    }
                    else {
                        cases.push(<div key={`${row}${col}`} className= {`case white-player ${row}${col}`} >
                                    {board[i][j]}</div>)
                    }
                }
            }console.log("kkkkk"+k);
        return cases.reverse()
    }

    return (
       
        <>
            <div className='container'>
              <div className='table'>
                    {myCases()}
                </div>
            </div>
        </>
    )
}


export default Table