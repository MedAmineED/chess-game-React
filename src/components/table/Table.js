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


function Table ()  {
    
    const move = (position, color)=> {
        const piece = board[position.x][position.y]
        if (color === "white") {
            setBoard((br)=> {
                const upDateBoard = [...br];
                upDateBoard[position.x][position.y] = " ";
                upDateBoard[position.x+1][position.y]= piece;
                return upDateBoard
            })
        }else {
            setBoard((br)=> {
                const upDateBoard = [...br];
                upDateBoard[position.x][position.y] = " ";
                upDateBoard[position.x-1][position.y]= piece;
                return upDateBoard
             })
        
      }}
    const [board, setBoard] = useState([
                                [<Rook pColor = {`white`} />, <Knight pColor = {`white`}/>, <Bishop pColor = {`white`}/>, <Queen pColor = {`white`}/>, <King pColor = {`white`}/>, <Bishop pColor = {`white`}/>, <Knight pColor = {`white`}/>, <Rook pColor = {`white`} />],
                                [<Pawn move = {move} pColor = {`white`} position = {{x: 1, y: 0}} />, <Pawn move = {move} pColor = {`white`} position = {{x: 1, y: 1}}/>, <Pawn move = {move} pColor = {`white`} position = {{x: 1, y: 2}}/>, <Pawn move = {move} pColor = {`white`} position = {{x: 1, y: 3}} />, <Pawn move = {move} pColor = {`white`} position = {{x: 1, y: 4}}/>, <Pawn move = {move} pColor = {`white`} position = {{x: 1, y: 5}}/>, <Pawn move = {move} pColor = {`white`} position = {{x: 1, y: 6}}/>, <Pawn move = {move} pColor = {`white`} position = {{x: 1, y: 7}}/>],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                [<Pawn position = {{x: 6, y: 0}} move = {move} pColor = {`black`} />, <Pawn position = {{x: 6, y: 1}} move = {move} pColor = {`black`} />, <Pawn position = {{x: 6, y: 2}} move = {move} pColor = {`black`} />, <Pawn position = {{x: 6, y: 3}} move = {move} pColor = {`black`} />, <Pawn position = {{x: 6, y: 4}} move = {move} pColor = {`black`} />, <Pawn position = {{x: 6, y: 5}} move = {move} pColor = {`black`} />, <Pawn position = {{x: 6, y: 6}} move = {move} pColor = {`black`} />, <Pawn position = {{x: 6, y: 7}} move = {move} pColor = {`black`} />],
                                [<Rook pColor = {`black`} />, <Knight pColor = {`black`}/>, <Bishop pColor = {`black`}/>, <Queen pColor = {`black`}/>, <King pColor = {`black`}/>, <Bishop pColor = {`black`}/>, <Knight pColor = {`black`}/>, <Rook pColor = {`black`} />],
      ]);




      




  


   const myCases = ()=> {
        let cases = [];
        
        //--set cases and color cases--
        for (let i = 0; i < 8; i++) {                              
                for (let j = 0; j < 8; j++) {  

                    const row = i + 1;
                    const col = 8 - j ;

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
            }
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