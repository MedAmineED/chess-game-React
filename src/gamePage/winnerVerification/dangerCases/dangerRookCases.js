

export function dangerRookZone(y, x, board, updateCases) {
    verticalDangerZone(...arguments)
    horizontalDangerZone(...arguments)
}





export  function verticalDangerZone (y, x, board, updateCases) { 
    
    
    let path1 = true;
    let path2 = true;

    for (let i = 1; i <= 8; i++) {
        
        if(y + i < 8 && path1) {
                    //chek player enemy and case state to move in the top vertical path 
                            if(updateCases[y + i][x].empty 
                                || (board[y + i][x].props.data.name === "king" && board[y][x].props.data.color !== board[y + i][x].props.data.color)){
                                   
                                    if(board[y + i][x].props && board[y + i][x].props.data.name === "king"){
                                        console.log("checked");
                                        for(let k = y; k < y + i; k++){
                                            //add to all checked keys of virtual board cases related
                                            //between the piece and the king under attack value true
                                            updateCases[k][x].checked = true
                                        }
                                        updateCases[y][x].checked = true
                                    }
                                    board[y][x].props.data.color === "white"?
                                    updateCases[y + i][x].danger.whiteDanger += 1 
                                    : updateCases[y + i][x].danger.blackDanger += 1 
                            }
                            //chek if empty 
                            if((updateCases[y + i][x].empty !== true && board[y + i][x].props.data.name !== "king")
                            ||(updateCases[y + i][x].empty !== true && board[y][x].props.data.color === board[y + i][x].props.data.color)) {

                                board[y][x].props.data.color === "white"?
                                updateCases[y + i][x].danger.whiteDanger += 1 
                                : updateCases[y + i][x].danger.blackDanger += 1 

                       
                                path1 = false   
                                 
                            }
                }
                if(y - i >= 0 && path2) {
                                                                        
                    if(updateCases[y - i][x].empty 
                        || (board[y - i][x].props.data.name === "king" && board[y][x].props.data.color !== board[y - i][x].props.data.color)){
                            
                            if(board[y - i][x].props && board[y - i][x].props.data.name === "king"){
                                //add to all checked keys of virtual board cases related
                                //between the piece and the king under attack value true
                                for(let k = y; k > y - i; k--){
                                    updateCases[k][x].checked = true
                                }
                                updateCases[y][x].checked = true
                            }
                        board[y][x].props.data.color === "white"?
                        updateCases[y - i][x].danger.whiteDanger += 1 
                        : updateCases[y - i][x].danger.blackDanger += 1 
                    }
                    
                    
                    if((updateCases[y - i][x].empty !== true && board[y - i][x].props.data.name !== "king")
                    ||(updateCases[y - i][x].empty !== true && board[y][x].props.data.color === board[y - i][x].props.data.color)){
                            path2 = false
                        board[y][x].props.data.color === "white"?
                        updateCases[y - i][x].danger.whiteDanger += 1 
                        : updateCases[y - i][x].danger.blackDanger += 1                                       
                                                                    
                    }
                } 
        }

}

export function horizontalDangerZone (y, x, board, updateCases) { 
    
    
    let path1 = true;
    let path2 = true;

    for (let i = 1; i <= 8; i++) {



                if(x + i < 8 && path1) {
                    //chek player enemy and case state to move in the top vertical path 
                            if(updateCases[y][x + i].empty 
                                || (board[y][x + i].props.data.name === "king" && board[y][x].props.data.color !== board[y][x + i].props.data.color)){
                                    
                                    if(board[y][x + i].props && board[y][x + i].props.data.name === "king"){
                                        //add to all checked keys of virtual board cases related
                                        //between the piece and the king under attack value true
                                        for(let k = x; k < x + i; k++){
                                            updateCases[y][k].checked = true
                                        }
                                        updateCases[y][x].checked = true
                                    }
                                    board[y][x].props.data.color === "white"?
                                    updateCases[y][x + i].danger.whiteDanger += 1 
                                    : updateCases[y][x + i].danger.blackDanger += 1

                            }
                            if((updateCases[y][x + i].empty !== true && board[y][x + i].props.data.name !== "king")
                            ||(updateCases[y][x + i].empty !== true && board[y][x].props.data.color === board[y][x + i].props.data.color)) {

                                         
                                         board[y][x].props.data.color === "white"?
                                         updateCases[y][x + i].danger.whiteDanger += 1 
                                         : updateCases[y][x + i].danger.blackDanger += 1 
                                
                                path1 = false   
                                 
                            }
                }
                if(x - i >= 0 && path2) {
                                                                        
                    if(updateCases[y][x - i].empty 
                        || (board[y][x - i].props.data.name === "king" && board[y][x].props.data.color !== board[y][x - i].props.data.color)){

                            if(board[y][x - i].props && board[y][x - i].props.data.name === "king"){
                                //add to all checked keys of virtual board cases related
                                //between the piece and the king under attack value true
                                for(let k = x; k > x - i; k--){
                                    updateCases[y][k].checked = true
                                }
                                updateCases[y][x].checked = true
                            }
                            board[y][x].props.data.color === "white"?
                            updateCases[y][x - i].danger.whiteDanger += 1 
                            : updateCases[y][x - i].danger.blackDanger += 1 

                    }
                    
                    
                    if((updateCases[y][x - i].empty !== true && board[y][x - i].props.data.name !== "king")
                    ||(updateCases[y][x - i].empty !== true && board[y][x].props.data.color === board[y][x - i].props.data.color)){

                        path2 = false
                        board[y][x].props.data.color === "white"?
                        updateCases[y][x - i].danger.whiteDanger += 1 
                        : updateCases[y][x - i].danger.blackDanger += 1 
                                                                    
                    }
                } 
        }

}