import { selectBishopPath } from "./selectEachPiecePath/selectDiagonalPath";
import { selectKingPath } from "./selectEachPiecePath/selectKingPath";
import { selectKnightPath } from "./selectEachPiecePath/selectKnightPath";
import { selectPawnPath } from "./selectEachPiecePath/selectPawnPath";
import { selectRookPath } from "./selectEachPiecePath/selectRookPath";

export function selectPath (allPossibleMoves, 
                            allPiecesData, 
                            color, 
                            pieceName, 
                            position, 
                            dangerCases, 
                            check, 
                            connectedWithKing,
                            pathCanMove,
                            protect) {

    const parameters = { allPossibleMoves, 
                        allPiecesData, 
                        color,
                        position, 
                        check, 
                        connectedWithKing,
                        pathCanMove,
                        protect } 
    
    if(pieceName === "pawn")selectPawnPath(parameters)
    if(pieceName === "rook" || pieceName === "queen")selectRookPath(parameters)
    if(pieceName === "bishop" || pieceName === "queen")selectBishopPath(parameters)
    if(pieceName === "knight")selectKnightPath(parameters)
    if(pieceName === "king")selectKingPath(...arguments)
}