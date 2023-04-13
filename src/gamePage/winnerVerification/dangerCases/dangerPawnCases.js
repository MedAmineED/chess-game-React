export function dangerPawnCases(dangerCases, allPiecesData, color, position) {
    const {row, col} = position;


    const white = color === "white"

    const oneStep = white? 1 : -1


    const possibleDangerOne =row + oneStep < 8 && row + oneStep >= 0? allPiecesData[row + oneStep][col + 1]: false
    const possibleDangerTow = row + oneStep < 8 && row + oneStep >= 0? allPiecesData[row + oneStep][col - 1] : false
    

    const allSteps = {
                        dangerMoveOne : { row : row + oneStep, col : col + 1 },
                        dangerMoveTow : { row : row + oneStep, col : col - 1 }
                     }
    const { dangerMoveOne, dangerMoveTow } = allSteps



    const dangerOneExist = dangerMoveOne.col < 8 && dangerMoveOne.col >= 0
    const dangerTowExist = dangerMoveTow.col < 8 && dangerMoveTow.col >= 0
    const inDangerOne =  possibleDangerOne? color === possibleDangerOne.color : false
    const inDangerTow =  possibleDangerTow? color === possibleDangerTow.color : false


    if(dangerOneExist && inDangerOne){
        dangerCases.push(dangerMoveOne)
    }
    if(dangerTowExist && inDangerTow){
        dangerCases.push(dangerMoveTow)
    }

}

