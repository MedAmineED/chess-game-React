/* eslint-disable array-callback-return */



export const checkEngineVerification = (allPiecesData, dangerCases, chekMode, kingInCheck = false)=> {
    

    allPiecesData.map((row, rowIndex)=> {
        row.map((cell, colIndex)=> {
            if(cell){
                const color = cell.color 
                const caseInDanger = dangerCases.some(danger => danger.color !== color 
                                                                && danger.position.row === rowIndex 
                                                                && danger.position.col === colIndex)
                const isKing = cell.pieceName === "king"
                if(caseInDanger && isKing) {
                    kingInCheck = true
                }
            }
        })
    })
    chekMode(kingInCheck)
}

// function connectPieceWithEnemyKing (king, allPiecesData, dangerCases) {

//     const { y : rowKing, x : colKing} = king.position
//     const color = king.color

//     for(let i = 1; i < 8; i++) {


//         let path1 = {
//             newRow : rowKing + i,
//             newCol : colKing - i,
//             path : true
//         }
//         let path2 = {
//             newRow : rowKing + i,
//             newCol : colKing,
//             path : true
//         }
//         let path3 = {
//             newRow : rowKing + i,
//             newCol : colKing + i,
//             path : true
//         }
//         let path4 = {
//             newRow : rowKing,
//             newCol : colKing - i,
//             path : true
//         }
//         let path5 = {
//             newRow : rowKing - i,
//             newCol : colKing - i,
//             path : true
//         }
//         let path6 = {
//             newRow : rowKing - i,
//             newCol : colKing,
//             path : true
//         }
//         let path7 = {
//             newRow : rowKing - i,
//             newCol : colKing + i,
//             path : true
//         }
//         let path8 = {
//             newRow : rowKing,
//             newCol : colKing + i,
//             path : true
//         }

//         const path1Exist = path1.newRow >= 0 && path1.newRow < 8 && path1.col >= 0 && path1.col < 8
//         if(path1Exist) {

//         }


//     }



// }