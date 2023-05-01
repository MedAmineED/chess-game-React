/* eslint-disable array-callback-return */
export function selectPawnPath(params) {
    
    const {allPossibleMoves, 
            allPiecesData, 
            color, 
            position, 
            check, 
            connectedWithKing, 
            pathCanMove,
            protect }       = params

    const {row, col} = position;

    const white = color === "white"

    const oneStep = white? 1 : -1
    const towSteps = white? 2 : -2
    
    const isFirstStep = white? row === 1 : row === 6

    const allSteps = [
                        { row : row + oneStep, col : col },
                        { row : row + towSteps, col : col },
                        { row : row + oneStep, col : col + 1 },
                        { row : row + oneStep, col : col - 1 }
                    ]
    


    allSteps.map((pos)=> {
        const existCase = pos.row >= 0 && pos.row < 8 && pos.col >=0 && pos.col < 8;
        const hasPiece = existCase && allPiecesData[pos.row][pos.col]? true : false
        const possibleToEat = hasPiece
                           && (color !== allPiecesData[pos.row][pos.col].color)
        const empty = existCase 
                      && allPiecesData[pos.row][pos.col] === null
        const secondEmpty = allPiecesData[row + oneStep][pos.col] === null
        
        if(!check && !protect){
                if(isFirstStep && empty && col === pos.col && secondEmpty) {
                    allPossibleMoves.push({ row : row + towSteps, col : col })
                }
                if(empty && existCase && col === pos.col && pos.row !== row + towSteps) {
                    allPossibleMoves.push(pos)
                }
                if(possibleToEat && col !== pos.col){
                    allPossibleMoves.push(pos)
                }
            }
        if(check) {
                const stopAttack = connectedWithKing.some(stop => stop.row === pos.row && stop.col === pos.col)
                
                if(isFirstStep && empty && col === pos.col && stopAttack) {
                    allPossibleMoves.push(pos)
                }
                if(empty && existCase && !isFirstStep && col === pos.col && pos.row !== row + towSteps && stopAttack) {
                    allPossibleMoves.push(pos)
                }
                if(possibleToEat && col !== pos.col && stopAttack){
                    allPossibleMoves.push(pos)
                }
            }
        if(!check && protect) {
            const isInProtectMode = pathCanMove.some((select)=> select.row === pos.row && select.col === pos.col)
            if(isFirstStep && empty && col === pos.col && isInProtectMode) {
                allPossibleMoves.push(pos)
            }
            if(empty && existCase && !isFirstStep && col === pos.col && pos.row !== row + towSteps && isInProtectMode) {
                allPossibleMoves.push(pos)
            }
            if(possibleToEat && col !== pos.col && isInProtectMode){
                allPossibleMoves.push(pos)
            }
        }


    })
}

