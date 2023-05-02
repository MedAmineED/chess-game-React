export function selectBishopPath(params) {
  selectDiagonalPath(params, 1)
  selectDiagonalPath(params, 2)
  selectDiagonalPath(params, 3)
  selectDiagonalPath(params, 4)
}
function selectDiagonalPath (params, path) {
    const {allPossibleMoves, 
            allPiecesData, 
            color, 
            position, 
            check, 
            connectedWithKing,  
            pathCanMove,
            protect } = params

    const { row, col } = position;

    let possibleSelect = true;

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
                               && newCol < 8? 
                               true : false;

            const possibleToEat = cellExist && allPiecesData[newRow][newCol]? 
                                    allPiecesData[newRow][newCol].color !== color 
                                    : false

            if(!check && !protect){
                if(cellExist && allPiecesData[newRow][newCol] === null && possibleSelect) {
                    allPossibleMoves.push({ row : newRow, col : newCol })
                }
                if(cellExist && possibleToEat && possibleSelect){
                        allPossibleMoves.push({ row : newRow, col : newCol })
                        possibleSelect = false
                }
                if( cellExist && allPiecesData[newRow][newCol] !== null && !possibleToEat){
                        possibleSelect = false
                }
            }
            if(check) {
                const stopAttack = connectedWithKing.some(stop => stop.row === newRow && stop.col === newCol)
                if(cellExist && allPiecesData[newRow][newCol] === null && possibleSelect && stopAttack) {
                    allPossibleMoves.push({ row : newRow, col : newCol })
                }
                if(cellExist && possibleToEat && possibleSelect && stopAttack){
                        allPossibleMoves.push({ row : newRow, col : newCol })
                        possibleSelect = false
                }
                if( cellExist && allPiecesData[newRow][newCol] !== null && !possibleToEat){
                        possibleSelect = false
                }
            }
            if(!check && protect){
                const isInProtectMode = pathCanMove.some((select)=> select.row === newRow && select.col === newCol)
                if(cellExist && allPiecesData[newRow][newCol] === null && possibleSelect && isInProtectMode) {
                    
                    allPossibleMoves.push({ row : newRow, col : newCol })
                }
                if(cellExist && possibleToEat && possibleSelect && isInProtectMode){
                        allPossibleMoves.push({ row : newRow, col : newCol })
                        possibleSelect = false
                }
                if( cellExist && allPiecesData[newRow][newCol] !== null && !possibleToEat && isInProtectMode){
                        possibleSelect = false
                }
            }

        }

}