

export function protectKingVerticalAndHorizotal(y, x, board, updateCases, direction) {
    protectKingVertical(...arguments)
}





export  function protectKingVertical (y, x, board, updateCases, direction) { 
    
    
    let path1 = true;
    let path2 = true;
    for (let i = 1; i <= 8; i++) {
        
        if(y + i < 8 && path1) {
                            if(board[y + i][x].props) {
                                
                                if(board[y][x].props.data.color !== board[y + i][x].props.data.color
                                    && board[y + i][x].props.data.name !== "pawn"
                                    && board[y + i][x].props.data.name !== "kngit"){
                                        
                                    for(let back = 0; back < 8; back++) {
                                        if(y - back >= 0) {
                                            if(board[y - back][x].props 
                                                && board[y - back][x].props.data.color === board[y][x].props.data.color
                                                && board[y - back][x].props.data.name === "king"){
                                                    direction.verticalDirection = true;
                                                    direction.horizontalDirection = false;
                                                    direction.firstDiagonalDirection = false
                                                    direction.secondDiagonalDirection = false

                                                    path1 = false
                                                } else {
                                                    path1 = false
                                                }
                                        }
                                    }
                                }else {
                                    path1 = false
                                }
                            }
                                
                }
                if(y - i >= 0 && path2) {
                    if(board[y - i][x].props) {
                        if(board[y][x].props.data.color !== board[y - i][x].props.data.color
                            && board[y - i][x].props.data.name !== "pawn"
                            && board[y - i][x].props.data.name !== "kngit"){

                            for(let back = 0; back < 8; back++) {
                                if(y + back < 8) {
                                    if(board[y + back][x].props 
                                        && board[y + back][x].props.data.color === board[y][x].props.data.color
                                        && board[y + back][x].props.data.name === "king"){
                                            direction.verticalDirection = true;
                                            direction.horizontalDirection = false;
                                            direction.firstDiagonalDirection = false
                                            direction.secondDiagonalDirection = false

                                            path2 = false
                                        } else {
                                            path2 = false
                                        }
                                }
                            }
                        }else {
                            path2 = false
                        }
                    }
                } 
        }

}

export function protectKingHorizontal (y, x, board, updateCases) { 
    
    
    let path1 = true;
    let path2 = true;
    let protectedPath = []
    

    for (let i = 1; i <= 8; i++) {



                if(x + i < 8 && path1) {
                    
                    if(board[y][x].props &&
                        ((updateCases[y][x + i].danger.blackDanger > 0 
                          && board[y][x].props.data.color === "white")
                            ||
                            (updateCases[y][x + i].danger.whiteDanger > 0
                               && board[y][x].props.data.color === "black"))
                          )
                        {

                                let isKing = false 
                                if(!board[y][x + i].props
                                    ||
                                    (board[y][x + i].props.data.name !== "knight"
                                    && board[y][x + i].props.data.name !== "pawn"))
                                    {
                                        protectedPath = [...protectedPath, updateCases[y][x + i]]
                                    }


                                for(let back = 0; back < 8; back++){
                                    if(x - back >= 0 && !isKing){
                                        
                                        protectedPath = [...protectedPath, updateCases[y][x - back]]
                                        if(board[y][x - back].props 
                                            && board[y][x - back].props.data.name === "king" 
                                            && board[y][x].props.data.color === board[y][x - back].props.data.color
                                            && path2)
                                        {
                                                isKing = true
                                        }


                                        if(isKing)
                                        {
                                            protectedPath.forEach((cs)=> {
                                                cs.protectKing = true
                                            })
                                        }

                                    }
                                }
                                
                    }
                    if(board[y][x].props &&
                        ((updateCases[y][x + i].danger.blackDanger === 0 
                        && board[y][x].props.data.color === "white")
                            ||
                        (updateCases[y][x + i].danger.whiteDanger === 0
                               && board[y][x].props.data.color === "black"))){
                                path2 = false
                    }
                }
                if(x - i >= 0 && path2) {
                    
                    if(
                        ((updateCases[y][x - i].danger.blackDanger > 0 
                          && board[y][x].props.data.color === "white")
                            ||
                          (updateCases[y][x - i].danger.whiteDanger > 0
                               && board[y][x].props.data.color === "black"))
                          )
                        {

                                let isKing = false 
                                if(!board[y][x - i].props
                                    ||
                                    (board[y][x - i].props.data.name !== "knight"
                                    && board[y][x - i].props.data.name !== "pawn"))
                                    {
                                        protectedPath = [...protectedPath, updateCases[y][x - i]]
                                    }


                                for(let back = 0; back < 8; back++){
                                    if(x + back < 8 && !isKing){
                                        
                                        protectedPath = [...protectedPath, updateCases[y][x + back]]
                                        if(board[y][x + back].props 
                                            && board[y][x + back].props.data.name === "king" 
                                            && board[y][x].props.data.color === board[y][x + back].props.data.color
                                            && path2)
                                        {
                                                isKing = true
                                        }


                                        if(isKing)
                                        {
                                            protectedPath.forEach((cs)=> {
                                                cs.protectKing = true
                                            })
                                        }

                                    }
                                }
                                
                    }
                    if(board[y][x].props &&
                        ((updateCases[y][x - i].danger.blackDanger === 0 
                        && board[y][x].props.data.color === "white")
                            ||
                        (updateCases[y][x - i].danger.whiteDanger === 0
                               && board[y][x].props.data.color === "black"))){
                                path2 = false
                    }
                }
    }

}