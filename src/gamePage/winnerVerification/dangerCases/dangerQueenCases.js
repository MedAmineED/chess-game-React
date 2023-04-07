import { diagonalDangerZone } from "./dangerBishopCases";
import { dangerRookZone } from "./dangerRookCases";

export function dangerQueenZone(y, x, board, updateCases) {
    dangerRookZone(...arguments)
    diagonalDangerZone(...arguments)
}