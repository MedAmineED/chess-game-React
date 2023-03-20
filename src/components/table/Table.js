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
                        console.log("pawn " );
                                const piece = board[initPos.y + useNewPosWp[index].y][initPos.x]
                                selectPath(initPos, index);
                                // newPos(index, color)
                                // setBoard((br)=> {
                                //     const upDateBoard = [...br];
                                //     upDateBoard[initPos.y + useNewPosWp[index].y - 1][initPos.x] = "";
                                //     upDateBoard[initPos.y + useNewPosWp[index].y][initPos.x]= piece;
                                //     return upDateBoard
                                // }) 
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
                                [<Pawn position = {useNewPosWp}  move = {move} data =  {pieces.whitePlayer[0]} />, <Pawn position = {useNewPosWp}  move = {move} data =  {pieces.whitePlayer[1]} />, <Pawn position = {useNewPosWp} move = {move} data =  {pieces.whitePlayer[2]}  />, <Pawn position = {useNewPosWp} move = {move} data =  {pieces.whitePlayer[3]} />, <Pawn position = {useNewPosWp} move = {move} data =  {pieces.whitePlayer[4]} />, <Pawn position = {useNewPosWp} move = {move} data =  {pieces.whitePlayer[5]} />, <Pawn position = {useNewPosWp} move = {move} data =  {pieces.whitePlayer[6]} />, <Pawn position = {useNewPosWp}  move = {move} data =  {pieces.whitePlayer[7]} />],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                [<Pawn position = {useNewPosBp} data =  {pieces.blackPlayer[0]} move = {move} />, <Pawn position = {useNewPosBp} data =  {pieces.blackPlayer[1]} move = {move} />, <Pawn position = {useNewPosBp} data =  {pieces.blackPlayer[2]} move = {move} />, <Pawn position = {useNewPosBp} data =  {pieces.blackPlayer[3]} move = {move} />, <Pawn position = {useNewPosBp} data =  {pieces.blackPlayer[4]} move = {move} />, <Pawn position = {useNewPosBp} data =  {pieces.blackPlayer[5]} move = {move}/>, <Pawn position = {useNewPosBp} data =  {pieces.blackPlayer[6]} move = {move} />, <Pawn position = {useNewPosBp} data =  {pieces.blackPlayer[7]} move = {move} />],
                                [<Rook pColor = {`black`} />, <Knight pColor = {`black`}/>, <Bishop pColor = {`black`}/>, <Queen pColor = {`black`}/>, <King pColor = {`black`}/>, <Bishop pColor = {`black`}/>, <Knight pColor = {`black`}/>, <Rook pColor = {`black`} />],
      ]);

      

      const caseState = ()=> {
                let allCasesStates = []
                
                for (let i = 0; i < 8; i++) {
                    let lineCasesStates = []
                    for (let j = 0; j < 8; j++) {
                        if (board[i][j] !== "") {
                            lineCasesStates.push({empty : false, selected : false})
                        }else {
                            lineCasesStates.push({empty : true, selected : false})
                        }
                    }
                    allCasesStates.push(lineCasesStates)
                }
                return allCasesStates
      }
      const [allCases, setCase] = useState(caseState());

      const clickToMove = (initPos, index, color, casePos)=> {
        
            console.log("index " + index);
            console.log(initPos);
            console.log(allCases[initPos.y + useNewPosWp[index].y + 1][initPos.x].selected);
            selectPath(initPos, index, casePos);
                if (allCases[casePos.x][casePos.y].selected === "tomove") {
                    console.log(color);
                    const piece = board[initPos.y + useNewPosWp[index].y][initPos.x]
                    newPos(index, color)
                    setBoard((br)=> {
                        const upDateBoard = [...br];
                        upDateBoard[initPos.y + useNewPosWp[index].y - 1][initPos.x] = "";
                        upDateBoard[initPos.y + useNewPosWp[index].y][initPos.x]= piece;
                        return upDateBoard
                    }) 
                    setCase((cs)=> {
                        const updaECases = [...cs];
                        updaECases.forEach((el)=> {
                            el.forEach((el1)=> {
                                el1.selected = false;
                            })
                        })
                        return updaECases
                    })
                    console.log(allCases);
        }
      }
      


      const selectPath = (initPos, index, casePos)=> {
        const firstStep = useNewPosWp[index].x + useNewPosWp[index].y;
        console.log(initPos);
        console.log("bord + " + board[casePos.x][casePos.y]);
        if(firstStep === 0 && board[casePos.x][casePos.y]!== ""){
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
                                    cases.push(<div key={`${row}${col}`} onClick = {()=> clickToMove(pieces.whitePlayer[j].position, j, pieces.whitePlayer[j].color, {x: i, y: j})} className= {`case black-case ${row}${col} ${allCases[i][j].selected}`} >
                                                {board[i][j]}</div>
                            )}
                            else if ((row % 2) !== 0 && (col % 2)===0) {
                                    cases.push(<div key={`${row}${col}`} onClick = {()=> clickToMove(pieces.whitePlayer[j].position, j, pieces.whitePlayer[j].color, {x: i, y: j})} className= {`case black-case ${row}${col} ${allCases[i][j].selected}`} >
                                            {board[i][j]}</div>
                                                    )
                            }
                            else {
                                cases.push(<div key={`${row}${col}`} onClick = {()=> clickToMove(pieces.whitePlayer[j].position, j, pieces.whitePlayer[j].color, {x: i, y: j})} className= {`case white-case ${row}${col} ${allCases[i][j].selected}`} >
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




