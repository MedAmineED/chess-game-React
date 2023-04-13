export function selectKingPath(allPossibleMoves, allPiecesData, color, pieceName, position, dangerCases) {
    const {row, col} = position;

    console.log(dangerCases);



    const allSteps = [
                        { newRow : row + 1, newCol : col - 1 },
                        { newRow : row + 1, newCol : col + 1 },
                        { newRow : row - 1, newCol : col - 1 },
                        { newRow : row - 1, newCol : col + 1 },
                        { newRow : row + 1, newCol : col },
                        { newRow : row - 1, newCol : col },
                        { newRow : row, newCol : col - 1 },
                        { newRow : row, newCol : col + 1 },
                    ]

    
    allSteps.map((cl)=> {
        const isDanger = dangerCases.some(pos => pos.position.row === cl.newRow && pos.position.col === cl.newCol && color !== pos.color)
        const existCase = cl.newRow >= 0 && cl.newRow < 8 && cl.newCol >=0 && cl.newCol < 8;
        const possibleToEat = existCase 
                              && allPiecesData[cl.newRow][cl.newCol] 
                              && color !== allPiecesData[cl.newRow][cl.newCol].color
        const empty = existCase && allPiecesData[cl.newRow][cl.newCol] === null

        if((possibleToEat || empty) && !isDanger)allPossibleMoves.push({row : cl.newRow, col : cl.newCol})
    })
    
}