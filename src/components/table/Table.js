import React, { useEffect, createContext, useContext } from 'react';
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


import { pawn, rook, knight, bishop, king, queen } from '../../piecesData/piecesData';



export const PlayTr = createContext(0)

function Table ()  {


    const initPiecesWPPosition = pawn.whitePlayer.map((pos)=>pos.position);
    const initPiecesBPPosition = pawn.blackPlayer.map((pos)=>pos.position);

    const initPiecesWRPosition = rook.whitePlayer.map((pos)=>pos.position);
    const initPiecesBRPosition = rook.blackPlayer.map((pos)=>pos.position);
    
    const initPiecesWKPosition = knight.whitePlayer.map((pos)=>pos.position);
    const initPiecesBKPosition = knight.blackPlayer.map((pos)=>pos.position);

    const initPiecesWBPosition = bishop.whitePlayer.map((pos)=>pos.position);
    const initPiecesBBPosition = bishop.blackPlayer.map((pos)=>pos.position);

    const initPiecesWKINGPosition = {...king.whitePlayer.position};
    const initPiecesBKINGPosition = {...king.blackPlayer.position};

    const initPiecesWQPosition = {...queen.whitePlayer.position};
    const initPiecesBQPosition = {...queen.blackPlayer.position};


    //initial pieces position
    const [whitePawnPosition, setwhitePawnPosition] = useState(initPiecesWPPosition);
    const [blackPawnPosition, setblackPawnPosition] = useState(initPiecesBPPosition);

    const [whiteRookPosition, setWhiteRookPosition] = useState(initPiecesWRPosition);
    const [blackRookPosition, setblackRookPosition] = useState(initPiecesBRPosition);

    const [whiteKnightPosition, setWhiteKnightPosition] = useState(initPiecesWKPosition);
    const [blackKnightPosition, setBlackKnightPosition] = useState(initPiecesBKPosition);

    const [whiteBishopPosition, setWhiteBishopPosition] = useState(initPiecesWBPosition);
    const [blackBishopPosition, setBlackBishopPosition] = useState(initPiecesBBPosition);

    
    const [whiteKingPosition, setWhiteKingPosition] = useState(initPiecesWKINGPosition);
    const [blackKingPosition, setBlackKingPosition] = useState(initPiecesBKINGPosition);


    const [whiteQueenPosition, setWhiteQueenPosition] = useState(initPiecesWQPosition);
    const [blackQueenPosition, setBlackQueenPosition] = useState(initPiecesBQPosition);


    const [playerTurn, setPlayerTurn] = useState(1)




    class pawnMethods {

        //select path function 
        static selectPath = async (index, pawnPos, color, playerTr)=> {
                    if(color === "white") {
                                            setCase((cs)=> {
                                                const updaECases = [...cs];
                                                updaECases.forEach((el)=> {
                                                    el.forEach((el1)=> {
                                                        el1.selected = false;
                                                    })
                                                })

                                                if(updaECases[pawnPos.y  + 1][pawnPos.x].empty){
                                                        updaECases[pawnPos.y  + 1][pawnPos.x].selected = "tomove";
                                                        updaECases[pawnPos.y  + 1][pawnPos.x].index = index;
                                                        updaECases[pawnPos.y  + 1][pawnPos.x].pieceName = "pawn";
                                                        updaECases[pawnPos.y  + 1][pawnPos.x].color= color;}
                                                
                                                
                                                if(pawnPos.y === 1 && updaECases[pawnPos.y  + 2][pawnPos.x].empty){
                                                        pawnPos.y === 1? updaECases[pawnPos.y  + 2][pawnPos.x].selected = "tomove": updaECases[pawnPos.y  + 2] !== undefined? updaECases[pawnPos.y  + 2][pawnPos.x].selected = false: console.log("end"); 
                                                        pawnPos.y === 1? updaECases[pawnPos.y  + 2][pawnPos.x].index = index: updaECases[pawnPos.y  + 2] === undefined? console.log("end"): console.log("end"); 
                                                        pawnPos.y === 1? updaECases[pawnPos.y  + 2][pawnPos.x].color = color: updaECases[pawnPos.y  + 2] === undefined? console.log("end"): console.log("end"); 
                                                        pawnPos.y === 1? updaECases[pawnPos.y  + 2][pawnPos.x].pieceName = "pawn": updaECases[pawnPos.y  + 2] === undefined? console.log("end"): console.log("end");} 
                                                
                                                
                                                if(pawnPos.y + 1 < 8 && pawnPos.x + 1 < 8 && updaECases[pawnPos.y  + 1][pawnPos.x + 1].eat === "black") {
                                                        updaECases[pawnPos.y  + 1][pawnPos.x + 1].selected = "tomove";
                                                        updaECases[pawnPos.y  + 1][pawnPos.x + 1].color = color;
                                                        updaECases[pawnPos.y  + 1][pawnPos.x + 1].index = index;
                                                        updaECases[pawnPos.y  + 1][pawnPos.x + 1].pieceName = "pawn";
                                                }
                                                
                                                if(pawnPos.y + 1 < 8 && pawnPos.x - 1 >=0 && updaECases[pawnPos.y  + 1][pawnPos.x - 1].eat === "black") {
                                                        updaECases[pawnPos.y  + 1][pawnPos.x - 1].selected = "tomove";
                                                        updaECases[pawnPos.y  + 1][pawnPos.x - 1].color = color;
                                                        updaECases[pawnPos.y  + 1][pawnPos.x - 1].index = index;
                                                        updaECases[pawnPos.y  + 1][pawnPos.x - 1].pieceName = "pawn";
                                                }
                                                return updaECases
                                            })
                                }else if(color === "black") {
                                    setCase((cs)=> {
                                        const updaECases = [...cs];
                                        updaECases.forEach((el)=> {
                                            el.forEach((el1)=> {
                                                el1.selected = false;
                                            })
                                        })

                                        if(pawnPos.y === 6 && updaECases[pawnPos.y  - 2][pawnPos.x].empty){
                                            pawnPos.y === 6? updaECases[pawnPos.y  - 2][pawnPos.x].selected = "tomove": updaECases[pawnPos.y  - 2] !== undefined? updaECases[pawnPos.y  - 2][pawnPos.x].selected = false: console.log("end"); 
                                            pawnPos.y === 6? updaECases[pawnPos.y  - 2][pawnPos.x].index = index: updaECases[pawnPos.y  - 2] === undefined? console.log("end"): console.log("end"); 
                                            pawnPos.y === 6? updaECases[pawnPos.y  - 2][pawnPos.x].color = color: updaECases[pawnPos.y  - 2] === undefined? console.log("end"): console.log("end"); 
                                            pawnPos.y === 6? updaECases[pawnPos.y  - 2][pawnPos.x].pieceName = "pawn": updaECases[pawnPos.y  - 2] === undefined? console.log("end"): console.log("end"); }



                                        if(updaECases[pawnPos.y  - 1][pawnPos.x].empty){
                                            updaECases[pawnPos.y  - 1][pawnPos.x].selected = "tomove";
                                            updaECases[pawnPos.y  - 1][pawnPos.x].index = index;
                                            updaECases[pawnPos.y  - 1][pawnPos.x].color= color;
                                            updaECases[pawnPos.y  - 1][pawnPos.x].pieceName = "pawn";}

                                        if(pawnPos.y - 1 >= 0 && pawnPos.x + 1 < 8 && updaECases[pawnPos.y  - 1][pawnPos.x + 1].eat === "white") {
                                                updaECases[pawnPos.y  - 1][pawnPos.x + 1].selected = "tomove";
                                                updaECases[pawnPos.y  - 1][pawnPos.x + 1].color = color;
                                                updaECases[pawnPos.y  - 1][pawnPos.x + 1].index = index;
                                                updaECases[pawnPos.y  - 1][pawnPos.x + 1].pieceName = "pawn";
                                            }
                                            
                                        if(pawnPos.y - 1 >= 0 && pawnPos.x - 1 >=0 && updaECases[pawnPos.y  - 1][pawnPos.x - 1].eat === "white") {
                                                updaECases[pawnPos.y  - 1][pawnPos.x - 1].selected = "tomove";
                                                updaECases[pawnPos.y  - 1][pawnPos.x - 1].color = color;
                                                updaECases[pawnPos.y  - 1][pawnPos.x - 1].index = index;
                                                updaECases[pawnPos.y  - 1][pawnPos.x - 1].pieceName = "pawn";
                                            }
                                        return updaECases
                                    })
                                }
                                            
                            }
        
        //move pawns on click
        static clickToMove = async (index, color, casePos)=> {
            await   setPlayerTurn((prTr)=> prTr + 1)
            if (allCases[casePos.y][casePos.x].selected === "tomove" && color === "white") {
                                        const piece = board[whitePawnPosition[index].y][whitePawnPosition[index].x]
                                        await setBoard((br)=> {
                                            const upDateBoard = [...br];
                                            upDateBoard[whitePawnPosition[index].y][whitePawnPosition[index].x] = "";
                                            return upDateBoard
                                        }) 
                                        await setCase((cs)=> {
                                            const updaECases = [...cs];
                                            updaECases.map((el)=>{
                                                el.map((el1)=> {
                                                    el1.selected = ""
                                                    el1.pieceName = "";
                                                    }
                                                )
                                            })
                                            updaECases[whitePawnPosition[index].y][whitePawnPosition[index].x].index = "";
                                            updaECases[whitePawnPosition[index].y][whitePawnPosition[index].x].eat = "";
                                            updaECases[whitePawnPosition[index].y][whitePawnPosition[index].x].color= "";
                                            updaECases[whitePawnPosition[index].y][whitePawnPosition[index].x].empty=true;

                                            if(whitePawnPosition[index].y - 2 === 1){
                                                updaECases[whitePawnPosition[index].y - 1][whitePawnPosition[index].x].index = "";
                                                updaECases[whitePawnPosition[index].y - 1][whitePawnPosition[index].x].eat = "";
                                                updaECases[whitePawnPosition[index].y - 1][whitePawnPosition[index].x].color= "";
                                                updaECases[whitePawnPosition[index].y - 1][whitePawnPosition[index].x].empty=true;
                                            }

                                            
                                            return updaECases
                                        })
                                        await newPos(casePos, index, setwhitePawnPosition)
                                        await setBoard((br)=> {
                                            const upDateBoard = [...br];
                                            upDateBoard[casePos.y][casePos.x]= piece;
                                            return upDateBoard
                                        }) 
                                        setCase((cs)=> {
                                                const updaECases = [...cs];
                                                updaECases[casePos.y][casePos.x].pieceName = "";
                                                updaECases[casePos.y][casePos.x].color= color;
                                                updaECases[casePos.y][casePos.x].eat= color;
                                                updaECases[casePos.y - 1][casePos.x].color= "";
                                                updaECases[casePos.y][casePos.x].empty= false;
                                                updaECases[casePos.y][casePos.x].index= index;


                                            if(whitePawnPosition[index].y - 1 === 1 && updaECases[whitePawnPosition[index].y + 1][whitePawnPosition[index].x].empty === true){
                                                updaECases[whitePawnPosition[index].y + 1][whitePawnPosition[index].x].index = "";
                                                updaECases[whitePawnPosition[index].y + 1][whitePawnPosition[index].x].eat = "";
                                                updaECases[whitePawnPosition[index].y + 1][whitePawnPosition[index].x].color= "";
                                                updaECases[whitePawnPosition[index].y + 1][whitePawnPosition[index].x].empty=true;
                                            }
                                            return updaECases
                                        })
                                        
                                    }else if(allCases[casePos.y][casePos.x].selected === "tomove" && color === "black") {
                                        const piece = board[blackPawnPosition[index].y][blackPawnPosition[index].x]
                                                await setBoard((br)=> {
                                                    const upDateBoard = [...br];
                                                    upDateBoard[blackPawnPosition[index].y][blackPawnPosition[index].x] = "";
                                                    return upDateBoard
                                                }) 
                                                await setCase((cs)=> {
                                                    const updaECases = [...cs];
                                                    updaECases.map((el)=>{
                                                        el.map((el1)=> {
                                                        el1.selected = ""
                                                        el1.pieceName = "";
                                                    })
                                                    })
                                                    updaECases[blackPawnPosition[index].y][blackPawnPosition[index].x].index = "";
                                                    updaECases[blackPawnPosition[index].y][blackPawnPosition[index].x].color= "";
                                                    updaECases[blackPawnPosition[index].y][blackPawnPosition[index].x].eat = "";;
                                                    updaECases[blackPawnPosition[index].y][blackPawnPosition[index].x].empty=true;


                                                    if(blackPawnPosition[index].y + 2 === 6){
                                                        updaECases[blackPawnPosition[index].y + 2][blackPawnPosition[index].x].index = "";
                                                        updaECases[blackPawnPosition[index].y + 2][blackPawnPosition[index].x].color= "";
                                                        updaECases[blackPawnPosition[index].y + 2][blackPawnPosition[index].x].eat = "";
                                                        updaECases[blackPawnPosition[index].y + 2][blackPawnPosition[index].x].empty=true;
                                                    }

                                                    return updaECases
                                                })
                                                newPos(casePos, index, setblackPawnPosition)
                                                setBoard((br)=> {
                                                    const upDateBoard = [...br];
                                                    upDateBoard[casePos.y][casePos.x]= piece;
                                                    return upDateBoard
                                                }) 
                                                setCase((cs)=> {
                                                    const updaECases = [...cs];
                                                    updaECases[casePos.y][casePos.x].pieceName = "";
                                                    updaECases[casePos.y][casePos.x].color= color;
                                                    updaECases[casePos.y + 1][casePos.x].color= "";
                                                    updaECases[casePos.y][casePos.x].eat= color;
                                                    updaECases[casePos.y][casePos.x].empty= false;
                                                    updaECases[casePos.y][casePos.x].index= index;

                                                    if(blackPawnPosition[index].y + 1 === 6 && updaECases[blackPawnPosition[index].y - 1][blackPawnPosition[index].x].empty === true){
                                                        updaECases[blackPawnPosition[index].y - 1][blackPawnPosition[index].x].index = "";
                                                        updaECases[blackPawnPosition[index].y - 1][blackPawnPosition[index].x].eat = "";
                                                        updaECases[blackPawnPosition[index].y - 1][blackPawnPosition[index].x].color= "";
                                                        updaECases[blackPawnPosition[index].y - 1][blackPawnPosition[index].x].empty=true;
                                                    }
                                                    return updaECases
                                                })
                                    }
                                    
                                            
            }
    }

    class knightMethods {
        static selectPath = (index, knightPos, color)=> {

                                                setCase((cs)=> {
                                                    const updateCases = [...cs];
                                                    updateCases.forEach((el)=> {
                                                        el.forEach((el1)=> {
                                                            el1.selected = false;
                                                        })
                                                    })
                                                    if(knightPos.y + 2 < 8 && knightPos.x + 1 < 8) {
                                                            updateCases[knightPos.y  + 2][knightPos.x + 1].selected = "tomove" 
                                                            updateCases[knightPos.y  + 2][knightPos.x + 1].index = index
                                                            updateCases[knightPos.y  + 2][knightPos.x + 1].color= color 
                                                            updateCases[knightPos.y  + 2][knightPos.x + 1].pieceName= "knight"
                                                    }


                                                    if(knightPos.y + 2 < 8 && knightPos.x - 1 >= 0) {
                                                            updateCases[knightPos.y  + 2][knightPos.x - 1].selected = "tomove"
                                                            updateCases[knightPos.y  + 2][knightPos.x - 1].index = index
                                                            updateCases[knightPos.y  + 2][knightPos.x - 1].color= color 
                                                            updateCases[knightPos.y  + 2][knightPos.x - 1].pieceName= "knight"
                                                    }


                                                    if(knightPos.y - 2 >= 0&& knightPos.x + 1 < 8) {
                                                            updateCases[knightPos.y - 2][knightPos.x + 1].selected = "tomove" 
                                                            updateCases[knightPos.y - 2][knightPos.x + 1].index = index 
                                                            updateCases[knightPos.y - 2][knightPos.x + 1].color= color 
                                                            updateCases[knightPos.y - 2][knightPos.x + 1].pieceName= "knight" 
                                                    }

                                                    if(knightPos.y - 2 >=0 && knightPos.x - 1 >= 0){
                                                            updateCases[knightPos.y - 2][knightPos.x - 1].selected = "tomove";
                                                            updateCases[knightPos.y - 2][knightPos.x - 1].index = index 
                                                            updateCases[knightPos.y - 2][knightPos.x - 1].color= color;
                                                            updateCases[knightPos.y - 2][knightPos.x - 1].pieceName= "knight";
                                                    }


                                                    if(knightPos.y + 1 < 8 && knightPos.x + 2 < 8) {
                                                            updateCases[knightPos.y  + 1][knightPos.x + 2].selected = "tomove" 
                                                            updateCases[knightPos.y  + 1][knightPos.x + 2].index = index
                                                            updateCases[knightPos.y  + 1][knightPos.x + 2].color= color 
                                                            updateCases[knightPos.y  + 1][knightPos.x + 2].pieceName= "knight"
                                                    }


                                                    if(knightPos.y + 1 < 8 && knightPos.x - 2 >= 0) {
                                                            updateCases[knightPos.y  + 1][knightPos.x - 2].selected = "tomove"
                                                            updateCases[knightPos.y  + 1][knightPos.x - 2].index = index
                                                            updateCases[knightPos.y  + 1][knightPos.x - 2].color= color 
                                                            updateCases[knightPos.y  + 1][knightPos.x - 2].pieceName= "knight"
                                                    }


                                                    if(knightPos.y - 1 >= 0&& knightPos.x + 2 < 8) {
                                                            updateCases[knightPos.y - 1][knightPos.x + 2].selected = "tomove" 
                                                            updateCases[knightPos.y - 1][knightPos.x + 2].index = index 
                                                            updateCases[knightPos.y - 1][knightPos.x + 2].color= color 
                                                            updateCases[knightPos.y - 1][knightPos.x + 2].pieceName= "knight" 
                                                    }

                                                    if(knightPos.y - 1 >=0 && knightPos.x - 2 >= 0){
                                                            updateCases[knightPos.y - 1][knightPos.x - 2].selected = "tomove";
                                                            updateCases[knightPos.y - 1][knightPos.x - 2].index = index 
                                                            updateCases[knightPos.y - 1][knightPos.x - 2].color= color;
                                                            updateCases[knightPos.y - 1][knightPos.x - 2].pieceName= "knight";
                                                    }

                                                    
                                                    
                                                    return updateCases
                                                })
                                            
                                                
                                }
        //move pawns on click
        static clickToMove = async (index, color, casePos)=> {
                    await   setPlayerTurn((prTr)=> prTr + 1)
                if (allCases[casePos.y][casePos.x].selected === "tomove" && color === "white") {
                    const piece = board[whiteKnightPosition[index].y][whiteKnightPosition[index].x]
                    await setBoard((br)=> {
                        const upDateBoard = [...br];
                        upDateBoard[whiteKnightPosition[index].y][whiteKnightPosition[index].x] = "";
                        return upDateBoard
                    }) 
                    newPos(casePos, index, setWhiteKnightPosition)
                    await setBoard((br)=> {
                        const upDateBoard = [...br];
                        upDateBoard[casePos.y][casePos.x]= piece;
                        return upDateBoard
                    }) 
                }else if(allCases[casePos.y][casePos.x].selected === "tomove" && color === "black") {
                    const piece = board[blackKnightPosition[index].y][blackKnightPosition[index].x]
                            await setBoard((br)=> {
                                const upDateBoard = [...br];
                                upDateBoard[blackKnightPosition[index].y][blackKnightPosition[index].x] = "";
                                return upDateBoard
                            }) 
                            newPos(casePos, index, setBlackKnightPosition)
                            setBoard((br)=> {
                                const upDateBoard = [...br];
                                upDateBoard[casePos.y][casePos.x]= piece;
                                return upDateBoard
                            }) 
                }
                setCase((cs)=> {
                    const updaECases = [...cs];
                    updaECases.forEach((el)=> {
                        el.forEach((el1)=> {
                            el1.selected = false;
                            el1.pieceName = "";
                            el1.id = "";
                        })
                    })
                    return updaECases
                })
        }
    }

    class rookMethods {
        static selectPath = async (index, rookPos, color, playerTr)=> {
                                        console.log("playertutn from rook select --- : " + playerTr);
                                        await setCase((cs)=> {
                                            const updateCases = [...cs];
                                            updateCases.forEach((el)=> {
                                                el.forEach((el1)=> {
                                                    el1.selected = false;
                                                    el1.pieceName = ""
                                                    el1.color= ""
                                                })
                                            })
                                            let path1 = true;
                                            let path2 = true;
                                            let path3 = true;
                                            let path4 = true;

                                            for (let i = 1; i <= 8; i++) {

                                                        if(rookPos.y  + i < 8 && path1) {


                                                                    //chek player enemy and case to move in the top vertical path 
                                                                    if((playerTr % 2 === 0 && updateCases[rookPos.y + i][rookPos.x].eat === "white") || (playerTr % 2 !== 0 && updateCases[rookPos.y + i][rookPos.x].eat === "black")){
                                                                        updateCases[rookPos.y  + i][rookPos.x].selected = "tomove" 
                                                                        updateCases[rookPos.y  + i][rookPos.x].index = index
                                                                        updateCases[rookPos.y  + i][rookPos.x].color= color 
                                                                        updateCases[rookPos.y  + i][rookPos.x].pieceName= "rook"   
                                                                        path1 = false   
                                                                    }
                                                                    if((playerTr % 2 !== 0 && updateCases[rookPos.y + i][rookPos.x].eat === "white") || (playerTr % 2 === 0 && updateCases[rookPos.y + i][rookPos.x].eat === "black")){
                                                                        path1 = false   
                                                                    }


                                                                    //chek if empty 
                                                                    if(updateCases[rookPos.y + i][rookPos.x].empty === true) {
                                                                        updateCases[rookPos.y  + i][rookPos.x].selected = "tomove" 
                                                                        updateCases[rookPos.y  + i][rookPos.x].index = index
                                                                        updateCases[rookPos.y  + i][rookPos.x].color= color 
                                                                        updateCases[rookPos.y  + i][rookPos.x].pieceName= "rook"
                                                                    }
                                                        }
                                                        if(rookPos.y - i >= 0 && path2) {
                                                                        
                                                                    if(updateCases[rookPos.y  - i][rookPos.x].empty === true){
                                                                        updateCases[rookPos.y  - i][rookPos.x].selected = "tomove"
                                                                        updateCases[rookPos.y  - i][rookPos.x].index = index
                                                                        updateCases[rookPos.y  - i][rookPos.x].color= color 
                                                                        updateCases[rookPos.y  - i][rookPos.x].pieceName= "rook"}
                                                                    
                                                                    
                                                                    if((playerTr % 2 === 0 && updateCases[rookPos.y - i][rookPos.x].eat === "white") || (playerTr % 2 !== 0 && updateCases[rookPos.y - i][rookPos.x].eat === "black")){
                                                                            path2 = false
                                                                            updateCases[rookPos.y  - i][rookPos.x].selected = "tomove" 
                                                                            updateCases[rookPos.y  - i][rookPos.x].index = index
                                                                            updateCases[rookPos.y  - i][rookPos.x].color= color
                                                                            updateCases[rookPos.y  - i][rookPos.x].pieceName= "rook"                                          
                                                                    }
                                                                    if((playerTr % 2 !== 0 && updateCases[rookPos.y - i][rookPos.x].eat === "white") || (playerTr % 2 === 0 && updateCases[rookPos.y - i][rookPos.x].eat === "black")){
                                                                            path2 = false                                    
                                                                    }
                                                        } 
                                                        if(rookPos.x + i < 8 && path3) {

                                                                    if(updateCases[rookPos.y][rookPos.x + i].empty === true){
                                                                        updateCases[rookPos.y][rookPos.x + i].selected = "tomove" 
                                                                        updateCases[rookPos.y][rookPos.x + i].index = index 
                                                                        updateCases[rookPos.y][rookPos.x + i].color= color 
                                                                        updateCases[rookPos.y][rookPos.x + i].pieceName= "rook" }

                                                                    if((playerTr % 2 === 0 && updateCases[rookPos.y][rookPos.x + i].eat === "white") || (playerTr % 2 !== 0 && updateCases[rookPos.y][rookPos.x + i].eat === "black")){
                                                                            path3 = false
                                                                            updateCases[rookPos.y][rookPos.x + i].selected = "tomove" 
                                                                            updateCases[rookPos.y][rookPos.x + i].index = index
                                                                            updateCases[rookPos.y][rookPos.x + i].color= color 
                                                                            updateCases[rookPos.y][rookPos.x + i].pieceName= "rook"                                          
                                                                    }
                                                                    if((playerTr % 2 !== 0 && updateCases[rookPos.y][rookPos.x + i].eat === "white") || (playerTr % 2 === 0 && updateCases[rookPos.y][rookPos.x + i].eat === "black")){
                                                                            path3 = false                                          
                                                                    }
                                                        }
                                                        if(rookPos.x - i >= 0 && path4){
                                                            if(updateCases[rookPos.y][rookPos.x - i].empty === true){
                                                                updateCases[rookPos.y][rookPos.x - i].selected = "tomove";
                                                                updateCases[rookPos.y][rookPos.x - i].index = index 
                                                                updateCases[rookPos.y][rookPos.x - i].color= color;
                                                                updateCases[rookPos.y][rookPos.x - i].pieceName= "rook";}
                                                            if((playerTr % 2 === 0 && updateCases[rookPos.y][rookPos.x - i].eat === "white") || (playerTr % 2 !== 0 && updateCases[rookPos.y][rookPos.x - i].eat === "black")){
                                                                    path4 = false
                                                                    updateCases[rookPos.y][rookPos.x - i].selected = "tomove" 
                                                                    updateCases[rookPos.y][rookPos.x - i].index = index
                                                                    updateCases[rookPos.y][rookPos.x - i].color= color
                                                                    updateCases[rookPos.y][rookPos.x - i].pieceName= "rook"                                          
                                                            }
                                                            if((playerTr % 2 !== 0 && updateCases[rookPos.y][rookPos.x - i].eat === "white") || (playerTr % 2 === 0 && updateCases[rookPos.y][rookPos.x - i].eat === "black")){
                                                                    path4 = false
                                                            }
                                                        }                                                        
                                            }
                                            return updateCases
                                        })
                                    }
        static clickToMove = async (index, color, casePos)=> {
            if (allCases[casePos.y][casePos.x].selected === "tomove" && color === "white") {
                                        await   setPlayerTurn((prTr)=> prTr + 1)
                                                const piece = board[whiteRookPosition[index].y][whiteRookPosition[index].x]
                                                await setBoard((br)=> {
                                                            const upDateBoard = [...br];
                                                            upDateBoard[whiteRookPosition[index].y][whiteRookPosition[index].x] = "";
                                                            return upDateBoard
                                                }) 
                                                await setCase((cs)=> {
                                                    const updaECases = [...cs];
                                                    updaECases[whiteRookPosition[index].y][whiteRookPosition[index].x].empty = true
                                                    updaECases[whiteRookPosition[index].y][whiteRookPosition[index].x].eat = ""
                                                    updaECases.forEach((el)=> {
                                                        el.forEach((el1)=> {
                                                            el1.selected = false;
                                                            el1.index = "";
                                                            el1.color = "";
                                                            el1.pieceName = "";
                                                        })
                                                    })

                                                    return updaECases
                                                })
                                                await newPos(casePos, index, setWhiteRookPosition)
                                                await setBoard((br)=> {
                                                            const upDateBoard = [...br];
                                                            upDateBoard[casePos.y][casePos.x]= piece;
                                                            return upDateBoard
                                                }) 
                                                await setCase((cs)=> {
                                                    const updaECases = [...cs];
                                                    updaECases[casePos.y][casePos.x].eat = "white"
                                                    updaECases[casePos.y][casePos.x].color = "white"
                                                    updaECases[casePos.y][casePos.x].index = ""
                                                    updaECases[casePos.y][casePos.x].empty = false;

                                                    return updaECases
                                                })
                                    }else if(allCases[casePos.y][casePos.x].selected === "tomove" && color === "black") {
                                        await   setPlayerTurn((prTr)=> prTr + 1)
                                        const piece = board[blackRookPosition[index].y][blackRookPosition[index].x]
                                                await setBoard((br)=> {
                                                    const upDateBoard = [...br];
                                                    upDateBoard[blackRookPosition[index].y][blackRookPosition[index].x] = "";
                                                    return upDateBoard
                                                }) 
                                                await setCase((cs)=> {
                                                    const updaECases = [...cs];
                                                    updaECases[blackRookPosition[index].y][blackRookPosition[index].x].empty = true;
                                                    updaECases[blackRookPosition[index].y][blackRookPosition[index].x].eat = true;
                                                    updaECases.forEach((el)=> {
                                                        el.forEach((el1)=> {
                                                            el1.selected = false;
                                                            el1.pieceName = "";
                                                            el1.index = "";
                                                            el1.color = "";
                                                        })
                                                    })

                                                    return updaECases
                                                })
                                                await newPos(casePos, index, setblackRookPosition)
                                                await setBoard((br)=> {
                                                    const upDateBoard = [...br];
                                                    upDateBoard[casePos.y][casePos.x]= piece;
                                                    return upDateBoard
                                                }) 
                                                await setCase((cs)=> {
                                                    const updaECases = [...cs];
                                                    updaECases[casePos.y][casePos.x].eat = "black"
                                                    updaECases[casePos.y][casePos.x].color = "black"
                                                    updaECases[casePos.y][casePos.x].index = ""
                                                    updaECases[casePos.y][casePos.x].empty = false;

                                                    return updaECases
                                                })
                                    }
                            }
    }

    class bishopMethods {
        static selectPath = (index, bishopPos, color, playerTr)=> {
            setCase((cs)=> {
                const updateCases = [...cs];
                updateCases.forEach((el)=> {
                    el.forEach((el1)=> {
                        el1.selected = false;
                        el1.pieceName = ""
                        el1.color= ""
                    })
                })
                let path1 = true;
                let path2 = true;
                let path3 = true;
                let path4 = true;

                for (let i = 1; i <= 8; i++) {
                            if(bishopPos.y  + i < 8 && bishopPos.x + i < 8 && path1) {
                                        if(updateCases[bishopPos.y  + i][bishopPos.x + i].empty){
                                                updateCases[bishopPos.y  + i][bishopPos.x + i].selected = "tomove" 
                                                updateCases[bishopPos.y  + i][bishopPos.x + i].index = index
                                                updateCases[bishopPos.y  + i][bishopPos.x + i].color= color 
                                                updateCases[bishopPos.y  + i][bishopPos.x + i].pieceName= "bishop"
                                        }
                                        if((playerTr % 2 === 0 && updateCases[bishopPos.y + i][bishopPos.x + i].eat === "white") 
                                            || (playerTr % 2 !== 0 && updateCases[bishopPos.y + i][bishopPos.x + i].eat === "black"))
                                            {
                                                path1 = false;
                                                updateCases[bishopPos.y  + i][bishopPos.x + i].selected = "tomove" 
                                                updateCases[bishopPos.y  + i][bishopPos.x + i].index = index
                                                updateCases[bishopPos.y  + i][bishopPos.x + i].color= color 
                                                updateCases[bishopPos.y  + i][bishopPos.x + i].pieceName= "bishop"
                                            }
                                        if((playerTr % 2 !== 0 && updateCases[bishopPos.y + i][bishopPos.x + i].eat === "white") 
                                            || (playerTr % 2 === 0 && updateCases[bishopPos.y + i][bishopPos.x + i].eat === "black"))
                                            {
                                               path1 = false   
                                            }
                            }

                            if(bishopPos.y - i >= 0 && bishopPos.x - i >= 0 && path2) {
                                        if(updateCases[bishopPos.y  - i][bishopPos.x - i].empty){
                                            updateCases[bishopPos.y - i][bishopPos.x - i].selected = "tomove";
                                            updateCases[bishopPos.y - i][bishopPos.x - i].index = index;
                                            updateCases[bishopPos.y - i][bishopPos.x - i].color= color;
                                            updateCases[bishopPos.y - i][bishopPos.x - i].pieceName= "bishop";
                                        }
                                        if((playerTr % 2 === 0 && updateCases[bishopPos.y - i][bishopPos.x - i].eat === "white") 
                                           || (playerTr % 2 !== 0 && updateCases[bishopPos.y - i][bishopPos.x - i].eat === "black"))
                                           {
                                                path2 = false
                                                updateCases[bishopPos.y - i][bishopPos.x - i].selected = "tomove";
                                                updateCases[bishopPos.y - i][bishopPos.x - i].index = index;
                                                updateCases[bishopPos.y - i][bishopPos.x - i].color= color;
                                                updateCases[bishopPos.y - i][bishopPos.x - i].pieceName= "bishop";
                                            }
                                        if((playerTr % 2 !== 0 && updateCases[bishopPos.y - i][bishopPos.x - i].eat === "white") 
                                           || (playerTr % 2 === 0 && updateCases[bishopPos.y - i][bishopPos.x - i].eat === "black"))
                                           {
                                                path2 = false   
                                           }
                            } 


                            if(bishopPos.y + i < 8 && bishopPos.x - i >= 0 && path3) {
                                    if(updateCases[bishopPos.y + i][bishopPos.x - i].empty){
                                                updateCases[bishopPos.y + i][bishopPos.x - i].selected = "tomove" 
                                                updateCases[bishopPos.y + i][bishopPos.x - i].index = index 
                                                updateCases[bishopPos.y + i][bishopPos.x - i].color= color 
                                                updateCases[bishopPos.y + i][bishopPos.x - i].pieceName= "bishop"
                                    }
                                    if((playerTr % 2 === 0 && updateCases[bishopPos.y + i][bishopPos.x - i].eat === "white")
                                      || (playerTr % 2 !== 0 && updateCases[bishopPos.y + i][bishopPos.x - i].eat === "black"))
                                      {
                                            path3 = false
                                            updateCases[bishopPos.y + i][bishopPos.x - i].selected = "tomove" 
                                            updateCases[bishopPos.y + i][bishopPos.x - i].index = index 
                                            updateCases[bishopPos.y + i][bishopPos.x - i].color= color 
                                            updateCases[bishopPos.y + i][bishopPos.x - i].pieceName= "bishop"
                                       }
                                    if((playerTr % 2 !== 0 && updateCases[bishopPos.y + i][bishopPos.x - i].eat === "white")
                                      || (playerTr % 2 === 0 && updateCases[bishopPos.y + i][bishopPos.x - i].eat === "black"))
                                      {
                                        path3 = false   
                                      }

                            }
                            if(bishopPos.y - i >= 0 && bishopPos.x + i < 8 && path4) {
                                if(updateCases[bishopPos.y - i][bishopPos.x + i].empty){
                                            updateCases[bishopPos.y - i][bishopPos.x + i].selected = "tomove" 
                                            updateCases[bishopPos.y - i][bishopPos.x + i].index = index 
                                            updateCases[bishopPos.y - i][bishopPos.x + i].color= color 
                                            updateCases[bishopPos.y - i][bishopPos.x + i].pieceName= "bishop" 
                                }
                                if((playerTr % 2 === 0 && updateCases[bishopPos.y - i][bishopPos.x + i].eat === "white") 
                                    || (playerTr % 2 !== 0 && updateCases[bishopPos.y - i][bishopPos.x + i].eat === "black"))
                                    {
                                        path4 = false
                                        updateCases[bishopPos.y - i][bishopPos.x + i].selected = "tomove" 
                                        updateCases[bishopPos.y - i][bishopPos.x + i].index = index 
                                        updateCases[bishopPos.y - i][bishopPos.x + i].color= color 
                                        updateCases[bishopPos.y - i][bishopPos.x + i].pieceName= "bishop"                                                     
                                    }
                                if((playerTr % 2 !== 0 && updateCases[bishopPos.y - i][bishopPos.x + i].eat === "white") 
                                   || (playerTr % 2 === 0 && updateCases[bishopPos.y - i][bishopPos.x + i].eat === "black"))
                                    {
                                        path4 = false   
                                    }
                    }
                }
                return updateCases
            })
        }

        static clickToMove = async (index, color, casePos)=> {
            if (allCases[casePos.y][casePos.x].selected === "tomove" && color === "white") {
                                        await   setPlayerTurn((prTr)=> prTr + 1)
                                                const piece = board[whiteBishopPosition[index].y][whiteBishopPosition[index].x]
                                                await setBoard((br)=> {
                                                            const upDateBoard = [...br];
                                                            upDateBoard[whiteBishopPosition[index].y][whiteBishopPosition[index].x] = "";
                                                            return upDateBoard
                                                }) 
                                                await setCase((cs)=> {
                                                    const updaECases = [...cs];
                                                    updaECases[whiteBishopPosition[index].y][whiteBishopPosition[index].x].empty = true
                                                    updaECases[whiteBishopPosition[index].y][whiteBishopPosition[index].x].eat = ""
                                                    updaECases.forEach((el)=> {
                                                        el.forEach((el1)=> {
                                                            el1.selected = false;
                                                            el1.index = "";
                                                            el1.color = "";
                                                            el1.pieceName = "";
                                                        })
                                                    })

                                                    return updaECases
                                                })
                                                await newPos(casePos, index, setWhiteBishopPosition)
                                                await setBoard((br)=> {
                                                            const upDateBoard = [...br];
                                                            upDateBoard[casePos.y][casePos.x]= piece;
                                                            return upDateBoard
                                                }) 
                                                await setCase((cs)=> {
                                                    const updaECases = [...cs];
                                                    updaECases[casePos.y][casePos.x].eat = "white"
                                                    updaECases[casePos.y][casePos.x].color = "white"
                                                    updaECases[casePos.y][casePos.x].index = ""
                                                    updaECases[casePos.y][casePos.x].empty = false;

                                                    return updaECases
                                                })
                                    }else if(allCases[casePos.y][casePos.x].selected === "tomove" && color === "black") {
                                        await   setPlayerTurn((prTr)=> prTr + 1)
                                        const piece = board[blackBishopPosition[index].y][blackBishopPosition[index].x]
                                                await setBoard((br)=> {
                                                    const upDateBoard = [...br];
                                                    upDateBoard[blackBishopPosition[index].y][blackBishopPosition[index].x] = "";
                                                    return upDateBoard
                                                }) 
                                                await setCase((cs)=> {
                                                    const updaECases = [...cs];
                                                    updaECases[blackBishopPosition[index].y][blackBishopPosition[index].x].empty = true;
                                                    updaECases[blackBishopPosition[index].y][blackBishopPosition[index].x].eat = true;
                                                    updaECases.forEach((el)=> {
                                                        el.forEach((el1)=> {
                                                            el1.selected = false;
                                                            el1.pieceName = "";
                                                            el1.index = "";
                                                            el1.color = "";
                                                        })
                                                    })

                                                    return updaECases
                                                })
                                                await newPos(casePos, index, setBlackBishopPosition)
                                                await setBoard((br)=> {
                                                    const upDateBoard = [...br];
                                                    upDateBoard[casePos.y][casePos.x]= piece;
                                                    return upDateBoard
                                                }) 
                                                await setCase((cs)=> {
                                                    const updaECases = [...cs];
                                                    updaECases[casePos.y][casePos.x].eat = "black"
                                                    updaECases[casePos.y][casePos.x].color = "black"
                                                    updaECases[casePos.y][casePos.x].index = ""
                                                    updaECases[casePos.y][casePos.x].empty = false;

                                                    return updaECases
                                                })
                                    }
                            }
    }

    class kingMethods {
        static selectPath = (index, kingPos, color, playerTr)=> {

                setCase((cs)=> {
                    const updateCases = [...cs];
                    updateCases.forEach((el)=> {
                        el.forEach((el1)=> {
                            el1.selected = false;
                        })
                    })
                    if(kingPos.y + 1 < 8){
                        if((updateCases[kingPos.y  + 1][kingPos.x].empty || ((playerTr % 2 === 0 && updateCases[kingPos.y  + 1][kingPos.x].eat === "white") 
                        || (playerTr % 2 !== 0 && updateCases[kingPos.y  + 1][kingPos.x].eat === "black")))){
                            updateCases[kingPos.y  + 1][kingPos.x].selected = "tomove";
                            updateCases[kingPos.y  + 1][kingPos.x].index = index;
                            updateCases[kingPos.y  + 1][kingPos.x].pieceName = "king";
                            updateCases[kingPos.y  + 1][kingPos.x].color= color;
                        }
                    }
                    if(kingPos.x + 1 < 8){
                        if((updateCases[kingPos.y][kingPos.x + 1].empty||((playerTr % 2 === 0 && updateCases[kingPos.y][kingPos.x + 1].eat === "white") 
                        || (playerTr % 2 !== 0 && updateCases[kingPos.y][kingPos.x + 1].eat === "black")))){
                            updateCases[kingPos.y][kingPos.x + 1].selected = "tomove";
                            updateCases[kingPos.y][kingPos.x + 1].index = index;
                            updateCases[kingPos.y][kingPos.x + 1].pieceName = "king";
                            updateCases[kingPos.y][kingPos.x + 1].color= color;
                        }
                    }
                    if(kingPos.x - 1 >= 0){
                        if((updateCases[kingPos.y][kingPos.x - 1].empty)||((playerTr % 2 === 0 && updateCases[kingPos.y][kingPos.x - 1].eat === "white") 
                        || (playerTr % 2 !== 0 && updateCases[kingPos.y][kingPos.x - 1].eat === "black"))){
                            updateCases[kingPos.y][kingPos.x - 1].selected = "tomove";
                            updateCases[kingPos.y][kingPos.x - 1].index = index;
                            updateCases[kingPos.y][kingPos.x - 1].pieceName = "king";
                            updateCases[kingPos.y][kingPos.x - 1].color= color;
                        }
                    }
                    if(kingPos.y - 1 >= 0) {
                        if((updateCases[kingPos.y - 1][kingPos.x].empty)
                            ||((playerTr % 2 === 0 && updateCases[kingPos.y - 1][kingPos.x].eat === "white") 
                            || (playerTr % 2 !== 0 && updateCases[kingPos.y - 1][kingPos.x].eat === "black"))){
                                updateCases[kingPos.y - 1][kingPos.x].selected = "tomove";
                                updateCases[kingPos.y - 1][kingPos.x].index = index;
                                updateCases[kingPos.y - 1][kingPos.x].pieceName = "king";
                                updateCases[kingPos.y - 1][kingPos.x].color= color;
                        }
                    }
                    if(kingPos.y + 1 < 8 && kingPos.x + 1 < 8) {
                        if((updateCases[kingPos.y + 1][kingPos.x + 1].empty)
                            ||((playerTr % 2 === 0 && updateCases[kingPos.y + 1][kingPos.x + 1].eat === "white") 
                            || (playerTr % 2 !== 0 && updateCases[kingPos.y + 1][kingPos.x + 1].eat === "black"))){
                                    updateCases[kingPos.y + 1][kingPos.x + 1].selected = "tomove";
                                    updateCases[kingPos.y + 1][kingPos.x + 1].index = index;
                                    updateCases[kingPos.y + 1][kingPos.x + 1].pieceName = "king";
                                    updateCases[kingPos.y + 1][kingPos.x + 1].color= color;
                        }
                    }
                    if(kingPos.y - 1 >= 0 && kingPos.x - 1 >= 0) {
                        if((updateCases[kingPos.y - 1][kingPos.x - 1].empty)
                            ||((playerTr % 2 === 0 && updateCases[kingPos.y - 1][kingPos.x - 1].eat === "white") 
                            || (playerTr % 2 !== 0 && updateCases[kingPos.y - 1][kingPos.x - 1].eat === "black"))){
                                    updateCases[kingPos.y - 1][kingPos.x - 1].selected = "tomove";
                                    updateCases[kingPos.y - 1][kingPos.x - 1].index = index;
                                    updateCases[kingPos.y - 1][kingPos.x - 1].pieceName = "king";
                                    updateCases[kingPos.y - 1][kingPos.x - 1].color= color;
                        }
                    }
                    if(kingPos.y + 1 < 8 && kingPos.x - 1 >= 0) {
                        if((updateCases[kingPos.y + 1][kingPos.x - 1].empty)
                           ||((playerTr % 2 === 0 && updateCases[kingPos.y + 1][kingPos.x - 1].eat === "white") 
                           || (playerTr % 2 !== 0 && updateCases[kingPos.y + 1][kingPos.x - 1].eat === "black"))){
                                    updateCases[kingPos.y + 1][kingPos.x - 1].selected = "tomove";
                                    updateCases[kingPos.y + 1][kingPos.x - 1].index = index;
                                    updateCases[kingPos.y + 1][kingPos.x - 1].pieceName = "king";
                                    updateCases[kingPos.y + 1][kingPos.x - 1].color= color;
                        }
                    }
                    if(kingPos.y - 1 >= 0 && kingPos.x + 1 < 8) {
                        if((updateCases[kingPos.y - 1][kingPos.x + 1].empty)
                            ||((playerTr % 2 === 0 && updateCases[kingPos.y - 1][kingPos.x + 1].eat === "white") 
                            || (playerTr % 2 !== 0 && updateCases[kingPos.y - 1][kingPos.x + 1].eat === "black"))){
                                    updateCases[kingPos.y - 1][kingPos.x + 1].selected = "tomove";
                                    updateCases[kingPos.y - 1][kingPos.x + 1].index = index;
                                    updateCases[kingPos.y - 1][kingPos.x + 1].pieceName = "king";
                                    updateCases[kingPos.y - 1][kingPos.x + 1].color= color;
                        }
                    }
                
                    return updateCases

                })
            

            
        }

        static clickToMove = async (index, color, casePos)=> {
            if (allCases[casePos.y][casePos.x].selected === "tomove" && color === "white") {
                                        await   setPlayerTurn((prTr)=> prTr + 1)
                                                const piece = board[whiteKingPosition.y][whiteKingPosition.x]
                                                await setBoard((br)=> {
                                                            const upDateBoard = [...br];
                                                            upDateBoard[whiteKingPosition.y][whiteKingPosition.x] = "";
                                                            return upDateBoard
                                                }) 
                                                await setCase((cs)=> {
                                                    const updaECases = [...cs];
                                                    updaECases[whiteKingPosition.y][whiteKingPosition.x].empty = true
                                                    updaECases[whiteKingPosition.y][whiteKingPosition.x].eat = ""
                                                    updaECases.forEach((el)=> {
                                                        el.forEach((el1)=> {
                                                            el1.selected = false;
                                                            el1.index = "";
                                                            el1.color = "";
                                                            el1.pieceName = "";
                                                        })
                                                    })

                                                    return updaECases
                                                })
                                                await newPosKing(casePos, index, setWhiteKingPosition)
                                                await setBoard((br)=> {
                                                            const upDateBoard = [...br];
                                                            upDateBoard[casePos.y][casePos.x]= piece;
                                                            return upDateBoard
                                                }) 
                                                await setCase((cs)=> {
                                                    const updaECases = [...cs];
                                                    updaECases[casePos.y][casePos.x].eat = "white"
                                                    updaECases[casePos.y][casePos.x].color = "white"
                                                    updaECases[casePos.y][casePos.x].index = ""
                                                    updaECases[casePos.y][casePos.x].empty = false;

                                                    return updaECases
                                                })
                                    }else if(allCases[casePos.y][casePos.x].selected === "tomove" && color === "black") {
                                        await   setPlayerTurn((prTr)=> prTr + 1)
                                        const piece = board[blackKingPosition.y][blackKingPosition.x]
                                                await setBoard((br)=> {
                                                    const upDateBoard = [...br];
                                                    upDateBoard[blackKingPosition.y][blackKingPosition.x] = "";
                                                    return upDateBoard
                                                }) 
                                                await setCase((cs)=> {
                                                    const updaECases = [...cs];
                                                    updaECases[blackKingPosition.y][blackKingPosition.x].empty = true;
                                                    updaECases[blackKingPosition.y][blackKingPosition.x].eat = true;
                                                    updaECases.forEach((el)=> {
                                                        el.forEach((el1)=> {
                                                            el1.selected = false;
                                                            el1.pieceName = "";
                                                            el1.index = "";
                                                            el1.color = "";
                                                        })
                                                    })

                                                    return updaECases
                                                })
                                                await newPosKing(casePos, index, setBlackKingPosition)
                                                await setBoard((br)=> {
                                                    const upDateBoard = [...br];
                                                    upDateBoard[casePos.y][casePos.x]= piece;
                                                    return upDateBoard
                                                }) 
                                                await setCase((cs)=> {
                                                    const updaECases = [...cs];
                                                    updaECases[casePos.y][casePos.x].eat = "black"
                                                    updaECases[casePos.y][casePos.x].color = "black"
                                                    updaECases[casePos.y][casePos.x].index = ""
                                                    updaECases[casePos.y][casePos.x].empty = false;

                                                    return updaECases
                                                })
                                    }
                            }
    }

    class queenMethods {
        static selectPath = (index, queenPos, color)=> {
            setCase((cs)=> {
                const updateCases = [...cs];
                updateCases.forEach((el)=> {
                    el.forEach((el1)=> {
                        el1.selected = false;
                    })
                })
                for (let i = 1; i <= 8; i++) {
                            if(queenPos.y  + i < 8) {
                                    updateCases[queenPos.y  + i][queenPos.x].selected = "tomove" 
                                    updateCases[queenPos.y  + i][queenPos.x].index = index
                                    updateCases[queenPos.y  + i][queenPos.x].color= color 
                                    updateCases[queenPos.y  + i][queenPos.x].pieceName= "queen"
                            }
                            if(queenPos.y - i >= 0) {
                                    updateCases[queenPos.y  - i][queenPos.x].selected = "tomove"
                                    updateCases[queenPos.y  - i][queenPos.x].index = index
                                    updateCases[queenPos.y  - i][queenPos.x].color= color 
                                    updateCases[queenPos.y  - i][queenPos.x].pieceName= "queen"
                            } 
                            if(queenPos.x + i < 8) {
                                    updateCases[queenPos.y][queenPos.x + i].selected = "tomove" 
                                    updateCases[queenPos.y][queenPos.x + i].index = index 
                                    updateCases[queenPos.y][queenPos.x + i].color= color 
                                    updateCases[queenPos.y][queenPos.x + i].pieceName= "queen" 
                            }
                            if(queenPos.x - i >= 0){
                                    updateCases[queenPos.y][queenPos.x - i].selected = "tomove";
                                    updateCases[queenPos.y][queenPos.x - i].index = index 
                                    updateCases[queenPos.y][queenPos.x - i].color= color;
                                    updateCases[queenPos.y][queenPos.x - i].pieceName= "queen";
                            }   
                            if(queenPos.y  + i < 8 && queenPos.x + i < 8) {
                                updateCases[queenPos.y  + i][queenPos.x + i].selected = "tomove" 
                                updateCases[queenPos.y  + i][queenPos.x + i].index = index
                                updateCases[queenPos.y  + i][queenPos.x + i].color= color 
                                updateCases[queenPos.y  + i][queenPos.x + i].pieceName= "queen"
                        }
                        if(queenPos.y - i >= 0 && queenPos.x - i >= 0) {
                                updateCases[queenPos.y  - i][queenPos.x - i].selected = "tomove"
                                updateCases[queenPos.y  - i][queenPos.x - i].index = index
                                updateCases[queenPos.y  - i][queenPos.x - i].color= color 
                                updateCases[queenPos.y  - i][queenPos.x - i].pieceName= "queen"
                        } 
                        if(queenPos.y + i < 8 && queenPos.x - i >= 0) {
                                updateCases[queenPos.y + i][queenPos.x - i].selected = "tomove" 
                                updateCases[queenPos.y + i][queenPos.x - i].index = index 
                                updateCases[queenPos.y + i][queenPos.x - i].color= color 
                                updateCases[queenPos.y + i][queenPos.x - i].pieceName= "queen" 
                        }
                        if(queenPos.y - i >= 0 && queenPos.x + i < 8) {
                                updateCases[queenPos.y - i][queenPos.x + i].selected = "tomove" 
                                updateCases[queenPos.y - i][queenPos.x + i].index = index 
                                updateCases[queenPos.y - i][queenPos.x + i].color= color 
                                updateCases[queenPos.y - i][queenPos.x + i].pieceName= "queen" 
                        }
                        if(queenPos.y - i >= 0 && queenPos.x - i >= 0){
                                updateCases[queenPos.y - i][queenPos.x - i].selected = "tomove";
                                updateCases[queenPos.y - i][queenPos.x - i].index = index 
                                updateCases[queenPos.y - i][queenPos.x - i].color= color;
                                updateCases[queenPos.y - i][queenPos.x - i].pieceName= "queen";
                        }                                                     
                }
                return updateCases
            })
        }
        
        static clickToMove = async (index, color, casePos)=> {
                await   setPlayerTurn((prTr)=> prTr + 1)
                if (allCases[casePos.y][casePos.x].selected === "tomove" && color === "white") {
                    const piece = board[whiteQueenPosition.y][whiteQueenPosition.x]
                    await setBoard((br)=> {
                        const upDateBoard = [...br];
                        upDateBoard[whiteQueenPosition.y][whiteQueenPosition.x] = "";
                        return upDateBoard
                    }) 
                    newPosKing(casePos, index, setWhiteQueenPosition)
                    setBoard((br)=> {
                        const upDateBoard = [...br];
                        upDateBoard[casePos.y][casePos.x]= piece;
                        return upDateBoard
                    }) 
                }else if(allCases[casePos.y][casePos.x].selected === "tomove" && color === "black") {
                    const piece = board[blackQueenPosition.y][blackQueenPosition.x]
                            await setBoard((br)=> {
                                const upDateBoard = [...br];
                                upDateBoard[blackQueenPosition.y][blackQueenPosition.x] = "";
                                return upDateBoard
                            }) 
                            newPosKing(casePos, index, setBlackQueenPosition)
                            setBoard((br)=> {
                                const upDateBoard = [...br];
                                upDateBoard[casePos.y][casePos.x]= piece;
                                return upDateBoard
                            }) 
                }
                setCase((cs)=> {
                    const updaECases = [...cs];
                    updaECases.forEach((el)=> {
                        el.forEach((el1)=> {
                            el1.selected = false;
                            el1.pieceName = "";
                            el1.id = "";
                        })
                    })
                    return updaECases
                })
        } 
    }





    const move = (index, color, casePos, pieceName)=> {
                    console.log("from global move " + playerTurn);
                    if(pieceName === "pawn")pawnMethods.clickToMove(index, color, casePos)
                    if(pieceName === "knight")knightMethods.clickToMove(index, color, casePos)
                    if(pieceName === "rook")rookMethods.clickToMove(index, color, casePos)
                    if(pieceName === "bishop")bishopMethods.clickToMove(index, color, casePos)
                    if(pieceName === "king")kingMethods.clickToMove(index, color, casePos)
                    if(pieceName === "queen")queenMethods.clickToMove(index, color, casePos)
                }


//add all selectPath methods in one function named path and handled parameters in pawn component
    const path = (index, pos, color, pieceName, playerTr)=> {
                    if(pieceName === "pawn")pawnMethods.selectPath(index, pos, color, playerTr)
                    if(pieceName === "knight")knightMethods.selectPath(index, pos, color)
                    if(pieceName === "rook")rookMethods.selectPath(index, pos, color, playerTr)
                    if(pieceName === "bishop")bishopMethods.selectPath(index, pos, color)
                    if(pieceName === "king")kingMethods.selectPath(index, pos, color)
                    if(pieceName === "queen")queenMethods.selectPath(index, pos, color)
                }
    
    
    
    
    
    
    
    
    
                //update initial positon
    const newPos = (casePos, index, set)=> {
        set((arr)=> {
            const upDateNewPos =[...arr];
            upDateNewPos[index].x = casePos.x
            upDateNewPos[index].y = casePos.y;
            return upDateNewPos
        })
    }
    const newPosKing = (casePos, index, set)=> {
        set((arr)=> {
            const upDateNewPos =arr;
            upDateNewPos.x = casePos.x
            upDateNewPos.y = casePos.y;
            return upDateNewPos
        })
    }


    const [board, setBoard] = useState([
                                [<Rook position = {whiteRookPosition[0]} data = {rook.whitePlayer[0]} selectPath = {path} />, <Knight position = {whiteKnightPosition[0]} data = {knight.whitePlayer[0]} selectPath = {knightMethods.selectPath}/>, <Bishop position = {whiteBishopPosition[0]} data = {bishop.whitePlayer[0]} selectPath = {bishopMethods.selectPath}/>, <Queen position = {whiteQueenPosition} data = {queen.whitePlayer} selectPath = {queenMethods.selectPath}/>, <King position = {whiteKingPosition} data =  {king.whitePlayer} selectPath = {kingMethods.selectPath}/>, <Bishop position = {whiteBishopPosition[1]} data = {bishop.whitePlayer[1]} selectPath = {bishopMethods.selectPath}/>, <Knight position = {whiteKnightPosition[1]} data = {knight.whitePlayer[1]} selectPath = {knightMethods.selectPath}/>, <Rook position = {whiteRookPosition[1]} data = {rook.whitePlayer[1]} selectPath = {path}/>],
                                [<Pawn  position = {whitePawnPosition[0]}  selectPath = {path} data =  {pawn.whitePlayer[0]} />, <Pawn  position = {whitePawnPosition[1]}  selectPath = {path} data =  {pawn.whitePlayer[1]} />, <Pawn  position = {whitePawnPosition[2]} selectPath = {path} data =  {pawn.whitePlayer[2]}  />, <Pawn  position = {whitePawnPosition[3]} selectPath = {path} data =  {pawn.whitePlayer[3]} />, <Pawn  position = {whitePawnPosition[4]} selectPath = {path} data =  {pawn.whitePlayer[4]} />, <Pawn  position = {whitePawnPosition[5]} selectPath = {path} data =  {pawn.whitePlayer[5]} />, <Pawn  position = {whitePawnPosition[6]} selectPath = {path} data =  {pawn.whitePlayer[6]} />, <Pawn  position = {whitePawnPosition[7]}  selectPath = {path} data =  {pawn.whitePlayer[7]} />],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                ["", "", "", "", "", "", "", ""],
                                [<Pawn  position = {blackPawnPosition[0]} data =  {pawn.blackPlayer[0]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[1]} data =  {pawn.blackPlayer[1]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[2]} data =  {pawn.blackPlayer[2]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[3]} data =  {pawn.blackPlayer[3]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[4]} data =  {pawn.blackPlayer[4]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[5]} data =  {pawn.blackPlayer[5]} selectPath = {path}/>, <Pawn  position = {blackPawnPosition[6]} data =  {pawn.blackPlayer[6]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[7]} data =  {pawn.blackPlayer[7]} selectPath = {path} />],
                                [<Rook  position = {blackRookPosition[0]} data = {rook.blackPlayer[0]} selectPath = {path} />, <Knight position = {blackKnightPosition[0]} data = {knight.blackPlayer[0]} selectPath = {knightMethods.selectPath}/>, <Bishop position = {blackBishopPosition[0]} data = {bishop.blackPlayer[0]} selectPath = {bishopMethods.selectPath}/>, <Queen position = {blackQueenPosition} data = {queen.blackPlayer} selectPath = {queenMethods.selectPath}/>, <King position = {blackKingPosition} data =  {king.blackPlayer} selectPath = {kingMethods.selectPath}/>, <Bishop position = {blackBishopPosition[1]} data = {bishop.blackPlayer[1]} selectPath = {bishopMethods.selectPath}/>, <Knight position = {blackKnightPosition[1]} data = {knight.blackPlayer[1]} selectPath = {knightMethods.selectPath}/>, <Rook position = {blackRookPosition[1]} data = {rook.blackPlayer[1]} selectPath = {path} />]
      ]);



//danger cases bech ne5demhom bel les numero mathalan elli mahich danger bech n7otelha 0 w kol piece
//bech tzid 1 le zone w ki to5rej tna9es 1


      //virtual board 
      const caseState = ()=> {
                let allCasesStates = []
                
                for (let i = 0; i < 8; i++) {
                    let lineCasesStates = []
                    for (let j = 0; j < 8; j++) {
                        if (board[i][j] !== "") {
                            i===1 || i ===0 ? lineCasesStates.push({empty : false, selected : false, index : 0 , pieceName : "", color : "white", eat : "white"}) :
                            i===6 || i===7?lineCasesStates.push({empty : false, selected : false, index : 0 , pieceName : "", color : "black", eat : "black"}): console.log("");
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
                                    cases.push(<div key={`${row}${col}`} onClick = {()=> move(allCases[i][j].index, allCases[i][j].color, {x : j, y : i}, allCases[i][j].pieceName)} className= {`case black-case ${row}${col} ${allCases[i][j].selected}`} >
                                                {board[i][j]}</div>
                            )}
                            else if ((row % 2) !== 0 && (col % 2)===0) {
                                    cases.push(<div key={`${row}${col}`} onClick = {()=> move(allCases[i][j].index, allCases[i][j].color, {x : j, y : i}, allCases[i][j].pieceName)} className= {`case black-case ${row}${col} ${allCases[i][j].selected}`} >
                                            {board[i][j]}</div>
                                                    )
                            }
                            else {
                                cases.push(<div key={`${row}${col}`} onClick = {()=> move(allCases[i][j].index, allCases[i][j].color, {x : j, y : i}, allCases[i][j].pieceName)} className= {`case white-case ${row}${col} ${allCases[i][j].selected}`} >
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
               <PlayTr.Provider value={playerTurn}>
                    {myCases()}
               </PlayTr.Provider>
                    
                </div>
            </div>
        </>
    )
}


export default Table




