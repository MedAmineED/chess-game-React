export function selectPawnPath(params) {
    const {allPossibleMoves, allPiecesData, color, position, check, connectedWithKing } = params
    const {row, col} = position;


    const white = color === "white"

    const oneStep = white? 1 : -1
    const towSteps = white? 2 : -2


    const nextCase = row + oneStep < 8 && row + oneStep >= 0? allPiecesData[row + oneStep][col] : false
    const afterNextCase = row + towSteps < 8 && row + towSteps >= 0? allPiecesData[row + towSteps][col] : false
    const possibleCaseToEatOne =row + oneStep < 8 && row + oneStep >= 0? allPiecesData[row + oneStep][col + 1]: false
    const possibleCaseToEatTow = row + oneStep < 8 && row + oneStep >= 0? allPiecesData[row + oneStep][col - 1] : false
    
    const isFirstStep = white? row === 1 : row === 6

    const allSteps = {
                        oneCase :    { row : row + oneStep, col : col },
                        towCases :   { row : row + towSteps, col : col },
                        eatMoveOne : { row : row + oneStep, col : col + 1 },
                        eatMoveTow : { row : row + oneStep, col : col - 1 }
                     }
    const { oneCase, towCases, eatMoveOne, eatMoveTow } = allSteps


    const rowExist = oneCase.row < 8 && oneCase.row >= 0
    const towRowExist = towCases.row < 8 && towCases.row >= 0
    const eatOneExist = eatMoveOne.col < 8 && eatMoveOne.col >= 0
    const eatTowExist = eatMoveTow.col < 8 && eatMoveTow.col >= 0
    const canEatOne =  possibleCaseToEatOne? color !== possibleCaseToEatOne.color : false
    const canEatTow =  possibleCaseToEatTow? color !== possibleCaseToEatTow.color : false

    if(!check){
            if(towRowExist && isFirstStep && nextCase === null && afterNextCase === null) {
                allPossibleMoves.push(towCases)
            }
            if(nextCase === null && rowExist) {
                allPossibleMoves.push(oneCase)
            }
            if(eatOneExist && canEatOne){
                allPossibleMoves.push(eatMoveOne)
            }
            if(eatTowExist && canEatTow){
                allPossibleMoves.push(eatMoveTow)
            }
    }
    if(check) {
        console.log(connectedWithKing);
        const stopAttackOne = connectedWithKing.some(stop => stop.row === eatMoveOne.row && stop.col === eatMoveOne.col)
        const stopAttackTow = connectedWithKing.some(stop => stop.row === eatMoveTow.row && stop.col === eatMoveTow.col)
        if(stopAttackOne) {
            allPossibleMoves.push(eatMoveOne)
        }
        if(stopAttackTow) {
            allPossibleMoves.push(eatMoveTow)
        }
    }
}

