export function dangerPawnCases(dangerCases, allPiecesData, color, position) {
    const {row, col} = position;


    console.log(color);
    const white = color === "white"

    const oneStep = white? 1 : -1


    const possibleDangerOne =row + oneStep < 8 && row + oneStep >= 0? allPiecesData[row + oneStep][col + 1]: false
    const possibleDangerTow = row + oneStep < 8 && row + oneStep >= 0? allPiecesData[row + oneStep][col - 1] : false
    

    const allSteps = {
                        dangerCaseOne : { row : row + oneStep, col : col + 1 },
                        dangerCaseTow : { row : row + oneStep, col : col - 1 }
                     }
    const { dangerCaseOne, dangerCaseTow } = allSteps



    const dangerOneExist = dangerCaseOne.col < 8 && dangerCaseOne.col >= 0
    const dangerTowExist = dangerCaseTow.col < 8 && dangerCaseTow.col >= 0
    const inDangerOne =  possibleDangerOne? color === possibleDangerOne.color : false
    const inDangerTow =  possibleDangerTow? color === possibleDangerTow.color : false


    if(dangerOneExist && (inDangerOne || possibleDangerOne === null)){
        const isExist =  dangerCases.includes(dangerCaseOne)
        console.log(isExist);
        if(!isExist)dangerCases.push({color:white? "white" : "black", position : dangerCaseOne})
    }
    if(dangerTowExist && (inDangerTow || possibleDangerTow === null)){
        const isExist =  dangerCases.includes(dangerCaseTow)
        if(!isExist)dangerCases.push({color:white? "white" : "black", position : dangerCaseTow})
    }

}

