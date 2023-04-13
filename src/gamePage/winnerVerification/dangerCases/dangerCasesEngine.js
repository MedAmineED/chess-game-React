import { dangerPawnCases } from "./dangerPawnCases";

export const dangerCasesEngine = (setDangerCases, allPiecesData)=> {
      
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
                                          cell.pieceName)
              })
          })
          return updateDangerCases
    })
}


function dangerCasesFunction (dangerCases, allPiecesData, color, position, pieceName) {
    if(pieceName === "pawn")dangerPawnCases(...arguments)
}
