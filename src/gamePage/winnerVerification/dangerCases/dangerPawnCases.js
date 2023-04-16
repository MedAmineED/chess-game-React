/* eslint-disable array-callback-return */
export function dangerPawnCases(dangerCases, allPiecesData, color, position) {
    const {row, col} = position;

    const white = color === "white"

    const oneStep = white? 1 : -1


    

    const allPossibleDanger = [
                       { newRow : row + oneStep, newCol : col + 1 },
                       { newRow : row + oneStep, newCol : col - 1 }
                        ]



    allPossibleDanger.map((dng)=> {
        const existCase = dng.newRow >= 0 && dng.newRow < 8 && dng.newCol >=0 && dng.newCol < 8;
        const hasPiece = existCase && allPiecesData[dng.newRow][dng.newCol]? true : false
        const friendPiece = hasPiece
                           && (color === allPiecesData[dng.newRow][dng.newCol].color)
        const empty = existCase 
                      && allPiecesData[dng.newRow][dng.newCol] === null
        const enemyKing = hasPiece && allPiecesData[dng.newRow][dng.newCol].pieceName === "king" && color !== allPiecesData[dng.newRow][dng.newCol].color

        if(friendPiece || empty || enemyKing)dangerCases.push({color:white? "white" : "black", position : {row : dng.newRow, col : dng.newCol}})

    })
}

