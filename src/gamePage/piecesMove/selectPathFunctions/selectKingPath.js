export function selectKingPath(allPossibleMoves, allPiecesData, color, pieceName, position, path) {
    const {row, col} = position;



    const allJumps = [
                        { newRow : row + 1, newCol : col - 1 },
                        { newRow : row + 1, newCol : col + 1 },
                        { newRow : row - 1, newCol : col - 1 },
                        { newRow : row - 1, newCol : col + 1 },
                        { newRow : row + 1, newCol : col },
                        { newRow : row - 1, newCol : col },
                        { newRow : row, newCol : col - 1 },
                        { newRow : row, newCol : col + 1 },
                    ]

    
    allJumps.map((cl)=> {
        const existCase = cl.newRow >= 0 && cl.newRow < 8 && cl.newCol >=0 && cl.newCol < 8;
        const possibleToEat = existCase 
                              && allPiecesData[cl.newRow][cl.newCol] 
                              && color !== allPiecesData[cl.newRow][cl.newCol].color
        const empty = existCase && allPiecesData[cl.newRow][cl.newCol] === null

        if(possibleToEat || empty)allPossibleMoves.push({row : cl.newRow, col : cl.newCol})
    })
    
}