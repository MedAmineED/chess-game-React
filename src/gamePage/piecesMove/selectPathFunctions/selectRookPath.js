export function selectRookPath (allPossibleMoves, allPiecesData, color, pieceName, position, dangerCases) {
    horizontalAndVerticalPath(...arguments, 1)
    horizontalAndVerticalPath(...arguments, 2)
    horizontalAndVerticalPath(...arguments, 3)
    horizontalAndVerticalPath(...arguments, 4)
}

function horizontalAndVerticalPath (allPossibleMoves, allPiecesData, color, pieceName, position, dangerCases, path) {
    
    
    const { row, col } = position;

    let possibleSelect = true;

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
                               && newCol < 8? 
                               true : false;

            const possibleToEat = cellExist && allPiecesData[newRow][newCol]? 
                                    allPiecesData[newRow][newCol].color !== color 
                                    : false



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
}





