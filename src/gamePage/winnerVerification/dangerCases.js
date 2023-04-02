export function dangerRookZone(y, x, board, boardCase, updateCases) {
    verticalDangerZone(...arguments)
    horizontalDangerZone(...arguments)
}


function verticalDangerZone (y, x, board, boardCase, updateCases) { 
    
    
    let path1 = true;
    let path2 = true;

    for (let i = 1; i <= 8; i++) {



                if(y + i < 8 && path1) {
                    //chek player enemy and case state to move in the top vertical path 
                    console.log("fi danger" , board[y][x].props.data.color);
                    console.log("fi danger 2", boardCase[y + i][x]);
                            if((board[y][x].props.data.color === "white" && boardCase[y + i][x].eat === "black") 
                                || (board[y][x].props.data.color === "black" && boardCase[y + i][x].eat === "white")){
                                    updateCases[y + i][x].danger.whiteDanger += 1; 
                                    updateCases[y + i][x].selected = "tomove"; 
                                    path1 = false   
                            }
                            if((board[y][x].props.data.color === "white" && boardCase[y + i][x].eat === "white")
                                ||(board[y][x].props.data.color === "black" && boardCase[y + i][x].eat === "black")){
                                path1 = false   
                            }


                            //chek if empty 
                            if(updateCases[y + i][x].empty === true) {
                                board[y][x].props.data.color === "white"?
                                         updateCases[y + i][x].danger.whiteDanger += 1 
                                         : updateCases[y + i][x].danger.blackDanger += 1 
                                updateCases[y + i][x].selected = "tomove";  
                            }
                }
                if(y - i >= 0 && path2) {
                                                                        
                    if(updateCases[y - i][x].empty === true){
                        board[y][x].props.data.color === "white"?
                        updateCases[y - i][x].danger.whiteDanger += 1 
                        : updateCases[y - i][x].danger.blackDanger += 1 
                        updateCases[y - i][x].selected = "tomove"; 
                        console.log("er wa7da ", board[y][x].props.data);
                    }
                    
                    
                    if((board[y][x].props.data.color === "black" && boardCase[y - i][x].eat === "white") 
                    || (board[y][x].props.data.color === "white" && boardCase[y - i][x].eat === "black")){
                            path2 = false
                            updateCases[y - i][x].danger.blackDanger += 1                                        
                            updateCases[y - i][x].selected = "tomove";                                         
                    }

                    if((board[y][x].props.data.color === "white" && boardCase[y - i][x].eat === "white")
                    ||(board[y][x].props.data.color === "black" && boardCase[y - i][x].eat === "black")){
                            path2 = false                                    
                    }
                } 
        }

}

function horizontalDangerZone (y, x, board, boardCase, updateCases) { 
    
    
    let path1 = true;
    let path2 = true;

    for (let i = 1; i <= 8; i++) {



                if(x + i < 8 && path1) {
                    //chek player enemy and case state to move in the top vertical path 
                    console.log("fi danger" , board[y][x].props.data.color);
                    console.log("fi danger 2", boardCase[y][x + i]);
                            if((board[y][x].props.data.color === "white" && boardCase[y][x + i].eat === "black") 
                                || (board[y][x].props.data.color === "black" && boardCase[y][x + i].eat === "white")){
                                    updateCases[y][x + i].danger.whiteDanger += 1; 
                                    updateCases[y][x + i].selected = "tomove"; 
                                    path1 = false   
                            }
                            if((board[y][x].props.data.color === "white" && boardCase[y][x + i].eat === "white")
                                ||(board[y][x].props.data.color === "black" && boardCase[y][x + i].eat === "black")){
                                path1 = false   
                            }


                            //chek if empty 
                            if(updateCases[y][x + i].empty === true) {
                                board[y][x].props.data.color === "white"?
                                         updateCases[y][x + i].danger.whiteDanger += 1 
                                         : updateCases[y][x + i].danger.blackDanger += 1 
                                updateCases[y][x + i].selected = "tomove";  
                            }
                }
                if(x - i >= 0 && path2) {
                                                                        
                    if(updateCases[y][x - i].empty === true){
                        board[y][x].props.data.color === "white"?
                        updateCases[y][x - i].danger.whiteDanger += 1 
                        : updateCases[y][x - i].danger.blackDanger += 1 
                        updateCases[y][x - i].selected = "tomove"; 
                        console.log("er wa7da ", board[y][x].props.data);
                    }
                    
                    
                    if((board[y][x].props.data.color === "black" && boardCase[y][x - i].eat === "white") 
                    || (board[y][x].props.data.color === "white" && boardCase[y][x - i].eat === "black")){
                            path2 = false
                            updateCases[y][x - i].danger.blackDanger += 1                                        
                            updateCases[y][x - i].selected = "tomove";                                         
                    }

                    if((board[y][x].props.data.color === "white" && boardCase[y][x - i].eat === "white")
                    ||(board[y][x].props.data.color === "black" && boardCase[y][x - i].eat === "black")){
                            path2 = false                                    
                    }
                } 
        }

}