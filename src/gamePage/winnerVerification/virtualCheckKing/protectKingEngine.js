

export function protectKingVerticalAndHorizotal(y, x, board, updateCases) {
    protectKingVertical(...arguments)
    protectKingHorizontal(...arguments)
}





export  function protectKingVertical (y, x, board, updateCases) { 
    
    
    let path1 = true;
    let path2 = true;
    let protectedPath = []
    for (let i = 1; i <= 8; i++) {
        
        if(y + i < 8 && path1) {
                            if(
                                ((updateCases[y + i][x].danger.blackDanger > 0 
                                  && board[y][x].props.data.color === "white")
                                    ||
                                    (updateCases[y + i][x].danger.whiteDanger > 0
                                       && board[y][x].props.data.color === "black"))
                                  )
                                {

                                        let isKing = false 

                                        if(!board[y + i][x].props
                                            ||
                                            (board[y + i][x].props.data.name !== "kight"
                                            && board[y + i][x].props.data.name !== "pawn"))
                                            {
                                                protectedPath = [...protectedPath, updateCases[y + i][x]]
                                            }


                                        for(let back = 0; back < 8; back++){
                                            if(y - back > 0 && !isKing){
                                                
                                                protectedPath = [...protectedPath, updateCases[y - back][x]]
                                                if(board[y - back][x].props 
                                                    && board[y - back][x].props.data.name === "king" 
                                                    && board[y][x].props.data.color !== board[y - back][x].props.data.color
                                                    && path1) 
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
                                ((updateCases[y + i][x].danger.blackDanger === 0 
                                && board[y][x].props.data.color === "white")
                                    ||
                                    (updateCases[y + i][x].danger.whiteDanger === 0
                                       && board[y][x].props.data.color === "black"))){
                                        path1 = false
                            }
                }
                if(y - i >= 0 && path2) {
                    if(board[y][x].props &&
                        ((updateCases[y - i][x].danger.blackDanger > 0 
                          && board[y][x].props.data.color === "white")
                            ||
                            (updateCases[y - i][x].danger.whiteDanger > 0
                               && board[y][x].props.data.color === "black"))
                          )
                        {

                                let isKing = false 
                                if(!board[y - i][x].props
                                    ||
                                    (board[y - i][x].props.data.name !== "kight"
                                    && board[y - i][x].props.data.name !== "pawn"))
                                    {
                                        protectedPath = [...protectedPath, updateCases[y - i][x]]
                                    }


                                for(let back = 0; back < 8; back++){
                                    if(y - back > 0 && !isKing){
                                        
                                        protectedPath = [...protectedPath, updateCases[y - back][x]]
                                        if(board[y - back][x].props 
                                            && board[y - back][x].props.data.name === "king" 
                                            && board[y][x].props.data.color !== board[y - back][x].props.data.color
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
                        ((updateCases[y - i][x].danger.blackDanger === 0 
                        && board[y][x].props.data.color === "white")
                            ||
                            (updateCases[y - i][x].danger.whiteDanger === 0
                               && board[y][x].props.data.color === "black"))){
                                path2 = false
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
                                    (board[y][x + i].props.data.name !== "kight"
                                    && board[y][x + i].props.data.name !== "pawn"))
                                    {
                                        protectedPath = [...protectedPath, updateCases[y][x + i]]
                                    }


                                for(let back = 0; back < 8; back++){
                                    if(y - back > 0 && !isKing){
                                        
                                        protectedPath = [...protectedPath, updateCases[y - back][x]]
                                        if(board[y - back][x].props 
                                            && board[y - back][x].props.data.name === "king" 
                                            && board[y][x].props.data.color !== board[y - back][x].props.data.color
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
                                if(!board[y + i][x].props
                                    ||
                                    (board[y][x - i].props.data.name !== "kight"
                                    && board[y][x - i].props.data.name !== "pawn"))
                                    {
                                        protectedPath = [...protectedPath, updateCases[y][x - i]]
                                    }


                                for(let back = 0; back < 8; back++){
                                    if(y - back > 0 && !isKing){
                                        
                                        protectedPath = [...protectedPath, updateCases[y - back][x]]
                                        if(board[y - back][x].props 
                                            && board[y - back][x].props.data.name === "king" 
                                            && board[y][x].props.data.color !== board[y - back][x].props.data.color
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