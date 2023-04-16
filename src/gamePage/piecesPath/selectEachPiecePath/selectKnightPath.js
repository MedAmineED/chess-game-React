/* eslint-disable array-callback-return */

export function selectKnightPath(params) {
    const { allPossibleMoves, allPiecesData, color, position, check, connectedWithKing } = params
    const {row, col} = position;



    const allJumps = [
                        { newRow : row + 2, newCol : col + 1 },
                        { newRow : row + 2, newCol : col - 1 },
                        { newRow : row + 1, newCol : col + 2 },
                        { newRow : row + 1, newCol : col - 2 },
                        { newRow : row - 2, newCol : col + 1 },
                        { newRow : row - 2, newCol : col - 1 },
                        { newRow : row - 1, newCol : col + 2 },
                        { newRow : row - 1, newCol : col - 2 }
                    ]

    
    allJumps.map((pos)=> {
        const existCase = pos.newRow >= 0 && pos.newRow < 8 && pos.newCol >=0 && pos.newCol < 8;
        const possibleToEat = existCase 
                              && allPiecesData[pos.newRow][pos.newCol] 
                              && color !== allPiecesData[pos.newRow][pos.newCol].color
        const empty = existCase && allPiecesData[pos.newRow][pos.newCol] === null
        if(!check){
            if(possibleToEat || empty)allPossibleMoves.push({row : pos.newRow, col : pos.newCol})
        }
        if(check) {
            const stopAttack = connectedWithKing.some(stop => stop.row === pos.newRow && stop.col === pos.newCol)
            if(stopAttack && (possibleToEat || empty))allPossibleMoves.push({row : pos.newRow, col : pos.newCol})
        }
    })
    
}