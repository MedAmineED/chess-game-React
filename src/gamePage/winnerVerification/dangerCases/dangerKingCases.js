export function dangerKingZone(y, x, board, boardCase, updateCases){
            if(y + 1 < 8) {
                board[y][x].props.data.color === "white"?
                updateCases[y + 1][x].danger.whiteDanger += 1:
                updateCases[y + 1][x].danger.blackDanger += 1
            }
            if(y - 1 >= 0) {
                board[y][x].props.data.color === "white"?
                updateCases[y - 1][x].danger.whiteDanger += 1:
                updateCases[y - 1][x].danger.blackDanger += 1
            }
            if(x + 1 < 8) {
                board[y][x].props.data.color === "white"?
                updateCases[y][x + 1].danger.whiteDanger += 1:
                updateCases[y][x + 1].danger.blackDanger += 1
            }
            if(x - 1 >= 0) {
                board[y][x].props.data.color === "white"?
                updateCases[y][x - 1].danger.whiteDanger += 1:
                updateCases[y][x - 1].danger.blackDanger += 1
            }
            if(y + 1 < 8 && x + 1 < 8) {
                board[y][x].props.data.color === "white"?
                updateCases[y + 1][x + 1].danger.whiteDanger += 1:
                updateCases[y + 1][x + 1].danger.blackDanger += 1
            }
            if(y + 1 < 8 && x - 1 >= 0){
                board[y][x].props.data.color === "white"?
                updateCases[y + 1][x - 1].danger.whiteDanger += 1 : 
                updateCases[y + 1][x - 1].danger.blackDanger += 1 
            }
            if(y - 1 >= 0 && x + 1 < 8){
                board[y][x].props.data.color === "white"?
                updateCases[y - 1][x + 1].danger.whiteDanger += 1 :
                updateCases[y - 1][x + 1].danger.blackDanger += 1
            }
            if(y - 1 >= 0 && x - 1 >= 0){
                board[y][x].props.data.color === "white"?
                updateCases[y - 1][x - 1].danger.whiteDanger += 1 :
                updateCases[y - 1][x - 1].danger.blackDanger += 1
            }
}