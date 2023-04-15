import { selectBishopPath } from "./selectEachPiecePath/selectDiagonalPath";
import { selectKingPath } from "./selectEachPiecePath/selectKingPath";
import { selectKnightPath } from "./selectEachPiecePath/selectKnightPath";
import { selectPawnPath } from "./selectEachPiecePath/selectPawnPath";
import { selectRookPath } from "./selectEachPiecePath/selectRookPath";

export function selectPath (allPossibleMoves, allPiecesData, color, pieceName, position, dangerCases,check) {

            if(pieceName === "pawn")selectPawnPath(...arguments)
            if(pieceName === "rook" || pieceName === "queen")selectRookPath(...arguments)
            if(pieceName === "bishop" || pieceName === "queen")selectBishopPath(...arguments)
            if(pieceName === "knight")selectKnightPath(...arguments)
            if(pieceName === "king")selectKingPath(...arguments)
}