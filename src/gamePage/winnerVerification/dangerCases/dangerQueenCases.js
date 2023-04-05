import { diagonalDangerZone } from "./dangerBishopCases";
import { dangerRookZone } from "./dangerRookCases";

export function dangerQueenZone(y, x, board, boardCase, updateCases, Check, setCheck) {
    dangerRookZone(...arguments)
    diagonalDangerZone(...arguments)
}