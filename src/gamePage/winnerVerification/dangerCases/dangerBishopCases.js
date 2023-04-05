import { checkKing } from "../chekKing/checkKingFunction";

export function dangerBishopZone(y, x, board, boardCase, updateCases) {
    diagonalDangerZone(...arguments)
}



export function diagonalDangerZone(y, x, board, boardCase, updateCases, Check, setCheck){
    
    let path1 = true;
    let path2 = true;
    let path3 = true;
    let path4 = true;

    for (let i = 1; i <= 8; i++) {
                if(y + i < 8 && x + i < 8 && path1) {
                            if(updateCases[y + i][x + i].empty 
                                || (board[y + i][x + i].props.data.name === "king" && board[y][x].props.data.color !== board[y + i][x + i].props.data.color)){
                                    board[y][x].props.data.color === "white"?
                                            updateCases[y + i][x + i].danger.whiteDanger += 1 
                                            : updateCases[y + i][x + i].danger.blackDanger += 1 
                                        
                                                                }


                            if((updateCases[y + i][x + i].empty !== true && board[y + i][x + i].props.data.name !== "king")
                                ||(updateCases[y + i][x + i].empty !== true && board[y][x].props.data.color === board[y + i][x + i].props.data.color))
                                {
                                    board[y][x].props.data.color === "white"?
                                            updateCases[y + i][x + i].danger.whiteDanger += 1 
                                            : updateCases[y + i][x + i].danger.blackDanger += 1
                                    path1 = false;
                                    }
                }

                if(y - i >= 0 && x - i >= 0 && path2) {
                            if(updateCases[y - i][x - i].empty 
                                || (board[y - i][x - i].props.data.name === "king" && board[y][x].props.data.color !== board[y - i][x - i].props.data.color)){
                                board[y][x].props.data.color === "white"?
                                        updateCases[y - i][x - i].danger.whiteDanger += 1 
                                        : updateCases[y - i][x - i].danger.blackDanger += 1
                               
                            }
                            if((updateCases[y - i][x - i].empty !== true && board[y - i][x - i].props.data.name !== "king")
                                ||(updateCases[y - i][x - i].empty !== true && board[y][x].props.data.color === board[y - i][x - i].props.data.color))
                               {
                                board[y][x].props.data.color === "white"?
                                        updateCases[y - i][x - i].danger.whiteDanger += 1 
                                        : updateCases[y - i][x - i].danger.blackDanger += 1
                                    path2 = false

                                   
                                }
                } 


                if(y + i < 8 && x - i >= 0 && path3) {
                        if(updateCases[y + i][x - i].empty 
                            || (board[y + i][x - i].props.data.name === "king" && board[y][x].props.data.color !== board[y + i][x - i].props.data.color)){
                            board[y][x].props.data.color === "white"?
                                    updateCases[y + i][x - i].danger.whiteDanger += 1 
                                    : updateCases[y + i][x - i].danger.blackDanger += 1
                                
                                                           }
                        if((updateCases[y + i][x - i].empty !== true && board[y + i][x - i].props.data.name !== "king")
                            ||(updateCases[y + i][x - i].empty !== true && board[y][x].props.data.color === board[y + i][x - i].props.data.color)){
                            board[y][x].props.data.color === "white"?
                                    updateCases[y + i][x - i].danger.whiteDanger += 1 
                                    : updateCases[y + i][x - i].danger.blackDanger += 1
                                path3 = false
                            
                                                          }

                }
                if(y - i >= 0 && x + i < 8 && path4) {
                    if(updateCases[y - i][x + i].empty 
                        || (board[y - i][x + i].props.data.name === "king" && board[y][x].props.data.color !== board[y - i][x + i].props.data.color)){
                        board[y][x].props.data.color === "white"?
                                updateCases[y - i][x + i].danger.whiteDanger += 1 
                                : updateCases[y - i][x + i].danger.blackDanger += 1
                     }
                    if((updateCases[y - i][x + i].empty !== true && board[y - i][x + i].props.data.name !== "king")
                    ||(updateCases[y - i][x + i].empty !== true && board[y][x].props.data.color === board[y - i][x + i].props.data.color)){
                            board[y][x].props.data.color === "white"?
                                    updateCases[y - i][x + i].danger.whiteDanger += 1 
                                    : updateCases[y - i][x + i].danger.blackDanger += 1
                            path4 = false
                        
                                                                            
                        }
        }
    }
}