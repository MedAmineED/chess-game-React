import { checkKing } from "../chekKing/checkKingFunction";

export function dangerBishopCases(dangerCases, allPiecesData, color, position) {
    diagonalPath(...arguments, 1)
    diagonalPath(...arguments, 2)
    diagonalPath(...arguments, 3)
    diagonalPath(...arguments, 4)
  }
  
  
  
  function diagonalPath (dangerCases, allPiecesData, color, position, path) {
      const { row, col } = position;
  
      let getCell = true;
      const white = color === "white"? true : false
  
          for(let step = 1; step < 8; step ++) {

              const seLectCells = path === 1? {
                                              newRow : row + step,
                                              newCol : col + step
                                              }
                                  : path === 2? {
                                              newRow : row + step,
                                              newCol : col - step
                                              }
                                  : path === 3? {
                                              newRow : row - step,
                                              newCol : col + step
                                              }
                                  : path === 4? {
                                              newRow : row - step,
                                              newCol : col - step
                                              } 
                                  : false
  
  
              const { newRow, newCol } = seLectCells
  
              const cellExist =  newRow >= 0 
                                 && newRow < 8 
                                 && newCol >= 0 
                                 && newCol < 8
  
              const hasFriendPiece = cellExist && allPiecesData[newRow][newCol]? 
                                      allPiecesData[newRow][newCol].color === color 
                                      : false
              const empty = cellExist && allPiecesData[newRow][newCol] === null
  
  
  
              if(empty && getCell) {
                      console.log("pushed empty");
                      dangerCases.push({color:white? "white" : "black", position :{ row : newRow, col : newCol }})
              }
              if(hasFriendPiece && getCell){
                console.log("pushed has frn p");
                      dangerCases.push({color:white? "white" : "black", position :{ row : newRow, col : newCol }})
                      getCell = false
              }
              if(!empty && !hasFriendPiece){
                console.log("not");
                      getCell = false
              }
          }
  
  }