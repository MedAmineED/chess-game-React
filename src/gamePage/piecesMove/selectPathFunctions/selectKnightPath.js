/* eslint-disable array-callback-return */
import { protectKingVerticalAndHorizotal } from "../../winnerVerification/protectKing/protectKingEngine";

export function selectKnightPath(allPossibleMoves, allPiecesData, color, pieceName, position, path) {
    const {row, col} = position;



    const allJumps = [
                        { newRow : row + 2, newCol : col + 1 },
                        { newRow : row + 2, newCol : col - 1 },
                        { newRow : row + 1, newCol : col + 2 },
                        { newRow : row + 1, newCol : col - 2 },
                        { newRow : row - 2, newCol : col + 1 },
                        { newRow : row - 2, newCol : col - 1 },
                        { newRow : row - 1, newCol : col + 2 },
                        { newRow : row - 1, newCol : col - 2 }
                    ]

    
    allJumps.map((cl)=> {
        const existCase = cl.newRow >= 0 && cl.newRow < 8 && cl.newCol >=0 && cl.newCol < 8;
        const possibleToEat = existCase 
                              && allPiecesData[cl.newRow][cl.newCol] 
                              && color !== allPiecesData[cl.newRow][cl.newCol].color
        const empty = existCase && allPiecesData[cl.newRow][cl.newCol] === null

        if(possibleToEat || empty)allPossibleMoves.push({row : cl.newRow, col : cl.newCol})
    })
    
}