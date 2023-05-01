/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import './table.css';
import Piece from '../chessPiecesComponents/Piece';

import { piecesData } from '../../../piecesData/piecesData';
import { checkEngineVerification } from '../../../winnerVerification/chekKing/checkKingFunction';
import { Check } from '../../GameSpace';
import { selectPath } from '../../../piecesPath/selectPath';
import { dangerCasesEngine } from '../../../winnerVerification/dangerCases/dangerCasesEngine';

import { PlayTr } from '../../GameSpace';
import { pieceProtectKing } from '../../../winnerVerification/protectKing/protectKingEngine';





function Table (props)  {



    const check = useContext(Check)
    const playerTurn = useContext(PlayTr)


    
    const [allPiecesData, setAllPiecesData] = useState([...piecesData])
    const [selectedPiece, setSelectedPiece] = useState(null);
    const [possibleMoves, setPossibleMoves] = useState([]);
    const [dangerCases, setDangerCases] = useState([]);
    const [pathConnectedWithKing, setPathConnectedWithKing] = useState([]);
    const [inProtect, setInProtect]= useState([])

    let arrConnectedWithKing = []

    const initSelectedCases = ()=> {
      setAllPiecesData(()=> {
          const updateAllPiecesData = [...allPiecesData]
          updateAllPiecesData.map((row)=>{
                row.map((cell)=> {
                  if(cell) cell.isSelected = false
                })
          })
          return updateAllPiecesData
      })
    }






    useEffect(()=> {
        dangerCasesEngine(setDangerCases, allPiecesData, arrConnectedWithKing) 
        setPathConnectedWithKing(()=>{
          let newConnect =  []
          newConnect =  [...arrConnectedWithKing]
          return  newConnect
        })
        pieceProtectKing (allPiecesData, setInProtect)
    }, [playerTurn, allPiecesData])
    
    useEffect(()=> {
      checkEngineVerification(allPiecesData, dangerCases, props.changeCheck)
    }, [dangerCases])


      // function to handle piece click events
      const handlePieceClick = (rowIndex, colIndex, pathCanMove, protect) => {
        initSelectedCases()
        const clickedPiece = allPiecesData[rowIndex][colIndex];
        if (clickedPiece) {

            const color = clickedPiece.color
            const pieceName = clickedPiece.pieceName

          setSelectedPiece({ row: rowIndex, col: colIndex });
          setPossibleMoves(() => {
            const allPossibleMoves = [];
            
            selectPath(allPossibleMoves, 
                       allPiecesData, 
                       color, 
                       pieceName, 
                       { row: rowIndex, col: colIndex },
                       dangerCases,
                       check,
                       pathConnectedWithKing,
                       pathCanMove,
                       protect);

            return allPossibleMoves;
          })
          setAllPiecesData(()=> {
              const updateAllPiecesData = [...allPiecesData]
              updateAllPiecesData[rowIndex][colIndex].isSelected = true
              return updateAllPiecesData
          })
        } else {
            setSelectedPiece(null);
            setPossibleMoves([]);
        }
      };




      const movePieces = (rowIndex, colIndex, isPossibleMove, pieceCanMove) => {
                  if(isPossibleMove) {
                    setAllPiecesData(() => {
                      const updateAllPiecesData = [...allPiecesData];
                      updateAllPiecesData[pieceCanMove.position.y][pieceCanMove.position.x] = null;
                      updateAllPiecesData[rowIndex][colIndex] = pieceCanMove;
                      updateAllPiecesData[rowIndex][colIndex].position = { y: rowIndex, x: colIndex };
                      return updateAllPiecesData;
                    })
                  setSelectedPiece(null);
                  setPossibleMoves([]);
                  props.playerTurn()
                  }
      }
    
      // render each cell in the cells array
      const renderCells = () => {
        return allPiecesData.map((row, rowIndex) =>
          row.map((cell, colIndex) => {

            const isWhite = (rowIndex + colIndex) % 2 === 0;
            const isSelected = selectedPiece && selectedPiece.row === rowIndex && selectedPiece.col === colIndex;
            const isPossibleMove = possibleMoves.some(move => move.row === rowIndex && move.col === colIndex);
            const pieceCanMove = selectedPiece? allPiecesData[selectedPiece.row][selectedPiece.col] : null
            const piece = cell ? (
                                    <Piece
                                      key={`${rowIndex}-${colIndex}`}
                                      data = {piecesData[rowIndex][colIndex]}
                                      isSelected={isSelected}
                                      selectPath = {handlePieceClick}
                                      inProtect = {inProtect}
                                      allPiecesData = { allPiecesData }
                                    />
                                  ) : null;



            return (
              <div key={`${rowIndex}-${colIndex}`} 
                    onClick={()=> movePieces(rowIndex, colIndex, isPossibleMove, pieceCanMove)}
                    className={`${rowIndex}-${colIndex} 
                                ${isWhite ? 'white-case' : 'black-case'} 
                                ${isSelected ? 'selected' : ''} 
                                ${isPossibleMove ? 'tomove' : ''}`}>
                {piece}
              </div>
            );
          })
        );
      };
    
      return (
        <div className="container-tab" >
            <div className='table'>
                {renderCells()}
            </div>
        </div>
      );
    
}

export default Table




