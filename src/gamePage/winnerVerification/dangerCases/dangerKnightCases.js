export function dangerKnightZone (y, x, board, boardCase, updateCases) {
    
    if(y + 2 < 8 && x + 1 < 8) {
        board[y][x].props.data.color === "white"?
        updateCases[y + 2][x + 1].danger.whiteDanger += 1 
        : updateCases[y + 2][x + 1].danger.blackDanger += 1 
        
    }


    if(y + 2 < 8 && x - 1 >= 0) {
        board[y][x].props.data.color === "white"?
        updateCases[y + 2][x - 1].danger.whiteDanger += 1 
        : updateCases[y + 2][x - 1].danger.blackDanger += 1 
                    }


    if(y - 2 >= 0&& x + 1 < 8) {
        board[y][x].props.data.color === "white"?
        updateCases[y - 2][x + 1].danger.whiteDanger += 1 
        : updateCases[y - 2][x + 1].danger.blackDanger += 1 
                
    }

    if(y - 2 >=0 && x - 1 >= 0){
        board[y][x].props.data.color === "white"?
        updateCases[y - 2][x - 1].danger.whiteDanger += 1 
        : updateCases[y - 2][x - 1].danger.blackDanger += 1 
                
    }


    if(y + 1 < 8 && x + 2 < 8){
        board[y][x].props.data.color === "white"?
        updateCases[y  + 1][x + 2].danger.whiteDanger += 1 
        : updateCases[y  + 1][x + 2].danger.blackDanger += 1 
                
    }


    if(y + 1 < 8 && x - 2 >= 0){
        board[y][x].props.data.color === "white"?
        updateCases[y  + 1][x - 2].danger.whiteDanger += 1 
        : updateCases[y  + 1][x - 2].danger.blackDanger += 1
                    }


    if(y - 1 >= 0 && x + 2 < 8){
        
        board[y][x].props.data.color === "white"?
        updateCases[y  - 1][x + 2].danger.whiteDanger += 1 
        : updateCases[y  - 1][x + 2].danger.blackDanger += 1
            
    }

    if(y - 1 >=0 && x - 2 >= 0){
        
        board[y][x].props.data.color === "white"?
        updateCases[y - 1][x - 2].danger.whiteDanger += 1 
        : updateCases[y - 1][x - 2].danger.blackDanger += 1
            
    }
}