import { selectBishopPath } from "./selectDiagonalPath";
import { selectKingPath } from "./selectKingPath";
import { selectKnightPath } from "./selectKnightPath";
import { selectPawnPath } from "./selectPawnPath";
import { selectRookPath } from "./selectRookPath";

export function selectPath (allPossibleMoves, allPiecesData, color, pieceName, position, dangerCases) {

            

            if(pieceName === "pawn")selectPawnPath(...arguments)
            if(pieceName === "rook" || pieceName === "queen")selectRookPath(...arguments)
            if(pieceName === "bishop" || pieceName === "queen")selectBishopPath(...arguments)
            if(pieceName === "knight")selectKnightPath(...arguments)
            if(pieceName === "king")selectKingPath(...arguments)
}