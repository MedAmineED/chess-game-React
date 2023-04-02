/* eslint-disable react-hooks/exhaustive-deps */
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


import { pawn, rook, knight, bishop, king, queen } from '../../../piecesData/piecesData';
import { KnightMethods, RookMethods, BishopMethods, KingMethods, QueenMethods, PawnMethods } from '../../../piecesMove/piecesMove';
import { PlayTr, Start } from '../../GameSpace';
import { dangerRookZone } from '../../../winnerVerification/dangerCases';





function Table (props)  {


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



    const playerTurn = useContext(PlayTr);



    
    
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
                    [<Rook position = {whiteRookPosition[0]} data = {rook.whitePlayer[0]} selectPath = {path} />, <Knight position = {whiteKnightPosition[0]} data = {knight.whitePlayer[0]} selectPath = {path}/>, <Bishop position = {whiteBishopPosition[0]} data = {bishop.whitePlayer[0]} selectPath = {path}/>, <Queen position = {whiteQueenPosition} data = {queen.whitePlayer} selectPath = {path}/>, <King position = {whiteKingPosition} data =  {king.whitePlayer} selectPath = {path}/>, <Bishop position = {whiteBishopPosition[1]} data = {bishop.whitePlayer[1]} selectPath = {path}/>, <Knight position = {whiteKnightPosition[1]} data = {knight.whitePlayer[1]} selectPath = {path}/>, <Rook position = {whiteRookPosition[1]} data = {rook.whitePlayer[1]} selectPath = {path}/>],
                    [<Pawn  position = {whitePawnPosition[0]}  selectPath = {path} data =  {pawn.whitePlayer[0]} />, <Pawn  position = {whitePawnPosition[1]}  selectPath = {path} data =  {pawn.whitePlayer[1]} />, <Pawn  position = {whitePawnPosition[2]} selectPath = {path} data =  {pawn.whitePlayer[2]}  />, <Pawn  position = {whitePawnPosition[3]} selectPath = {path} data =  {pawn.whitePlayer[3]} />, <Pawn  position = {whitePawnPosition[4]} selectPath = {path} data =  {pawn.whitePlayer[4]} />, <Pawn  position = {whitePawnPosition[5]} selectPath = {path} data =  {pawn.whitePlayer[5]} />, <Pawn  position = {whitePawnPosition[6]} selectPath = {path} data =  {pawn.whitePlayer[6]} />, <Pawn  position = {whitePawnPosition[7]}  selectPath = {path} data =  {pawn.whitePlayer[7]} />],
                    ["", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", ""],
                    [<Pawn  position = {blackPawnPosition[0]} data =  {pawn.blackPlayer[0]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[1]} data =  {pawn.blackPlayer[1]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[2]} data =  {pawn.blackPlayer[2]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[3]} data =  {pawn.blackPlayer[3]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[4]} data =  {pawn.blackPlayer[4]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[5]} data =  {pawn.blackPlayer[5]} selectPath = {path}/>, <Pawn  position = {blackPawnPosition[6]} data =  {pawn.blackPlayer[6]} selectPath = {path} />, <Pawn  position = {blackPawnPosition[7]} data =  {pawn.blackPlayer[7]} selectPath = {path} />],
                    [<Rook  position = {blackRookPosition[0]} data = {rook.blackPlayer[0]} selectPath = {path} />, <Knight position = {blackKnightPosition[0]} data = {knight.blackPlayer[0]} selectPath = {path}/>, <Bishop position = {blackBishopPosition[0]} data = {bishop.blackPlayer[0]} selectPath = {path}/>, <Queen position = {blackQueenPosition} data = {queen.blackPlayer} selectPath = {path}/>, <King position = {blackKingPosition} data =  {king.blackPlayer} selectPath = {path}/>, <Bishop position = {blackBishopPosition[1]} data = {bishop.blackPlayer[1]} selectPath = {path}/>, <Knight position = {blackKnightPosition[1]} data = {knight.blackPlayer[1]} selectPath = {path}/>, <Rook position = {blackRookPosition[1]} data = {rook.blackPlayer[1]} selectPath = {path} />]
                ]);

      //virtual board 
      const caseState = ()=> {
                let allCasesStates = []
                
                for (let i = 0; i < 8; i++) {
                    let lineCasesStates = []
                    for (let j = 0; j < 8; j++) {
                        if (board[i][j] !== "") {
                            if(i===1 || i ===0) lineCasesStates.push({empty : false, 
                                                                      selected : false, 
                                                                      index : 0 , 
                                                                      pieceName : "", 
                                                                      color : "white", 
                                                                      eat : "white",
                                                                      danger: {
                                                                                whiteDanger : 0,
                                                                                blackDanger : 0
                                                                                }}) 

                            if(i===6 || i===7)lineCasesStates.push({empty : false, 
                                                                    selected : false, 
                                                                    index : 0 , 
                                                                    pieceName : "", 
                                                                    color : "black", 
                                                                    eat : "black",
                                                                    danger: {
                                                                              whiteDanger : 0,
                                                                              blackDanger : 0
                                                                              }});
                        }else {
                            lineCasesStates.push({empty : true, 
                                                  selected : false, 
                                                  index : 0 , 
                                                  pieceName : "", 
                                                  color : "no color",
                                                  danger: {
                                                            whiteDanger : 0,
                                                            blackDanger : 0
                                                            }})
                        }

                    }
                    allCasesStates.push(lineCasesStates)
                }
                return allCasesStates
      }
      const [allCases, setCase] = useState(caseState());
      
      

      
        

      let newPawn = new PawnMethods("", "", "", "", allCases, setCase, board, setBoard, newPos, 
                                    whitePawnPosition, setwhitePawnPosition,blackPawnPosition,
                                    setblackPawnPosition, props.playerTurn)
      
      let newRook = new RookMethods("", "", "", "", allCases, setCase, board, setBoard, newPos, 
                                    whiteRookPosition, setWhiteRookPosition,blackRookPosition,
                                    setblackRookPosition, props.playerTurn)

      let newKnight = new KnightMethods("", "", "", "", allCases, setCase, board, setBoard, newPos, 
                                    whiteKnightPosition, setWhiteKnightPosition,blackKnightPosition,
                                    setBlackKnightPosition, props.playerTurn)

       let newBishop = new BishopMethods("", "", "", "", allCases, setCase, board, setBoard, newPos, 
                                    whiteBishopPosition, setWhiteBishopPosition,blackBishopPosition,
                                    setBlackBishopPosition, props.playerTurn)

        let newKIng = new KingMethods("", "", "", "", allCases, setCase, board, setBoard, newPosKing, 
                                    whiteKingPosition, setWhiteKingPosition,blackKingPosition,
                                    setBlackKingPosition, props.playerTurn)
                                    
        let newQueen = new QueenMethods("", "", "", "", allCases, setCase, board, setBoard, newPosKing, 
                                    whiteQueenPosition, setWhiteQueenPosition,blackQueenPosition,
                                    setBlackQueenPosition, props.playerTurn)



      function move (index, color, casePos, pieceName) {

            if(pieceName === "pawn"){
                newPawn.index = index
                newPawn.color = color
                newPawn.casePos = casePos
                newPawn.pieceName = pieceName
                newPawn.clickToMove()
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
                newQueen.index = index
                newQueen.color = color
                newQueen.casePos = casePos
                newQueen.pieceName = pieceName
                newQueen.clickToMove()
            }
    
        }






    //add all selectPath methods in one function named path
    function path  (index, pos, color, pieceName, playerTr, canPlay) {
        if(canPlay){
                if(pieceName === "pawn")newPawn.selectPath(index, pos, color, playerTr, pieceName)
                if(pieceName === "knight")newKnight.selectPath(index, pos, color, playerTr, pieceName)
                if(pieceName === "rook")newRook.selectPath(index, pos, color, playerTr, pieceName)
                if(pieceName === "bishop")newBishop.selectPath(index, pos, color, playerTr, pieceName)
                if(pieceName === "king")newKIng.selectPath(index, pos, color, playerTr, pieceName)
                if(pieceName === "queen")newQueen.selectPath(index, pos, color, playerTr, pieceName)
            }
        }



        useEffect(()=> {
            setCase(()=> {
                const updateCases = [...allCases]
                updateCases.map((cs)=> {
                    cs.map((cs1)=> {
                        cs1.danger.whiteDanger = 0
                        cs1.danger.blackDanger = 0
                    })
                })
            })
            for(let y = 0; y < 8; y++) {
                for(let x = 0; x < 8; x++) {
                    if(board[y][x].props && board[y][x].props.data.name === "rook"){
                        console.log(board[y][x]);
                        setCase(()=> {
                            const updateCases = [...allCases];
                            console.log(updateCases);
                            dangerRookZone(y, x, board, allCases, updateCases)
                            return updateCases;
                        })
                    }
                }
            }
        }, [board])
        
        
        
        
        
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
            <div className='container-tab'>
              <div className='table'>
                    {myCases()}
                    
                </div>
            </div>
        </>
    )
}


export default Table




