/* eslint-disable array-callback-return */
import { dangerBishopCases } from "./dangerBishopCases";
import { dangerKingCases } from "./dangerKingCases";
import { dangerKnightCases } from "./dangerKnightCases";
import { dangerPawnCases } from "./dangerPawnCases";
import { dangerRookCases } from "./dangerRookCases";

export const dangerCasesEngine = (setDangerCases, allPiecesData, arrConnectedWithKing)=> {
      
    setDangerCases(()=> {
          const updateDangerCases = []
          allPiecesData.map((row, rowIndex)=> {
              row.map((cell, colIndex)=> {
                const piece = cell? true : false
                const color = piece? cell.color : false
                if(cell)dangerCasesFunction(updateDangerCases, 
                                          allPiecesData, 
                                          color, 
                                          {row : rowIndex, col : colIndex}, 
                                          cell.pieceName,
                                          arrConnectedWithKing)
              })
          })
          return updateDangerCases
    })
}


function dangerCasesFunction (dangerCases, allPiecesData, color, position, pieceName, arrConnectedWithKing) {
    if(pieceName === "pawn")dangerPawnCases(...arguments)
    if(pieceName === "knight")dangerKnightCases(...arguments)
    if(pieceName === "bishop" || pieceName === "queen")dangerBishopCases(...arguments)
    if(pieceName === "rook" || pieceName === "queen")dangerRookCases(...arguments)
    if(pieceName === "king")dangerKingCases(...arguments)
}
