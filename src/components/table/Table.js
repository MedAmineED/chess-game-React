import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import { useState } from 'react';
// import Case from '../case/Case';
import './table.css'
import Pawn from '../chessPiecesComponents/Pawn'
import King from '../chessPiecesComponents/King'
import Queen from '../chessPiecesComponents/Queen'
import Bishop from '../chessPiecesComponents/Bishop'
import Knight from '../chessPiecesComponents/Knight'
import Rook from '../chessPiecesComponents/Rook'


import pieces from '../../piecesData/piecesData';


function Table ()  {



    const [useNewPosWp, setNewPosWp] = useState([
                                            {x: 0, y: 0},
                                            {x: 0, y: 0},
                                            {x: 0, y: 0},
                                            {x: 0, y: 0},
                                            {x: 0, y: 0},
                                            {x: 0, y: 0},
                                            {x: 0, y: 0},
                                            {x: 0, y: 0}
    ])
    const [useNewPosBp, setNewPosBp] = useState([
                                            {x: 0, y: 0},
                                            {x: 0, y: 0},
                                            {x: 0, y: 0},
                                            {x: 0, y: 0},
                                            {x: 0, y: 0},
                                            {x: 0, y: 0},
                                            {x: 0, y: 0},
                                            {x: 0, y: 0}
    ])

    const newPos = (index, color)=> {
        if(color === "white") {
            setNewPosWp((arr)=> {
                const upDateNewPos = [...arr];
                upDateNewPos[index].y = upDateNewPos[index].y + 1;
                return upDateNewPos
            })
        }else {
            setNewPosBp((arr)=> {
                const upDateNewPos = [...arr];
                upDateNewPos[index].y = upDateNewPos[index].y + 1;
                return upDateNewPos
            })

        }
    }
    const move = (initPos, index, color)=> {
                    if (color === "white") {
                                const piece = board[initPos.y + useNewPosWp[index].y][initPos.x]
                                selectToMove(initPos, index);
                                // newPos(index, color)
                                // setBoard((br)=> {
                                //     const upDateBoard = [...br];
                                //     upDateBoard[initPos.y + useNewPosWp[index].y - 1][initPos.x] = "";
                                //     upDateBoard[initPos.y + useNewPosWp[index].y][initPos.x]= piece;
                                //     return upDateBoard
                                // }) 
                                console.log(allCases);
                    }else {
                                const piece = board[initPos.y - useNewPosBp[index].y][initPos.x]
                                newPos(index, color)
                                setBoard((br)=> {
                                    const upDateBoard = [...br];
                                    // console.log("bech tefre8 " + upDateBoard[initPos.y - useNewPosBp[index].y + 1][initPos.x]);
                                    upDateBoard[initPos.y - useNewPosBp[index].y + 1][initPos.x] = "";
                                    upDateBoard[initPos.y - useNewPosBp[index].y][initPos.x]= piece;
                                    return upDateBoard
                                })
                    }
    }
    const [board, setBoard] = useState([
                                [<Rook pColor = {`white`} />, <Knight pColor = {`white`}/>, <Bishop pColor = {`white`}/>, <Queen pColor = {`white`}/>, <King pColor = {`white`}/>, <Bishop pColor = {`white`}/>, <Knight pColor = {`white`}/>, <Rook pColor = {`white`} />],
                                [<Pawn position = {useNewPosWp}  move = {move} data =  {pieces.whitePlayer.pawn1} />, <Pawn position = {useNewPosWp}  move = {move} data =  {pieces.whitePlayer.pawn2} />, <Pawn position = {useNewPosWp} move = {move} data =  {pieces.whitePlayer.pawn3}  />, <Pawn position = {useNewPosWp} move = {move} data =  {pieces.whitePlayer.pawn4} />, <Pawn position = {useNewPosWp} move = {move} data =  {pieces.whitePlayer.pawn5} />, <Pawn position = {useNewPosWp} move = {move} data =  {pieces.whitePlayer.pawn6} />, <Pawn position = {useNewPosWp} move = {move} data =  {pieces.whitePlayer.pawn7} />, <Pawn position = {useNewPosWp}  move = {move} data =  {pieces.whitePlayer.pawn8} />],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                [<Pawn position = {useNewPosBp} data =  {pieces.blackPlayer.pawn1} move = {move} />, <Pawn position = {useNewPosBp} data =  {pieces.blackPlayer.pawn2} move = {move} />, <Pawn position = {useNewPosBp} data =  {pieces.blackPlayer.pawn3} move = {move} />, <Pawn position = {useNewPosBp} data =  {pieces.blackPlayer.pawn4} move = {move} />, <Pawn position = {useNewPosBp} data =  {pieces.blackPlayer.pawn5} move = {move} />, <Pawn position = {useNewPosBp} data =  {pieces.blackPlayer.pawn6} move = {move}/>, <Pawn position = {useNewPosBp} data =  {pieces.blackPlayer.pawn7} move = {move} />, <Pawn position = {useNewPosBp} data =  {pieces.blackPlayer.pawn8} move = {move} />],
                                [<Rook pColor = {`black`} />, <Knight pColor = {`black`}/>, <Bishop pColor = {`black`}/>, <Queen pColor = {`black`}/>, <King pColor = {`black`}/>, <Bishop pColor = {`black`}/>, <Knight pColor = {`black`}/>, <Rook pColor = {`black`} />],
      ]);

      

      const caseState = ()=> {
                let allCasesStates = []
                
                for (let i = 0; i < 8; i++) {
                    let lineCasesStates = []
                    for (let j = 0; j < 8; j++) {
                        if (board[i][j] !== "") {
                            lineCasesStates.push({empty : true, selected : false})
                        }else {
                            lineCasesStates.push({empty : false, selected : false})
                        }
                    }
                    allCasesStates.push(lineCasesStates)
                }
                console.log(allCasesStates);
                return allCasesStates
      }
      const [allCases, setCase] = useState(caseState());
      
      const [useToMove, setToMove] = useState("tomove")


      const selectToMove = (initPos, index)=> {
        console.log(index);
        console.log(useNewPosWp[index]);
        const firstStep = useNewPosWp[index].x + useNewPosWp[index].y;
        if(firstStep === 0){
            console.log("t3adet");
            setCase((cs)=> {
                const updaECases = [...cs];
                updaECases.forEach((el)=> {
                    el.forEach((el1)=> {
                        el1.selected = false;
                    })
                })
                updaECases[initPos.y + useNewPosWp[index].y + 1][initPos.x].selected = "tomove";
                updaECases[initPos.y + useNewPosWp[index].y + 2][initPos.x].selected = "tomove";
                return updaECases
            })
        }
      }

      



       
       
       
       
       const myCases = ()=> {
                let cases = [];
                //--set cases and color cases--
                for (let i = 0; i < 8; i++) {                              
                        for (let j = 0; j < 8; j++) {
                            const row = i + 1;
                            const col = 8 - j ;
                            if ((row % 2) === 0 && (col % 2)!==0) {
                                    cases.push(<div key={`${row}${col}`} className= {`case black-case ${row}${col} ${allCases[i][j].selected}`} >
                                                {board[i][j]}</div>
                            )}
                            else if ((row % 2) !== 0 && (col % 2)===0) {
                                    cases.push(<div key={`${row}${col}`} className= {`case black-case ${row}${col} ${allCases[i][j].selected}`} >
                                            {board[i][j]}</div>
                                                    )
                            }
                            else {
                                cases.push(<div key={`${row}${col}`} className= {`case white-case ${row}${col} ${allCases[i][j].selected}`} >
                                            {board[i][j]}</div>)
                            }
                        }
                    };
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




