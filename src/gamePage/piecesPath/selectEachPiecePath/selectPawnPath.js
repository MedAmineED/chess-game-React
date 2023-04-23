/* eslint-disable array-callback-return */
export function selectPawnPath(params) {
    const {allPossibleMoves, allPiecesData, color, position, check, connectedWithKing } = params
    const {row, col} = position;


    const white = color === "white"

    const oneStep = white? 1 : -1
    const towSteps = white? 2 : -2


    // const nextCase = row + oneStep < 8 && row + oneStep >= 0? allPiecesData[row + oneStep][col] : false
    // const afterNextCase = row + towSteps < 8 && row + towSteps >= 0? allPiecesData[row + towSteps][col] : false
    // const possibleCaseToEatOne =row + oneStep < 8 && row + oneStep >= 0? allPiecesData[row + oneStep][col + 1]: false
    // const possibleCaseToEatTow = row + oneStep < 8 && row + oneStep >= 0? allPiecesData[row + oneStep][col - 1] : false
    
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
        
        if(!check){
                if(isFirstStep && empty && col === pos.col) {
                    allPossibleMoves.push(pos)
                }
                if(empty && existCase && !isFirstStep && col === pos.col && pos.row !== row + towSteps) {
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


    })
}

