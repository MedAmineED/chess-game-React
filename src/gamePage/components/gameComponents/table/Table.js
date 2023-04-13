/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */



import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import './table.css'
import Piece from '../chessPiecesComponents/Piece'


import { piecesData } from '../../../piecesData/piecesData';

import { dangerRookZone } from '../../../winnerVerification/dangerCases/dangerRookCases';
import { dangerBishopZone } from '../../../winnerVerification/dangerCases/dangerBishopCases';
import { dangerQueenZone } from '../../../winnerVerification/dangerCases/dangerQueenCases';
import { dangerKnightZone } from '../../../winnerVerification/dangerCases/dangerKnightCases';
import { dangerPawnZone } from '../../../winnerVerification/dangerCases/dangerPawnCases';
import { dangerKingZone } from '../../../winnerVerification/dangerCases/dangerKingCases';
import { checkEngineVerification } from '../../../winnerVerification/chekKing/checkKingFunction';
import { Check } from '../../GameSpace';
import { selectPath } from '../../../piecesMove/selectPathFunctions/selectPath';





function Table (props)  {



    const check = useContext(Check)


    
    const [isBlocket, setIsBlocket] = useState(false)
    const [allPiecesData, setAllPiecesData] = useState([...piecesData])
    const [selectedPiece, setSelectedPiece] = useState(null);
    const [possibleMoves, setPossibleMoves] = useState([]);


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

    }, [])
    
    
      // function to handle piece click events
      const handlePieceClick = (rowIndex, colIndex) => {
        initSelectedCases()
        const clickedPiece = allPiecesData[rowIndex][colIndex];
        if (clickedPiece) {

            const color = clickedPiece.color
            const pieceName = clickedPiece.pieceName

          setSelectedPiece(() => { return { row: rowIndex, col: colIndex }; });
          setPossibleMoves(() => {
            const allPossibleMoves = [];
            selectPath(allPossibleMoves, allPiecesData, color, pieceName, { row: rowIndex, col: colIndex });
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




