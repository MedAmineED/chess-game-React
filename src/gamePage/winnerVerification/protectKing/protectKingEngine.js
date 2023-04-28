/* eslint-disable array-callback-return */
export function pieceProtectKing (allPiecesData, setInProtect) {
    setInProtect(()=>{
        const protectPcArr = []
        allPiecesData.map((row, rowIndex)=> {
                        row.map((piece, colIndex)=>{
                            const empty = piece !== null
                            const position ={ row : rowIndex, col : colIndex }
                            if(empty) {
                                const isRook = piece.pieceName === "rook" || piece.pieceName === "queen"
                                const isBishop = piece.pieceName === "bishop" || piece.pieceName === "queen"
                                
                                if(isRook) {
                                    rookTarget(position ,
                                                allPiecesData, piece, protectPcArr, 1)
                                    rookTarget(position ,
                                                allPiecesData, piece, protectPcArr, 2)
                                    rookTarget(position ,
                                                allPiecesData, piece, protectPcArr, 3)
                                    rookTarget(position ,
                                                allPiecesData, piece, protectPcArr, 4)
                                }
                                if(isBishop) {
                                    bishopTarget(position ,
                                                allPiecesData, piece, protectPcArr, 1)
                                    bishopTarget(position ,
                                                allPiecesData, piece, protectPcArr, 2)
                                    bishopTarget(position ,
                                                allPiecesData, piece, protectPcArr, 3)
                                    bishopTarget(position ,
                                                allPiecesData, piece, protectPcArr, 4)
                                }
                            }
                        })
            
        })
     return protectPcArr
    })
}


function rookTarget ({ row, col }, allPiecesData, piece, protectPcArr, path) {
 
    let allTargetArr = []
    for(let i = 1; i < 8; i++) {
        const taregetPath = path === 1? {
                                    newRow : row + i,
                                    newCol : col
                                    }
                            : path === 2? {
                                    newRow : row - i,
                                    newCol : col
                                    }
                            : path === 3? {
                                    newRow : row,
                                    newCol : col + i
                                    }
                            : path === 4? {
                                    newRow : row,
                                    newCol : col - i
                                    } 
                            : false
            const { newRow, newCol } = taregetPath

            const cellExist =  newRow >= 0 
                               && newRow < 8 
                               && newCol >= 0 
                               && newCol < 8? 
                               true : false;
            const empty = cellExist && allPiecesData[newRow][newCol] === null
            if(cellExist && !empty)allTargetArr.push(allPiecesData[newRow][newCol])
    }
    detectIfPieceProtectKing(allTargetArr, piece.color, protectPcArr, row, col)
}



function bishopTarget ({ row, col }, allPiecesData, piece, protectPcArr, path) {

    let allTargetArr = []
    for(let i = 1; i < 8; i++) {
        const taregetPath = path === 1? {
                                        newRow : row + i,
                                        newCol : col + i
                                        }
                            : path === 2? {
                                        newRow : row + i,
                                        newCol : col - i
                                        }
                            : path === 3? {
                                        newRow : row - i,
                                        newCol : col + i
                                        }
                            : path === 4? {
                                        newRow : row - i,
                                        newCol : col - i
                                        } 
                            : false
            const { newRow, newCol } = taregetPath

            const cellExist =  newRow >= 0 
                               && newRow < 8 
                               && newCol >= 0 
                               && newCol < 8? 
                               true : false;
            const empty = cellExist && allPiecesData[newRow][newCol] === null
            if(cellExist && !empty)allTargetArr.push(allPiecesData[newRow][newCol])
    }
    detectIfPieceProtectKing(allTargetArr, piece.color, protectPcArr, row, col)
}



function detectIfPieceProtectKing (targetArr, color, protectPcArr, attRow, attCol) {
    const existArrPieces = targetArr.length > 1
    if(existArrPieces && targetArr[0].color !== color && targetArr[1].pieceName === "king" && targetArr[1].color !== color) {
    
        protectPcArr.push({attacker : {
                                        row :  attRow,
                                        col :  attCol     
                                    },
                            protector : {
                                        row : targetArr[0].position.y, 
                                        col : targetArr[0].position.x 
                                    }
                            })

    }
}