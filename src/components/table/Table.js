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
import { KnightMethods, MovePiece, RookMethods, BishopMethods, kingMethods, KingMethods } from '../../piecesMove/piecesMove';



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
                                                
                                                
                                                if(pawnPos.y === 1 && updaECases[pawnPos.y  + 2][pawnPos.x].empty
                                                    &&updaECases[pawnPos.y + 1][pawnPos.x].empty){
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

                                        if(pawnPos.y === 6 && updaECases[pawnPos.y  - 2][pawnPos.x].empty 
                                            &&updaECases[pawnPos.y  - 1][pawnPos.x].empty){
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
    //update initial positon for king or queen
    const newPosKing = (casePos, index, set)=> {
        set((arr)=> {
            const upDateNewPos =arr;
            upDateNewPos.x = casePos.x
            upDateNewPos.y = casePos.y;
            return upDateNewPos
        })
    }



                //Real board
                const [board, setBoard] = useState([
                    [<Rook position = {whiteRookPosition[0]} data = {rook.whitePlayer[0]} selectPath = {path} />, <Knight position = {whiteKnightPosition[0]} data = {knight.whitePlayer[0]} selectPath = {path}/>, <Bishop position = {whiteBishopPosition[0]} data = {bishop.whitePlayer[0]} selectPath = {path}/>, <Queen position = {whiteQueenPosition} data = {queen.whitePlayer} selectPath = {queenMethods.selectPath}/>, <King position = {whiteKingPosition} data =  {king.whitePlayer} selectPath = {path}/>, <Bishop position = {whiteBishopPosition[1]} data = {bishop.whitePlayer[1]} selectPath = {path}/>, <Knight position = {whiteKnightPosition[1]} data = {knight.whitePlayer[1]} selectPath = {path}/>, <Rook position = {whiteRookPosition[1]} data = {rook.whitePlayer[1]} selectPath = {path}/>],
                    [<Pawn  position = {whitePawnPosition[0]}  selectPath = {path} data =  {pawn.whitePlayer[0]} />, <Pawn  position = {whitePawnPosition[1]}  selectPath = {path} data =  {pawn.whitePlayer[1]} />, <Pawn  position = {whitePawnPosition[2]} selectPath = {path} data =  {pawn.whitePlayer[2]}  />, <Pawn  position = {whitePawnPosition[3]} selectPath = {path} data =  {pawn.whitePlayer[3]} />, <Pawn  position = {whitePawnPosition[4]} selectPath = {path} data =  {pawn.whitePlayer[4]} />, <Pawn  position = {whitePawnPosition[5]} selectPath = {path} data =  {pawn.whitePlayer[5]} />, <Pawn  position = {whitePawnPosition[6]} selectPath = {path} data =  {pawn.whitePlayer[6]} />, <Pawn  position = {whitePawnPosition[7]}  selectPath = {path} data =  {pawn.whitePlayer[7]} />],
                    ["", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", ""],
                    [<Pawn  position = {blackPawnPosition[0]} data =  {pawn.blackPlayer[0]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[1]} data =  {pawn.blackPlayer[1]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[2]} data =  {pawn.blackPlayer[2]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[3]} data =  {pawn.blackPlayer[3]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[4]} data =  {pawn.blackPlayer[4]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[5]} data =  {pawn.blackPlayer[5]} selectPath = {path}/>, <Pawn  position = {blackPawnPosition[6]} data =  {pawn.blackPlayer[6]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[7]} data =  {pawn.blackPlayer[7]} selectPath = {path} />],
                    [<Rook  position = {blackRookPosition[0]} data = {rook.blackPlayer[0]} selectPath = {path} />, <Knight position = {blackKnightPosition[0]} data = {knight.blackPlayer[0]} selectPath = {path}/>, <Bishop position = {blackBishopPosition[0]} data = {bishop.blackPlayer[0]} selectPath = {path}/>, <Queen position = {blackQueenPosition} data = {queen.blackPlayer} selectPath = {queenMethods.selectPath}/>, <King position = {blackKingPosition} data =  {king.blackPlayer} selectPath = {path}/>, <Bishop position = {blackBishopPosition[1]} data = {bishop.blackPlayer[1]} selectPath = {path}/>, <Knight position = {blackKnightPosition[1]} data = {knight.blackPlayer[1]} selectPath = {path}/>, <Rook position = {blackRookPosition[1]} data = {rook.blackPlayer[1]} selectPath = {path} />]
                ]);

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
      
      
      
        

      let newRook = new RookMethods("", "", "", "", allCases, setCase, board, setBoard, newPos, 
                                    whiteRookPosition, setWhiteRookPosition,blackRookPosition,
                                    setblackRookPosition, setPlayerTurn)

      let newKnight = new KnightMethods("", "", "", "", allCases, setCase, board, setBoard, newPos, 
                                    whiteKnightPosition, setWhiteKnightPosition,blackKnightPosition,
                                    setBlackKnightPosition, setPlayerTurn)

       let newBishop = new BishopMethods("", "", "", "", allCases, setCase, board, setBoard, newPos, 
                                    whiteBishopPosition, setWhiteBishopPosition,blackBishopPosition,
                                    setBlackBishopPosition, setPlayerTurn)

        let newKIng = new KingMethods("", "", "", "", allCases, setCase, board, setBoard, newPosKing, 
                                    whiteKingPosition, setWhiteKingPosition,blackKingPosition,
                                    setBlackKingPosition, setPlayerTurn)



      const move = (index, color, casePos, pieceName)=> {
            if(pieceName === "pawn"){
                const movePawn = new MovePiece(index, 
                                                    color, 
                                                    casePos, 
                                                    pieceName, 
                                                    allCases, 
                                                    setCase, 
                                                    board, 
                                                    setBoard, 
                                                    newPos, 
                                                    whitePawnPosition, 
                                                    setwhitePawnPosition, 
                                                    blackPawnPosition, 
                                                    setblackPawnPosition, 
                                                    setPlayerTurn);
                movePawn.clickToMove()
            }

            if(pieceName === "knight"){
                newKnight.index = index
                newKnight.color = color
                newKnight.casePos = casePos
                newKnight.pieceName = pieceName
                newKnight.clickToMove()
                }
            if(pieceName === "rook"){
                newRook.index = index
                newRook.color = color
                newRook.casePos = casePos
                newRook.pieceName = pieceName
                newRook.clickToMove()
            }
            if(pieceName === "bishop"){
                newBishop.index = index
                newBishop.color = color
                newBishop.casePos = casePos
                newBishop.pieceName = pieceName
                newBishop.clickToMove()
            }
            if(pieceName === "king"){
                newKIng.index = index
                newKIng.color = color
                newKIng.casePos = casePos
                newKIng.pieceName = pieceName
                newKIng.clickToMove()
            }
            if(pieceName === "queen"){
                const moveQueen = new MovePiece(index, 
                                                    color, 
                                                    casePos, 
                                                    pieceName, 
                                                    allCases, 
                                                    setCase, 
                                                    board, 
                                                    setBoard, 
                                                    newPosKing, 
                                                    whiteQueenPosition, 
                                                    setWhiteQueenPosition, 
                                                    blackQueenPosition, 
                                                    setBlackQueenPosition, 
                                                    setPlayerTurn);
                moveQueen.clickToMove()
            }
    
        }






    //add all selectPath methods in one function named path
    function path  (index, pos, color, pieceName, playerTr) {
            if(pieceName === "pawn")pawnMethods.selectPath(index, pos, color, playerTr)


            
            if(pieceName === "knight")newKnight.selectPath(index, pos, color, playerTr)
            if(pieceName === "rook")newRook.selectPath(index, pos, color, playerTr)
            if(pieceName === "bishop")newBishop.selectPath(index, pos, color, playerTr)
            if(pieceName === "king")newKIng.selectPath(index, pos, color, playerTr)



            if(pieceName === "queen")queenMethods.selectPath(index, pos, color, playerTr)
        }
        
        
        
        
        
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




