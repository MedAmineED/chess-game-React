/* eslint-disable array-callback-return */



export const checkEngineVerification = (allPiecesData, dangerCases, chekMode)=> {
    
    allPiecesData.map((row, rowIndex)=> {
        row.map((cell, colIndex)=> {
            if(cell){
                const color = cell.color 
                const caseInDanger = dangerCases.some(danger => danger.color !== color 
                                                                && danger.position.row === rowIndex 
                                                                && danger.position.col === colIndex)
                const isKing = cell.pieceName === "king"
                if(caseInDanger && isKing) {
                    console.log("check");
                    chekMode(true)
                }
            }
        })
    })
}