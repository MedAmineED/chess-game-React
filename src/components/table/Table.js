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


import { pawn, rook, knight } from '../../piecesData/piecesData';


function Table ()  {


    const initPiecesWPPosition = pawn.whitePlayer.map((pos)=>pos.position);
    const initPiecesBPPosition = pawn.blackPlayer.map((pos)=>pos.position);

    const initPiecesWRPosition = rook.whitePlayer.map((pos)=>pos.position);
    const initPiecesBRPosition = rook.blackPlayer.map((pos)=>pos.position);
    
    const initPiecesWKPosition = knight.whitePlayer.map((pos)=>pos.position);
    const initPiecesBKPosition = knight.blackPlayer.map((pos)=>pos.position);



    //initial pieces position
    const [whitePawnPosition, setwhitePawnPosition] = useState(initPiecesWPPosition);
    const [blackPawnPosition, setblackPawnPosition] = useState(initPiecesBPPosition);

    const [whiteRookPosition, setWhiteRookPosition] = useState(initPiecesWRPosition);
    const [blackRookPosition, setblackRookPosition] = useState(initPiecesBRPosition);

    const [whiteKnightPosition, setWhiteKnightPosition] = useState(initPiecesWKPosition);
    const [blackKnightPosition, setBlackKnightPosition] = useState(initPiecesBKPosition);



    class pawnMethods {

        //select path function 
        static selectPath = (index, pawnPos, color)=> {
                                if(color === "white") {
                                            setCase((cs)=> {
                                                const updaECases = [...cs];
                                                updaECases.forEach((el)=> {
                                                    el.forEach((el1)=> {
                                                        el1.selected = false;
                                                    })
                                                })
                                                updaECases[pawnPos.y  + 1][pawnPos.x].selected = "tomove";
                                                updaECases[pawnPos.y  + 1][pawnPos.x].index = index;
                                                updaECases[pawnPos.y  + 1][pawnPos.x].pieceName = "pawn";
                                                updaECases[pawnPos.y  + 1][pawnPos.x].color= color;
                                                
                                                pawnPos.y === 1? updaECases[pawnPos.y  + 2][pawnPos.x].selected = "tomove": updaECases[pawnPos.y  + 2] !== undefined? updaECases[pawnPos.y  + 2][pawnPos.x].selected = false: console.log("end"); 
                                                pawnPos.y === 1? updaECases[pawnPos.y  + 2][pawnPos.x].index = index: updaECases[pawnPos.y  + 2] === undefined? console.log("end"): console.log("end"); 
                                                pawnPos.y === 1? updaECases[pawnPos.y  + 2][pawnPos.x].color = color: updaECases[pawnPos.y  + 2] === undefined? console.log("end"): console.log("end"); 
                                                pawnPos.y === 1? updaECases[pawnPos.y  + 2][pawnPos.x].pieceName = "pawn": updaECases[pawnPos.y  + 2] === undefined? console.log("end"): console.log("end"); 
                                                return updaECases
                                            })
                                }else {
                                    setCase((cs)=> {
                                        const updaECases = [...cs];
                                        updaECases.forEach((el)=> {
                                            el.forEach((el1)=> {
                                                el1.selected = false;
                                            })
                                        })
                                        updaECases[pawnPos.y  - 1][pawnPos.x].selected = "tomove";
                                        pawnPos.y === 6? updaECases[pawnPos.y  - 2][pawnPos.x].selected = "tomove": updaECases[pawnPos.y  - 2] !== undefined? updaECases[pawnPos.y  - 2][pawnPos.x].selected = false: console.log("end"); 
                                        updaECases[pawnPos.y  - 1][pawnPos.x].index = index;
                                        pawnPos.y === 6? updaECases[pawnPos.y  - 2][pawnPos.x].index = index: updaECases[pawnPos.y  - 2] === undefined? console.log("end"): console.log("end"); 
                                        updaECases[pawnPos.y  - 1][pawnPos.x].color= color;
                                        pawnPos.y === 6? updaECases[pawnPos.y  - 2][pawnPos.x].color = color: updaECases[pawnPos.y  - 2] === undefined? console.log("end"): console.log("end"); 
                                        return updaECases
                                    })
                                }
                                            
                            }
        
        //move pawns on click
        static clickToMove = async (index, color, casePos)=> {
                                console.log(color);
                                    if (allCases[casePos.y][casePos.x].selected === "tomove" && color === "white") {
                                        const piece = board[whitePawnPosition[index].y][whitePawnPosition[index].x]
                                        await setBoard((br)=> {
                                            const upDateBoard = [...br];
                                            upDateBoard[whitePawnPosition[index].y][whitePawnPosition[index].x] = "";
                                            return upDateBoard
                                        }) 
                                        newPos(casePos, index, setwhitePawnPosition)
                                        setBoard((br)=> {
                                            const upDateBoard = [...br];
                                            upDateBoard[casePos.y][casePos.x]= piece;
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
                                    }else if(allCases[casePos.y][casePos.x].selected === "tomove" && color === "black") {
                                        const piece = board[blackPawnPosition[index].y][blackPawnPosition[index].x]
                                                await setBoard((br)=> {
                                                    const upDateBoard = [...br];
                                                    upDateBoard[blackPawnPosition[index].y][blackPawnPosition[index].x] = "";
                                                    return upDateBoard
                                                }) 
                                                newPos(casePos, index, setblackPawnPosition)
                                                setBoard((br)=> {
                                                    const upDateBoard = [...br];
                                                    upDateBoard[casePos.y][casePos.x]= piece;
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
                                    }
                            }
    }

    class knightMethods {
        static selectPath = (index, knightPos, color)=> {
                                    if(color === "white") {
                                                setCase((cs)=> {
                                                    const updateCases = [...cs];
                                                    updateCases.forEach((el)=> {
                                                        el.forEach((el1)=> {
                                                            el1.selected = false;
                                                        })
                                                    })
                                                    updateCases[knightPos.y + 2][knightPos.x + 1]!== undefined?updateCases[knightPos.y  + 2][knightPos.x + 1].selected = "tomove": console.log("no case");
                                                    updateCases[knightPos.y + 2][knightPos.x + 1]!== undefined?updateCases[knightPos.y  + 2][knightPos.x + 1].index = index:console.log("");
                                                    updateCases[knightPos.y + 2][knightPos.x + 1]!== undefined? updateCases[knightPos.y  + 2][knightPos.x + 1].color= color : console.log("");
                                                    updateCases[knightPos.y + 2][knightPos.x + 1]!== undefined? updateCases[knightPos.y  + 2][knightPos.x + 1].pieceName= "knight" : console.log("");

                                                    updateCases[knightPos.y + 2][knightPos.x - 1]!== undefined? updateCases[knightPos.y  + 2][knightPos.x - 1].selected = "tomove": console.log("end"); 
                                                    updateCases[knightPos.y + 2][knightPos.x - 1]!== undefined? updateCases[knightPos.y  + 2][knightPos.x - 1].index = index:console.log("");
                                                    updateCases[knightPos.y + 2][knightPos.x - 1]!== undefined? updateCases[knightPos.y  + 2][knightPos.x - 1].color= color : console.log("");
                                                    updateCases[knightPos.y + 2][knightPos.x - 1]!== undefined? updateCases[knightPos.y  + 2][knightPos.x - 1].pieceName= "knight" : console.log("");

                                                    updateCases[knightPos.y - 2][knightPos.x + 1]!== undefined? updateCases[knightPos.y  - 2][knightPos.x + 1].selected = "white" : console.log("no case");
                                                    updateCases[knightPos.y - 2][knightPos.x + 1]!== undefined? updateCases[knightPos.y - 2][knightPos.x + 1].index = index:console.log(""); 
                                                    updateCases[knightPos.y - 2][knightPos.x + 1]!== undefined? updateCases[knightPos.y  - 2][knightPos.x + 1].color= color : console.log("");
                                                    updateCases[knightPos.y - 2][knightPos.x + 1]!== undefined? updateCases[knightPos.y  - 2][knightPos.x + 1].pieceName= "knight" : console.log("");

                                                    updateCases[knightPos.y - 2][knightPos.x - 1]!== undefined? updateCases[knightPos.y  - 2][knightPos.x + 1].selected = "white" : console.log("no case");
                                                    updateCases[knightPos.y - 2][knightPos.x - 1]!== undefined? updateCases[knightPos.y - 2][knightPos.x + 1].index = index:console.log(""); 
                                                    updateCases[knightPos.y - 2][knightPos.x - 1]!== undefined? updateCases[knightPos.y  - 2][knightPos.x + 1].color= color : console.log("");
                                                    updateCases[knightPos.y - 2][knightPos.x - 1]!== undefined? updateCases[knightPos.y  - 2][knightPos.x + 1].pieceName= "knight" : console.log("");
                                                    
                                                    
                                                    return updateCases
                                                })
                                    }else {
                                        setCase((cs)=> {
                                            const updateCases = [...cs];
                                            updateCases.forEach((el)=> {
                                                el.forEach((el1)=> {
                                                    el1.selected = false;
                                                })
                                            })
                                            updateCases[knightPos.y  - 1][knightPos.x].selected = "tomove";
                                            knightPos.y === 6? updateCases[knightPos.y  - 2][knightPos.x].selected = "tomove": updateCases[knightPos.y  - 2] !== undefined? updateCases[knightPos.y  - 2][knightPos.x].selected = false: console.log("end"); 
                                            updateCases[knightPos.y  - 1][knightPos.x].index = index;
                                            knightPos.y === 6? updateCases[knightPos.y  - 2][knightPos.x].index = index: updateCases[knightPos.y  - 2] === undefined? console.log("end"): console.log("end"); 
                                            updateCases[knightPos.y  - 1][knightPos.x].color= color;
                                            knightPos.y === 6? updateCases[knightPos.y  - 2][knightPos.x].color = color: updateCases[knightPos.y  - 2] === undefined? console.log("end"): console.log("end"); 
                                            return updateCases
                                        })
                                    }
                                                
                                }
        //move pawns on click
        static clickToMove = async (index, color, casePos)=> {
            console.log(color);
                if (allCases[casePos.y][casePos.x].selected === "tomove" && color === "white") {
                    const piece = board[whiteKnightPosition[index].y][whiteKnightPosition[index].x]
                    await setBoard((br)=> {
                        const upDateBoard = [...br];
                        upDateBoard[whiteKnightPosition[index].y][whiteKnightPosition[index].x] = "";
                        return upDateBoard
                    }) 
                    newPos(casePos, index, setWhiteKnightPosition)
                    setBoard((br)=> {
                        const upDateBoard = [...br];
                        upDateBoard[casePos.y][casePos.x]= piece;
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
                }else if(allCases[casePos.y][casePos.x].selected === "tomove" && color === "black") {
                    const piece = board[blackKnightPosition[index].y][blackKnightPosition[index].x]
                            await setBoard((br)=> {
                                const upDateBoard = [...br];
                                upDateBoard[blackKnightPosition[index].y][blackKnightPosition[index].x] = "";
                                return upDateBoard
                            }) 
                            pawnMethods.newPos(casePos, index, setBlackKnightPosition)
                            setBoard((br)=> {
                                const upDateBoard = [...br];
                                upDateBoard[casePos.y][casePos.x]= piece;
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
                }
        }
    }

    
    //update initial positon
    const newPos = (casePos, index, set)=> {
        set((arr)=> {
            const upDateNewPos = [...arr];
            upDateNewPos[index].y = casePos.y;
            return upDateNewPos
        })
    }


    const [board, setBoard] = useState([
                                [<Rook pColor = {`white`} />, <Knight position = {whiteKnightPosition[0]} data = {knight.whitePlayer[0]} selectPath = {knightMethods.selectPath}/>, <Bishop pColor = {`white`}/>, <Queen pColor = {`white`}/>, <King pColor = {`white`}/>, <Bishop pColor = {`white`}/>, <Knight position = {whiteKnightPosition[0]} data = {knight.whitePlayer[1]} selectPath = {knightMethods.selectPath}/>, <Rook pColor = {`white`} />],
                                [<Pawn position = {whitePawnPosition[0]}  selectPath = {pawnMethods.selectPath} data =  {pawn.whitePlayer[0]} />, <Pawn position = {whitePawnPosition[1]}  selectPath = {pawnMethods.selectPath} data =  {pawn.whitePlayer[1]} />, <Pawn position = {whitePawnPosition[2]} selectPath = {pawnMethods.selectPath} data =  {pawn.whitePlayer[2]}  />, <Pawn position = {whitePawnPosition[3]} selectPath = {pawnMethods.selectPath} data =  {pawn.whitePlayer[3]} />, <Pawn position = {whitePawnPosition[4]} selectPath = {pawnMethods.selectPath} data =  {pawn.whitePlayer[4]} />, <Pawn position = {whitePawnPosition[5]} selectPath = {pawnMethods.selectPath} data =  {pawn.whitePlayer[5]} />, <Pawn position = {whitePawnPosition[6]} selectPath = {pawnMethods.selectPath} data =  {pawn.whitePlayer[6]} />, <Pawn position = {whitePawnPosition[7]}  selectPath = {pawnMethods.selectPath} data =  {pawn.whitePlayer[7]} />],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                [<Pawn position = {blackPawnPosition[0]} data =  {pawn.blackPlayer[0]} selectPath = {pawnMethods.selectPath} />, <Pawn position = {blackPawnPosition[1]} data =  {pawn.blackPlayer[1]} selectPath = {pawnMethods.selectPath} />, <Pawn position = {blackPawnPosition[2]} data =  {pawn.blackPlayer[2]} selectPath = {pawnMethods.selectPath} />, <Pawn position = {blackPawnPosition[3]} data =  {pawn.blackPlayer[3]} selectPath = {pawnMethods.selectPath} />, <Pawn position = {blackPawnPosition[4]} data =  {pawn.blackPlayer[4]} selectPath = {pawnMethods.selectPath} />, <Pawn position = {blackPawnPosition[5]} data =  {pawn.blackPlayer[5]} selectPath = {pawnMethods.selectPath}/>, <Pawn position = {blackPawnPosition[6]} data =  {pawn.blackPlayer[6]} selectPath = {pawnMethods.selectPath} />, <Pawn position = {blackPawnPosition[7]} data =  {pawn.blackPlayer[7]} selectPath = {pawnMethods.selectPath} />],
                                [<Rook pColor = {`black`} />, <Knight position = {blackKnightPosition[0]} data = {knight.blackPlayer[0]} selectPath = {knightMethods.selectPath}/>, <Bishop pColor = {`black`}/>, <Queen pColor = {`black`}/>, <King pColor = {`black`}/>, <Bishop pColor = {`black`}/>, <Knight position = {blackKnightPosition[0]} data = {knight.blackPlayer[1]} selectPath = {knightMethods.selectPath}/>, <Rook pColor = {`black`} />],
      ]);

      




      //virtual board 
      const caseState = ()=> {
                let allCasesStates = []
                
                for (let i = 0; i < 8; i++) {
                    let lineCasesStates = []
                    for (let j = 0; j < 8; j++) {
                        if (board[i][j] !== "") {
                            i===1 || i ===0 ? lineCasesStates.push({empty : false, selected : false, index : 0 , pieceName : "", color : "white"}) :
                            i===6 || i===7?lineCasesStates.push({empty : false, selected : false, index : 0 , pieceName : "", color : "black"}): console.log("");
                        }else {
                            lineCasesStates.push({empty : true, selected : false, index : 0 , pieceName : "", color : "no color"})
                        }
                    }
                    allCasesStates.push(lineCasesStates)
                }
                return allCasesStates
      }
      const [allCases, setCase] = useState(caseState());
      
      
      
      //show real board
       const myCases = ()=> {
                let cases = [];
                //--set cases and color cases--
                for (let i = 0; i < 8; i++) {                              
                        for (let j = 0; j < 8; j++) {
                            const row = i + 1;
                            const col = 8 - j ;
                            if ((row % 2) === 0 && (col % 2)!==0) {
                                    cases.push(<div key={`${row}${col}`} onClick = {()=> pawnMethods.clickToMove(allCases[i][j].index, allCases[i][j].color, {x : j, y : i})} className= {`case black-case ${row}${col} ${allCases[i][j].selected}`} >
                                                {board[i][j]}</div>
                            )}
                            else if ((row % 2) !== 0 && (col % 2)===0) {
                                    cases.push(<div key={`${row}${col}`} onClick = {()=> pawnMethods.clickToMove(allCases[i][j].index, allCases[i][j].color, {x : j, y : i})} className= {`case black-case ${row}${col} ${allCases[i][j].selected}`} >
                                            {board[i][j]}</div>
                                                    )
                            }
                            else {
                                cases.push(<div key={`${row}${col}`} onClick = {()=> pawnMethods.clickToMove(allCases[i][j].index, allCases[i][j].color, {x : j, y : i})} className= {`case white-case ${row}${col} ${allCases[i][j].selected}`} >
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




