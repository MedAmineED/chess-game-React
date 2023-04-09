/* eslint-disable react-hooks/exhaustive-deps */



import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import './table.css'
import Piece from '../chessPiecesComponents/Piece'


import { pawn, rook, knight, bishop, king, queen } from '../../../piecesData/piecesData';
import { KnightMethods, RookMethods, BishopMethods, KingMethods, QueenMethods, PawnMethods } from '../../../piecesMove/piecesMove';
import { dangerRookZone } from '../../../winnerVerification/dangerCases/dangerRookCases';
import { dangerBishopZone } from '../../../winnerVerification/dangerCases/dangerBishopCases';
import { dangerQueenZone } from '../../../winnerVerification/dangerCases/dangerQueenCases';
import { dangerKnightZone } from '../../../winnerVerification/dangerCases/dangerKnightCases';
import { dangerPawnZone } from '../../../winnerVerification/dangerCases/dangerPawnCases';
import { dangerKingZone } from '../../../winnerVerification/dangerCases/dangerKingCases';
import { checkEngineVerification } from '../../../winnerVerification/chekKing/checkKingFunction';
import { Check } from '../../GameSpace';





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

    const check = useContext(Check)

    const [isBlocket, setIsBlocket] = useState(false)
    
    
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


    //new real board
    // let realBoardArr = []
    // function realBoadr () {
    //     for (let y = 0; y < 8; y++) {
    //         let rowArr = []
    //         for(let x = 0; x < 8; x++){
    //             switch (true) {
    //                 case ((y === 0 || y === 7) && (x === 0 || x === 7) ) :
    //                     x === 0 && y === 0? rowArr.push(<Piece position = {whiteRookPosition[0]} 
    //                                                           data = {rook.whitePlayer[0]} 
    //                                                           selectPath = {path} />)
    //                     : x === 7 && y === 0? rowArr.push(<Piece position = {whiteRookPosition[1]} 
    //                                                             data = {rook.whitePlayer[1]} 
    //                                                             selectPath = {path} />)
    //                     : x === 0 && y === 7? rowArr.push(<Piece position = {blackRookPosition[0]} 
    //                                                             data = {rook.whitePlayer[0]} 
    //                                                             selectPath = {path} />)
    //                     : x === 0 && y === 7? rowArr.push(<Piece position = {blackRookPosition[0]} 
    //                                                             data = {rook.blackPlayer[0]} 
    //                                                             selectPath = {path} />)
    //                     : rowArr.push(<Piece position = {blackRookPosition[1]} 
    //                                                             data = {rook.blackPlayer[1]} 
    //                                                             selectPath = {path} />)
                        
    //                     break;
    //                 case y === 0 && (x === 1 || x === 6) :
    //                     x === 1? rowArr.push(<Piece position = {whiteRookPosition[0]} data = {rook.whitePlayer[0]} selectPath = {path} />)
    //                             : rowArr.push(<Piece position = {whiteRookPosition[0]} data = {rook.whitePlayer[1]} selectPath = {path} />)
    //                     break;
                        
                
    //                 default:
    //                     rowArr.push("")
    //                     break;
    //             }
    //         }
    //         realBoardArr.push(rowArr)
    //     }
    // }
    
    
    //Real board
    const [board, setBoard] = useState([
                    [<Piece position = {whiteRookPosition[0]} data = {rook.whitePlayer[0]} selectPath = {path} />, <Piece position = {whiteKnightPosition[0]} data = {knight.whitePlayer[0]} selectPath = {path}/>, <Piece position = {whiteBishopPosition[0]} data = {bishop.whitePlayer[0]} selectPath = {path}/>, <Piece position = {whiteQueenPosition} data = {queen.whitePlayer} selectPath = {path}/>, <Piece position = {whiteKingPosition} data =  {king.whitePlayer} selectPath = {path}/>, <Piece position = {whiteBishopPosition[1]} data = {bishop.whitePlayer[1]} selectPath = {path}/>, <Piece position = {whiteKnightPosition[1]} data = {knight.whitePlayer[1]} selectPath = {path}/>, <Piece position = {whiteRookPosition[1]} data = {rook.whitePlayer[1]} selectPath = {path}/>],
                    [<Piece  position = {whitePawnPosition[0]}  selectPath = {path} data =  {pawn.whitePlayer[0]} />, <Piece  position = {whitePawnPosition[1]}  selectPath = {path} data =  {pawn.whitePlayer[1]} />, <Piece  position = {whitePawnPosition[2]} selectPath = {path} data =  {pawn.whitePlayer[2]}  />, <Piece  position = {whitePawnPosition[3]} selectPath = {path} data =  {pawn.whitePlayer[3]} />, <Piece  position = {whitePawnPosition[4]} selectPath = {path} data =  {pawn.whitePlayer[4]} />, <Piece  position = {whitePawnPosition[5]} selectPath = {path} data =  {pawn.whitePlayer[5]} />, <Piece  position = {whitePawnPosition[6]} selectPath = {path} data =  {pawn.whitePlayer[6]} />, <Piece  position = {whitePawnPosition[7]}  selectPath = {path} data =  {pawn.whitePlayer[7]} />],
                    ["", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", ""],
                    [<Piece  position = {blackPawnPosition[0]} data =  {pawn.blackPlayer[0]} selectPath = {path} />, <Piece  position = {blackPawnPosition[1]} data =  {pawn.blackPlayer[1]} selectPath = {path} />, <Piece  position = {blackPawnPosition[2]} data =  {pawn.blackPlayer[2]} selectPath = {path} />, <Piece  position = {blackPawnPosition[3]} data =  {pawn.blackPlayer[3]} selectPath = {path} />, <Piece  position = {blackPawnPosition[4]} data =  {pawn.blackPlayer[4]} selectPath = {path} />, <Piece  position = {blackPawnPosition[5]} data =  {pawn.blackPlayer[5]} selectPath = {path}/>, <Piece  position = {blackPawnPosition[6]} data =  {pawn.blackPlayer[6]} selectPath = {path} />, <Piece  position = {blackPawnPosition[7]} data =  {pawn.blackPlayer[7]} selectPath = {path} />],
                    [<Piece  position = {blackRookPosition[0]} data = {rook.blackPlayer[0]} selectPath = {path} />, <Piece position = {blackKnightPosition[0]} data = {knight.blackPlayer[0]} selectPath = {path}/>, <Piece position = {blackBishopPosition[0]} data = {bishop.blackPlayer[0]} selectPath = {path}/>, <Piece position = {blackQueenPosition} data = {queen.blackPlayer} selectPath = {path}/>, <Piece position = {blackKingPosition} data =  {king.blackPlayer} selectPath = {path}/>, <Piece position = {blackBishopPosition[1]} data = {bishop.blackPlayer[1]} selectPath = {path}/>, <Piece position = {blackKnightPosition[1]} data = {knight.blackPlayer[1]} selectPath = {path}/>, <Piece position = {blackRookPosition[1]} data = {rook.blackPlayer[1]} selectPath = {path} />]
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
                                                                                },
                                                                       checked : false,
                                                                        protectKing : false}) 

                            if(i===6 || i===7)lineCasesStates.push({empty : false, 
                                                                    selected : false, 
                                                                    index : 0 , 
                                                                    pieceName : "", 
                                                                    color : "black", 
                                                                    eat : "black",
                                                                    danger: {
                                                                              whiteDanger : 0,
                                                                              blackDanger : 0
                                                                              },
                                                                    checked : false,
                                                                    protectKing : false});
                        }else {
                            lineCasesStates.push({empty : true, 
                                                  selected : false, 
                                                  index : 0 , 
                                                  pieceName : "", 
                                                  color : "no color",
                                                  danger: {
                                                            whiteDanger : 0,
                                                            blackDanger : 0
                                                            },
                                                    checked : false,
                                                    protectKing : false})
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
    function path  (index, pos, color, pieceName, playerTr, canPlay, check) {
        if(canPlay){
                if(pieceName === "pawn")newPawn.selectPath(index, pos, color, check)
                if(pieceName === "knight")newKnight.selectPath(index, pos, color, playerTr, check, board)
                if(pieceName === "rook")newRook.selectPath(index, pos, color, playerTr, pieceName, check)
                if(pieceName === "bishop")newBishop.selectPath(index, pos, color, playerTr, pieceName, check)
                if(pieceName === "king")newKIng.selectPath(index, pos, color, playerTr, pieceName)
                if(pieceName === "queen")newQueen.selectPath(index, pos, color, playerTr, pieceName, check)
            }
        }


      
        
        const dangerCases = async (dangerFunction, nameOfPiece)=> {
            for(let y = 0; y < 8; y++) {
                for(let x = 0; x < 8; x++) {
                    if(board[y][x].props && board[y][x].props.data.name === nameOfPiece){
                        await setCase(()=> {
                            const updateCases = [...allCases];
                             dangerFunction(y, x, board, allCases, updateCases, props.check)
                            return updateCases;
                        })
                    }
                }
            }
        }





        

        useEffect(()=> {
            setIsBlocket(check)
                    setCase(()=> {
                        const updateCases = [...allCases]
                        updateCases.map((cs)=> {
                            cs.map((cs1)=> {
                                cs1.danger.whiteDanger = 0
                                cs1.danger.blackDanger = 0
                                cs1.checked = false
                                cs1.protectKing = false
                            })
                        })
                        return updateCases
                    })
                    dangerCases(dangerRookZone, "rook")
                    dangerCases(dangerBishopZone, "bishop")
                    dangerCases(dangerQueenZone, "queen")
                    dangerCases(dangerKnightZone, "knight")
                    dangerCases(dangerPawnZone, "pawn")
                    dangerCases(dangerKingZone, "king")

                    

                    const cheCkEngine = setInterval(()=>checkEngineVerification(board, allCases, props),200)

                    return ()=> clearInterval(cheCkEngine)
        }, [board, isBlocket])
        
        
        
        
        
        //show real board
       const myCases = ()=> {
                let cases = [];
                //--set cases and color cases--
                for (let i = 0; i < 8; i++) {                              
                        for (let j = 0; j < 8; j++) {
                            const row = i + 1;
                            const col = 8 - j ;
                            if ((row % 2) === 0 && (col % 2)!==0) {
                                    cases.push(<div     key={`${row}${col}`} 
                                                        onClick = {()=> move(allCases[i][j].index, 
                                                                            allCases[i][j].color, 
                                                                            {x : j, y : i}, 
                                                                            allCases[i][j].pieceName)} 
                                                        className= {`case black-case ${row}${col} ${allCases[i][j].selected}`} >
                                                    {board[i][j]}
                                                </div>
                                                )}
                            else if ((row % 2) !== 0 && (col % 2)===0) {
                                    cases.push(<div      key={`${row}${col}`} 
                                                         onClick = {()=> move(allCases[i][j].index, 
                                                                              allCases[i][j].color, {x : j, y : i}, 
                                                                              allCases[i][j].pieceName)} 
                                                          className= {`case black-case ${row}${col} ${allCases[i][j].selected}`} >
                                                    {board[i][j]}
                                               </div>
                                                    )
                            }
                            else {
                                cases.push(<div          key={`${row}${col}`} 
                                                         onClick = {()=> move(allCases[i][j].index, 
                                                                              allCases[i][j].color, {x : j, y : i}, 
                                                                              allCases[i][j].pieceName)} 
                                                          className= {`case white-case ${row}${col} ${allCases[i][j].selected}`} >
                                                {board[i][j]}
                                            </div>)
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




