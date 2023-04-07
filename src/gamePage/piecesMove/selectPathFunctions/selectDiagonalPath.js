export function selectDiagonalPath(index, piecePos, color, pieceName, playerTurn, updateCases, check) {
    
    let path1 = true;
    let path2 = true;
    let path3 = true;
    let path4 = true;

    for (let i = 1; i <= 8; i++) {
        
                if(piecePos.y  + i < 8 && piecePos.x + i < 8 && path1) {
                    if(!check){ 
                            if(updateCases[piecePos.y  + i][piecePos.x + i].empty){
                                    updateCases[piecePos.y  + i][piecePos.x + i].selected = "tomove" 
                                    updateCases[piecePos.y  + i][piecePos.x + i].index = index
                                    updateCases[piecePos.y  + i][piecePos.x + i].color= color 
                                    updateCases[piecePos.y  + i][piecePos.x + i].pieceName= pieceName
                            }
                            if((playerTurn % 2 === 0 && updateCases[piecePos.y + i][piecePos.x + i].eat === "white") 
                                || (playerTurn % 2 !== 0 && updateCases[piecePos.y + i][piecePos.x + i].eat === "black"))
                                {
                                    path1 = false;
                                    updateCases[piecePos.y  + i][piecePos.x + i].selected = "tomove" 
                                    updateCases[piecePos.y  + i][piecePos.x + i].index = index
                                    updateCases[piecePos.y  + i][piecePos.x + i].color= color 
                                    updateCases[piecePos.y  + i][piecePos.x + i].pieceName= pieceName
                                }
                            if((playerTurn % 2 !== 0 && updateCases[piecePos.y + i][piecePos.x + i].eat === "white") 
                                || (playerTurn % 2 === 0 && updateCases[piecePos.y + i][piecePos.x + i].eat === "black"))
                                {
                                   path1 = false   
                                }
                    }
                    if(updateCases[piecePos.y  + i][piecePos.x + i].checked === true){
                        updateCases[piecePos.y  + i][piecePos.x + i].selected = "tomove" 
                        updateCases[piecePos.y  + i][piecePos.x + i].index = index
                        updateCases[piecePos.y  + i][piecePos.x + i].color= color
                        updateCases[piecePos.y  + i][piecePos.x + i].pieceName= pieceName   
            
                    
                    }
                    if(updateCases[piecePos.y  + i][piecePos.x + i].checked === false && check && 
                        (updateCases[piecePos.y  + i][piecePos.x + i].eat === "white"
                        || updateCases[piecePos.y  + i][piecePos.x + i].eat === "black") 
                        ) {
                            path1 = false
                        } 
                }
                if(piecePos.y - i >= 0 && piecePos.x - i >= 0 && path2) {
                    if(!check){
                            if(updateCases[piecePos.y  - i][piecePos.x - i].empty){
                                updateCases[piecePos.y - i][piecePos.x - i].selected = "tomove";
                                updateCases[piecePos.y - i][piecePos.x - i].index = index;
                                updateCases[piecePos.y - i][piecePos.x - i].color= color;
                                updateCases[piecePos.y - i][piecePos.x - i].pieceName= pieceName;
                            }
                            if((playerTurn % 2 === 0 && updateCases[piecePos.y - i][piecePos.x - i].eat === "white") 
                               || (playerTurn % 2 !== 0 && updateCases[piecePos.y - i][piecePos.x - i].eat === "black"))
                               {
                                    path2 = false
                                    updateCases[piecePos.y - i][piecePos.x - i].selected = "tomove";
                                    updateCases[piecePos.y - i][piecePos.x - i].index = index;
                                    updateCases[piecePos.y - i][piecePos.x - i].color= color;
                                    updateCases[piecePos.y - i][piecePos.x - i].pieceName= pieceName;
                                }
                            if((playerTurn % 2 !== 0 && updateCases[piecePos.y - i][piecePos.x - i].eat === "white") 
                               || (playerTurn % 2 === 0 && updateCases[piecePos.y - i][piecePos.x - i].eat === "black"))
                               {
                                    path2 = false   
                               }
                    }
                    if(updateCases[piecePos.y - i][piecePos.x - i].checked === true){
                     
                        updateCases[piecePos.y - i][piecePos.x - i].selected = "tomove" 
                        updateCases[piecePos.y - i][piecePos.x - i].index = index
                        updateCases[piecePos.y - i][piecePos.x - i].color= color
                        updateCases[piecePos.y - i][piecePos.x - i].pieceName= pieceName
                    }
                    if(updateCases[piecePos.y - i][piecePos.x - i].checked === false && check && 
                        (updateCases[piecePos.y - i][piecePos.x - i].eat === "white"
                        || updateCases[piecePos.y - i][piecePos.x - i].eat === "black") 
                        ) {
                            path2 = false
                        } 
                    
                } 


                if(piecePos.y + i < 8 && piecePos.x - i >= 0 && path3) {
                    if(!check){
                        if(updateCases[piecePos.y + i][piecePos.x - i].empty){
                                    updateCases[piecePos.y + i][piecePos.x - i].selected = "tomove" 
                                    updateCases[piecePos.y + i][piecePos.x - i].index = index 
                                    updateCases[piecePos.y + i][piecePos.x - i].color= color 
                                    updateCases[piecePos.y + i][piecePos.x - i].pieceName= pieceName
                        }
                        if((playerTurn % 2 === 0 && updateCases[piecePos.y + i][piecePos.x - i].eat === "white")
                          || (playerTurn % 2 !== 0 && updateCases[piecePos.y + i][piecePos.x - i].eat === "black"))
                          {
                                path3 = false
                                updateCases[piecePos.y + i][piecePos.x - i].selected = "tomove" 
                                updateCases[piecePos.y + i][piecePos.x - i].index = index 
                                updateCases[piecePos.y + i][piecePos.x - i].color= color 
                                updateCases[piecePos.y + i][piecePos.x - i].pieceName= pieceName
                           }
                        if((playerTurn % 2 !== 0 && updateCases[piecePos.y + i][piecePos.x - i].eat === "white")
                          || (playerTurn % 2 === 0 && updateCases[piecePos.y + i][piecePos.x - i].eat === "black"))
                          {
                            path3 = false   
                          }
                    }
                    if(updateCases[piecePos.y + i][piecePos.x - i].checked === true){
                     
                        updateCases[piecePos.y + i][piecePos.x - i].selected = "tomove" 
                        updateCases[piecePos.y + i][piecePos.x - i].index = index
                        updateCases[piecePos.y + i][piecePos.x - i].color= color
                        updateCases[piecePos.y + i][piecePos.x - i].pieceName= pieceName
                    }
                    if(updateCases[piecePos.y + i][piecePos.x - i].checked === false && check && 
                        (updateCases[piecePos.y + i][piecePos.x - i].eat === "white"
                        || updateCases[piecePos.y + i][piecePos.x - i].eat === "black") 
                        ) {
                            path3 = false
                        }

                }
                if(piecePos.y - i >= 0 && piecePos.x + i < 8 && path4) {
                    if(!check){
                        if(updateCases[piecePos.y - i][piecePos.x + i].empty){
                                    updateCases[piecePos.y - i][piecePos.x + i].selected = "tomove" 
                                    updateCases[piecePos.y - i][piecePos.x + i].index = index 
                                    updateCases[piecePos.y - i][piecePos.x + i].color= color 
                                    updateCases[piecePos.y - i][piecePos.x + i].pieceName= pieceName 
                        }
                        if((playerTurn % 2 === 0 && updateCases[piecePos.y - i][piecePos.x + i].eat === "white") 
                            || (playerTurn % 2 !== 0 && updateCases[piecePos.y - i][piecePos.x + i].eat === "black"))
                            {
                                path4 = false
                                updateCases[piecePos.y - i][piecePos.x + i].selected = "tomove" 
                                updateCases[piecePos.y - i][piecePos.x + i].index = index 
                                updateCases[piecePos.y - i][piecePos.x + i].color= color 
                                updateCases[piecePos.y - i][piecePos.x + i].pieceName= pieceName                                                     
                            }
                        if((playerTurn % 2 !== 0 && updateCases[piecePos.y - i][piecePos.x + i].eat === "white") 
                        || (playerTurn % 2 === 0 && updateCases[piecePos.y - i][piecePos.x + i].eat === "black"))
                            {
                                path4 = false   
                            }
                    }
                    if(updateCases[piecePos.y - i][piecePos.x + i].checked === true){
                     
                        updateCases[piecePos.y - i][piecePos.x + i].selected = "tomove" 
                        updateCases[piecePos.y - i][piecePos.x + i].index = index
                        updateCases[piecePos.y - i][piecePos.x + i].color= color
                        updateCases[piecePos.y - i][piecePos.x + i].pieceName= pieceName
                    }
                    if(updateCases[piecePos.y - i][piecePos.x + i].checked === false && check && 
                        (updateCases[piecePos.y - i][piecePos.x + i].eat === "white"
                        || updateCases[piecePos.y - i][piecePos.x + i].eat === "black") 
                        ) {
                            path4 = false
                        } 
        }
    }
}