

function selectVerticalPath (index, piecePos, color, pieceName, playerTurn, updateCases) {
    console.log(arguments);
    let path1 = true;
    let path2 = true;

    for (let i = 1; i <= 8; i++) {

                if(piecePos.y  + i < 8 && path1) {
                    //chek player enemy and case state to move in the top vertical path 
                            if((playerTurn % 2 === 0 && updateCases[piecePos.y + i][piecePos.x].eat === "white") 
                                || (playerTurn % 2 !== 0 && updateCases[piecePos.y + i][piecePos.x].eat === "black")){
                                    updateCases[piecePos.y  + i][piecePos.x].selected = "tomove" 
                                    updateCases[piecePos.y  + i][piecePos.x].index = index
                                    updateCases[piecePos.y  + i][piecePos.x].color= color 
                                    updateCases[piecePos.y  + i][piecePos.x].pieceName= pieceName   
                                    path1 = false   
                            }
                            if((playerTurn % 2 !== 0 && updateCases[piecePos.y + i][piecePos.x].eat === "white") || (playerTurn % 2 === 0 && updateCases[piecePos.y + i][piecePos.x].eat === "black")){
                                path1 = false   
                            }


                            //chek if empty 
                            if(updateCases[piecePos.y + i][piecePos.x].empty === true) {
                                updateCases[piecePos.y  + i][piecePos.x].selected = "tomove" 
                                updateCases[piecePos.y  + i][piecePos.x].index = index
                                updateCases[piecePos.y  + i][piecePos.x].color= color 
                                updateCases[piecePos.y  + i][piecePos.x].pieceName= pieceName
                            }
                }
                if(piecePos.y - i >= 0 && path2) {
                                                                        
                    if(updateCases[piecePos.y  - i][piecePos.x].empty === true){
                        updateCases[piecePos.y  - i][piecePos.x].selected = "tomove"
                        updateCases[piecePos.y  - i][piecePos.x].index = index
                        updateCases[piecePos.y  - i][piecePos.x].color= color 
                        updateCases[piecePos.y  - i][piecePos.x].pieceName= pieceName}
                    
                    
                    if((playerTurn % 2 === 0 && updateCases[piecePos.y - i][piecePos.x].eat === "white") 
                        || (playerTurn % 2 !== 0 && updateCases[piecePos.y - i][piecePos.x].eat === "black")){
                            path2 = false
                            updateCases[piecePos.y  - i][piecePos.x].selected = "tomove" 
                            updateCases[piecePos.y  - i][piecePos.x].index = index
                            updateCases[piecePos.y  - i][piecePos.x].color= color
                            updateCases[piecePos.y  - i][piecePos.x].pieceName= pieceName                                          
                    }
                    if((playerTurn % 2 !== 0 && updateCases[piecePos.y - i][piecePos.x].eat === "white") 
                        || (playerTurn % 2 === 0 && updateCases[piecePos.y - i][piecePos.x].eat === "black")){
                            path2 = false                                    
                    }
                } 
        }
}







function selectHorizontalPath (index, piecePos, color, pieceName, playerTurn, updateCases) {
    
    let path1 = true;
    let path2 = true;

    for (let i = 1; i <= 8; i++) { 
        if(piecePos.x + i < 8 && path1) {
            //chek player enemy and case state to move in the top vertical path 
                    if((playerTurn % 2 === 0 && updateCases[piecePos.y][piecePos.x + i].eat === "white") 
                        || (playerTurn % 2 !== 0 && updateCases[piecePos.y][piecePos.x + i].eat === "black")){
                            updateCases[piecePos.y][piecePos.x + i].selected = "tomove" 
                            updateCases[piecePos.y][piecePos.x + i].index = index
                            updateCases[piecePos.y][piecePos.x + i].color= color 
                            updateCases[piecePos.y][piecePos.x + i].pieceName= pieceName   
                            path1 = false   
                    }
                    if((playerTurn % 2 !== 0 && updateCases[piecePos.y][piecePos.x + i].eat === "white") || (playerTurn % 2 === 0 && updateCases[piecePos.y][piecePos.x + i].eat === "black")){
                        path1 = false   
                    }


                    //chek if empty 
                    if(updateCases[piecePos.y][piecePos.x + i].empty === true) {
                        updateCases[piecePos.y][piecePos.x + i].selected = "tomove" 
                        updateCases[piecePos.y][piecePos.x + i].index = index
                        updateCases[piecePos.y][piecePos.x + i].color= color 
                        updateCases[piecePos.y][piecePos.x + i].pieceName= pieceName
                    }
        }
        if(piecePos.x - i >= 0 && path2){
            if(updateCases[piecePos.y][piecePos.x - i].empty === true){
                updateCases[piecePos.y][piecePos.x - i].selected = "tomove";
                updateCases[piecePos.y][piecePos.x - i].index = index 
                updateCases[piecePos.y][piecePos.x - i].color= color;
                updateCases[piecePos.y][piecePos.x - i].pieceName= pieceName;}
            if((playerTurn % 2 === 0 && updateCases[piecePos.y][piecePos.x - i].eat === "white") || (playerTurn % 2 !== 0 && updateCases[piecePos.y][piecePos.x - i].eat === "black")){
                    path2 = false
                    updateCases[piecePos.y][piecePos.x - i].selected = "tomove" 
                    updateCases[piecePos.y][piecePos.x - i].index = index
                    updateCases[piecePos.y][piecePos.x - i].color= color
                    updateCases[piecePos.y][piecePos.x - i].pieceName= pieceName                                          
            }
            if((playerTurn % 2 !== 0 && updateCases[piecePos.y][piecePos.x - i].eat === "white") || (playerTurn % 2 === 0 && updateCases[piecePos.y][piecePos.x - i].eat === "black")){
                    path2 = false
            }
        }  

    }
}




function diagonalPath(index, piecePos, color, pieceName, playerTurn, updateCases) {
    
    let path1 = true;
    let path2 = true;
    let path3 = true;
    let path4 = true;

    for (let i = 1; i <= 8; i++) {
                if(piecePos.y  + i < 8 && piecePos.x + i < 8 && path1) {
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

                if(piecePos.y - i >= 0 && piecePos.x - i >= 0 && path2) {
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


                if(piecePos.y + i < 8 && piecePos.x - i >= 0 && path3) {
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
                if(piecePos.y - i >= 0 && piecePos.x + i < 8 && path4) {
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
    }
}

export { selectVerticalPath, selectHorizontalPath, diagonalPath }