export function dangerPawnZone(y, x, board, boardCase, updateCases){
    if(board[y][x].props.data.color === "white"){
            if(y + 1 < 8 && x + 1 < 8) {
                updateCases[y + 1][x + 1].danger.whiteDanger += 1 
    
            }
            if(y + 1 < 8 && x - 1 >= 0){
                updateCases[y + 1][x - 1].danger.whiteDanger += 1 
    
            }
    }
    if(board[y][x].props.data.color === "black"){
        if(y - 1 >= 0 && x + 1 < 8){
            updateCases[y - 1][x + 1].danger.blackDanger += 1

        }
        if(y - 1 >= 0 && x - 1 >= 0){
            updateCases[y - 1][x - 1].danger.blackDanger += 1

        }
    }

}