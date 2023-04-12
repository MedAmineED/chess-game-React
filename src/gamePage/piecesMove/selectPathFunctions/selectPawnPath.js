export function selectPawnPath(allPossibleMoves, allPiecesData, color, pieceName, position) {
    const {row, col} = position;


    const white = color === "white"

    const oneStep = white? 1 : -1
    const towSteps = white? 2 : -2


    const nextCase = allPiecesData[row + oneStep][col]
    const afterNextCase = allPiecesData[row + towSteps][col]
    const possibleCaseToEatOne = allPiecesData[row + oneStep][col + 1]
    const possibleCaseToEatTow = allPiecesData[row + oneStep][col - 1]
    
    const isFirstStep = white? row === 1 : row === 6

    const allSteps = {
                        oneCase :    { row : row + oneStep, col : col },
                        towCases :   { row : row + towSteps, col : col },
                        eatMoveOne : { row : row + oneStep, col : col + 1 },
                        eatMoveTow : { row : row + oneStep, col : col - 1 }
                     }
    const { oneCase, towCases, eatMoveOne, eatMoveTow } = allSteps


    const rowExist = oneCase.row < 8 && oneCase.row >= 0
    


    if(isFirstStep && nextCase === null && afterNextCase === null) {
        allPossibleMoves.push(towCases)
    }
    if(nextCase === null && rowExist) {
        allPossibleMoves.push(oneCase)
    }


    const eatOneExist = eatMoveOne.col < 8 && eatMoveOne.col >= 0
    const eatTowExist = eatMoveTow.col < 8 && eatMoveTow.col >= 0
    const canEatOne =  possibleCaseToEatOne? color !== possibleCaseToEatOne.color : false
    const canEatTow =  possibleCaseToEatTow? color !== possibleCaseToEatTow.color : false


    if(eatOneExist && canEatOne){
        allPossibleMoves.push(eatMoveOne)
    }
    if(eatTowExist && canEatTow){
        allPossibleMoves.push(eatMoveTow)
    }

}

