import { selectPawnPath } from "./selectPawnPath";
import { selectRookPath } from "./selectRookPath";

export function selectPath (allPossibleMoves, allPiecesData, color, pieceName, position) {
    if(pieceName === "pawn")selectPawnPath(...arguments)
    if(pieceName === "rook" || pieceName === "queen")selectRookPath(...arguments)
}