export function dangerRookCases (dangerCases, allPiecesData, color, position, pieceName, connectedWithKing) {
    horizontalAndVerticalPath(...arguments, 1)
    horizontalAndVerticalPath(...arguments, 2)
    horizontalAndVerticalPath(...arguments, 3)
    horizontalAndVerticalPath(...arguments, 4)
}

function horizontalAndVerticalPath (dangerCases, allPiecesData, color, position, pieceName, connectedWithKing, path, getCell = true) {
    
    
    const { row, col } = position;

    const white = color === "white"? true : false

        for(let step = 1; step < 8; step ++) {
            const seLectCells = path === 1? {
                                            newRow : row + step,
                                            newCol : col
                                            }
                                : path === 2? {
                                            newRow : row - step,
                                            newCol : col
                                            }
                                : path === 3? {
                                            newRow : row,
                                            newCol : col + step
                                            }
                                : path === 4? {
                                            newRow : row,
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
            const isEnemyKing = cellExist 
                                && allPiecesData[newRow][newCol] 
                                && allPiecesData[newRow][newCol].pieceName === "king"
                                && allPiecesData[newRow][newCol].color !== color
                                
            const empty = cellExist && allPiecesData[newRow][newCol] === null



            if((empty || isEnemyKing) && getCell) {
                dangerCases.push({
                                    color:white? "white" : "black", 
                                    position : {
                                                 row : newRow,
                                                 col : newCol 
                                                }
                                            })
                if(isEnemyKing !== null){
                    if(path === 1){
                        for(let i = row; i < newRow; i++ ){
                            connectedWithKing.push({ row : i, col : newCol })
                        }
                    }
                    if(path === 2){
                        for(let i = row; i > newRow; i-- ){
                            connectedWithKing.push({ row : i, col : newCol })
                        }
                    }
                    if(path === 3){
                        for(let i = col; i < newCol; i++ ){
                            connectedWithKing.push({ row : newRow, col : i })
                        }
                    }
                    if(path === 4){
                        for(let i = col; i > newCol; i--){
                            connectedWithKing.push({ row : newRow, col : i })
                        }
                    }
                }
            }
            if(hasFriendPiece && getCell && !isEnemyKing){
                    dangerCases.push({color:white? "white" : "black", 
                                        position :{ 
                                                    row : newRow, 
                                                    col : newCol 
                                                   }})
                    getCell = false
            }
            if(!empty && !hasFriendPiece && !isEnemyKing && getCell){
                    getCell = false
            }
        }
}





