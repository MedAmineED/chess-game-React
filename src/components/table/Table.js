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


    const initPiecesWPPosition = pieces.whitePlayer.map((pos)=>pos.position);
    const initPiecesBPPosition = pieces.blackPlayer.map((pos)=>pos.position)



    //initial position
    const [whitePawnPosition, setwhitePawnPosition] = useState(initPiecesWPPosition)
    const [blackPawnPosition, setblackPawnPosition] = useState(initPiecesBPPosition)



    //update initial positon
    const newPos = (casePos, index, color)=> {
        if(color === "white") {
            setwhitePawnPosition((arr)=> {
                const upDateNewPos = [...arr];
                upDateNewPos[index].y = casePos.y;
                return upDateNewPos
            })
        }else {
            setblackPawnPosition((arr)=> {
                const upDateNewPos = [...arr];
                upDateNewPos[index].y = casePos[index].y;
                return upDateNewPos
            })

        }
    }


    const move = (initPos, index, color)=> {
        console.log("aaaaaa ");
        console.log(whitePawnPosition[index]);
        console.log("aaaaaa ");
                    if (color === "white") {
                        console.log("pawn " );
                                // const piece = board[initPos.y + whitePawnPosition[index].y][initPos.x]
                                // selectPath(index, initPos);
                                // newPos(index, color)
                                // setBoard((br)=> {
                                //     const upDateBoard = [...br];
                                //     upDateBoard[initPos.y + whitePawnPosition[index].y - 1][initPos.x] = "";
                                //     upDateBoard[initPos.y + whitePawnPosition[index].y][initPos.x]= piece;
                                //     return upDateBoard
                                // }) 
                    }else {
                                const piece = board[initPos.y - blackPawnPosition[index].y][initPos.x]
                                newPos(index, color)
                                setBoard((br)=> {
                                    const upDateBoard = [...br];
                                    // console.log("bech tefre8 " + upDateBoard[initPos.y - blackPawnPosition[index].y + 1][initPos.x]);
                                    upDateBoard[initPos.y - blackPawnPosition[index].y + 1][initPos.x] = "";
                                    upDateBoard[initPos.y - blackPawnPosition[index].y][initPos.x]= piece;
                                    return upDateBoard
                                })
                    }
    }

    //select path function 
    const selectPath = (index, pawnPos, color)=> {
        if(color === "white") {
                    console.log("t3adeet");
                    setCase((cs)=> {
                        const updaECases = [...cs];
                        updaECases.forEach((el)=> {
                            el.forEach((el1)=> {
                                el1.selected = false;
                            })
                        })
                        updaECases[pawnPos.y  + 1][pawnPos.x].selected = "tomove";
                        updaECases[pawnPos.y  + 2][pawnPos.x].selected = "tomove";
                        return updaECases
                    })

        }
                    
}

    const [board, setBoard] = useState([
                                [<Rook pColor = {`white`} />, <Knight pColor = {`white`}/>, <Bishop pColor = {`white`}/>, <Queen pColor = {`white`}/>, <King pColor = {`white`}/>, <Bishop pColor = {`white`}/>, <Knight pColor = {`white`}/>, <Rook pColor = {`white`} />],
                                [<Pawn position = {whitePawnPosition[0]}  selectPath = {selectPath} data =  {pieces.whitePlayer[0]} />, <Pawn position = {whitePawnPosition[1]}  selectPath = {selectPath} data =  {pieces.whitePlayer[1]} />, <Pawn position = {whitePawnPosition[2]} selectPath = {selectPath} data =  {pieces.whitePlayer[2]}  />, <Pawn position = {whitePawnPosition[3]} selectPath = {selectPath} data =  {pieces.whitePlayer[3]} />, <Pawn position = {whitePawnPosition[4]} selectPath = {selectPath} data =  {pieces.whitePlayer[4]} />, <Pawn position = {whitePawnPosition[5]} selectPath = {selectPath} data =  {pieces.whitePlayer[5]} />, <Pawn position = {whitePawnPosition[6]} selectPath = {selectPath} data =  {pieces.whitePlayer[6]} />, <Pawn position = {whitePawnPosition[7]}  selectPath = {selectPath} data =  {pieces.whitePlayer[7]} />],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                [<Pawn position = {blackPawnPosition} data =  {pieces.blackPlayer[0]} selectPath = {selectPath} />, <Pawn position = {blackPawnPosition} data =  {pieces.blackPlayer[1]} selectPath = {selectPath} />, <Pawn position = {blackPawnPosition} data =  {pieces.blackPlayer[2]} selectPath = {selectPath} />, <Pawn position = {blackPawnPosition} data =  {pieces.blackPlayer[3]} selectPath = {selectPath} />, <Pawn position = {blackPawnPosition} data =  {pieces.blackPlayer[4]} selectPath = {selectPath} />, <Pawn position = {blackPawnPosition} data =  {pieces.blackPlayer[5]} selectPath = {selectPath}/>, <Pawn position = {blackPawnPosition} data =  {pieces.blackPlayer[6]} selectPath = {selectPath} />, <Pawn position = {blackPawnPosition} data =  {pieces.blackPlayer[7]} selectPath = {selectPath} />],
                                [<Rook pColor = {`black`} />, <Knight pColor = {`black`}/>, <Bishop pColor = {`black`}/>, <Queen pColor = {`black`}/>, <King pColor = {`black`}/>, <Bishop pColor = {`black`}/>, <Knight pColor = {`black`}/>, <Rook pColor = {`black`} />],
      ]);

      
      //virtual board 
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



      //move pawns on click
      const clickToMove = (index, color, casePos)=> {
        
                if (allCases[casePos.y][casePos.x].selected === "tomove") {
                    const piece = board[whitePawnPosition[index].y][whitePawnPosition[index].x]
                    console.log("thenya t3adet", piece);
                    setBoard((br)=> {
                        const upDateBoard = [...br];
                        upDateBoard[whitePawnPosition[index].y][whitePawnPosition[index].x] = "";
                        return upDateBoard
                    }) 
                    newPos(casePos, index, color)
                    setBoard((br)=> {
                        const upDateBoard = [...br];
                        upDateBoard[casePos.x][casePos.y]= piece;
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
      

    

      



       
       
       
       //show bord
       const myCases = ()=> {
                console.log(initPiecesWPPosition);
                console.log(whitePawnPosition);
                let cases = [];
                //--set cases and color cases--
                for (let i = 0; i < 8; i++) {                              
                        for (let j = 0; j < 8; j++) {
                            const row = i + 1;
                            const col = 8 - j ;
                            if ((row % 2) === 0 && (col % 2)!==0) {
                                    cases.push(<div key={`${row}${col}`} onClick = {()=> clickToMove()} className= {`case black-case ${row}${col} ${allCases[i][j].selected}`} >
                                                {board[i][j]}</div>
                            )}
                            else if ((row % 2) !== 0 && (col % 2)===0) {
                                    cases.push(<div key={`${row}${col}`} onClick = {()=> clickToMove()} className= {`case black-case ${row}${col} ${allCases[i][j].selected}`} >
                                            {board[i][j]}</div>
                                                    )
                            }
                            else {
                                cases.push(<div key={`${row}${col}`} onClick = {()=> clickToMove()} className= {`case white-case ${row}${col} ${allCases[i][j].selected}`} >
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




