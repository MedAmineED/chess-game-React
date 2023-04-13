export function dangerKnightCases(dangerCases, allPiecesData, color, position) {
    const {row, col} = position;

    const white = color === "white"? true : false



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

    
    allJumps.map((cl)=> {
        const existCase = cl.newRow >= 0 && cl.newRow < 8 && cl.newCol >=0 && cl.newCol < 8;
        const hasPiece = existCase && allPiecesData[cl.newRow][cl.newCol]? true : false
        const friendPiece = hasPiece
                           && (color === allPiecesData[cl.newRow][cl.newCol].color)
        const empty = existCase 
                      && allPiecesData[cl.newRow][cl.newCol] === null

        if(friendPiece || empty)dangerCases.push({color:white? "white" : "black", position : {row : cl.newRow, col : cl.newCol}})
    })
    
}