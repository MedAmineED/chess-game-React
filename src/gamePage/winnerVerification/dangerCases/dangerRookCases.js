export function dangerRookZone(y, x, board, boardCase, updateCases) {
    verticalDangerZone(...arguments)
    horizontalDangerZone(...arguments)
}





export function verticalDangerZone (y, x, board, boardCase, updateCases) { 
    
    
    let path1 = true;
    let path2 = true;

    for (let i = 1; i <= 8; i++) {



                if(y + i < 8 && path1) {
                    //chek player enemy and case state to move in the top vertical path 
                    console.log("fi danger" , board[y][x].props.data.color);
                    console.log("fi danger 2", boardCase[y + i][x]);
                            if(boardCase[y + i][x].empty !== true){
                                board[y][x].props.data.color === "white"?
                                             updateCases[y + i][x].danger.whiteDanger += 1 
                                             : updateCases[y + i][x].danger.blackDanger += 1 

                                    
                                    path1 = false   
                            }
                            //chek if empty 
                            if(updateCases[y + i][x].empty === true) {
                                board[y][x].props.data.color === "white"?
                                         updateCases[y + i][x].danger.whiteDanger += 1 
                                         : updateCases[y + i][x].danger.blackDanger += 1 
                                 
                            }
                }
                if(y - i >= 0 && path2) {
                                                                        
                    if(updateCases[y - i][x].empty === true){
                        board[y][x].props.data.color === "white"?
                        updateCases[y - i][x].danger.whiteDanger += 1 
                        : updateCases[y - i][x].danger.blackDanger += 1 
                        
                        console.log("er wa7da ", board[y][x].props.data);
                    }
                    
                    
                    if(boardCase[y - i][x].empty !== true){
                            path2 = false
                        board[y][x].props.data.color === "white"?
                        updateCases[y - i][x].danger.whiteDanger += 1 
                        : updateCases[y - i][x].danger.blackDanger += 1                                       
                                                                    
                    }
                } 
        }

}

export function horizontalDangerZone (y, x, board, boardCase, updateCases) { 
    
    
    let path1 = true;
    let path2 = true;

    for (let i = 1; i <= 8; i++) {



                if(x + i < 8 && path1) {
                    //chek player enemy and case state to move in the top vertical path 
                    console.log("fi danger" , board[y][x].props.data.color);
                    console.log("fi danger 2", boardCase[y][x + i]);
                            if(boardCase[y][x + i].empty !== true){

                                    board[y][x].props.data.color === "white"?
                                             updateCases[y][x + i].danger.whiteDanger += 1 
                                             : updateCases[y][x + i].danger.blackDanger += 1 
                                    
                                    path1 = false   
                            }
                            if(updateCases[y][x + i].empty === true) {
                                board[y][x].props.data.color === "white"?
                                         updateCases[y][x + i].danger.whiteDanger += 1 
                                         : updateCases[y][x + i].danger.blackDanger += 1 
                                 
                            }
                }
                if(x - i >= 0 && path2) {
                                                                        
                    if(updateCases[y][x - i].empty === true){
                        board[y][x].props.data.color === "white"?
                        updateCases[y][x - i].danger.whiteDanger += 1 
                        : updateCases[y][x - i].danger.blackDanger += 1 
                        
                        console.log("er wa7da ", board[y][x].props.data);
                    }
                    
                    
                    if(updateCases[y][x - i].empty !== true){
                            path2 = false
                            board[y][x].props.data.color === "white"?
                            updateCases[y][x - i].danger.whiteDanger += 1 
                            : updateCases[y][x - i].danger.blackDanger += 1                                        
                                                                    
                    }
                } 
        }

}