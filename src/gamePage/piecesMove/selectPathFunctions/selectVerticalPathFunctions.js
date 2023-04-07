

function selectVerticalPath (index, piecePos, color, pieceName, playerTurn, updateCases, check) {
    let path1 = true;
    let path2 = true;

    for (let i = 1; i <= 8; i++) {
        if(piecePos.y  + i < 8 && path1) {
                    if(!check){
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
                                updateCases[piecePos.y + i][piecePos.x].selected = "tomove" 
                                updateCases[piecePos.y + i][piecePos.x].index = index
                                updateCases[piecePos.y + i][piecePos.x].color= color 
                                updateCases[piecePos.y + i][piecePos.x].pieceName= pieceName
                            }
                    }
                    if(updateCases[piecePos.y + i][piecePos.x].checked){
                             
                                updateCases[piecePos.y + i][piecePos.x].selected = "tomove" 
                                updateCases[piecePos.y + i][piecePos.x].index = index
                                updateCases[piecePos.y + i][piecePos.x].color= color
                                updateCases[piecePos.y + i][piecePos.x].pieceName= pieceName 
                    }
                    if(updateCases[piecePos.y + i][piecePos.x].checked === false && check && 
                        (updateCases[piecePos.y + i][piecePos.x].eat === "white"
                        || updateCases[piecePos.y + i][piecePos.x].eat === "black") 
                        ) {
                            path1 = false
                        }
        }
                
                if(piecePos.y - i >= 0 && path2) {
                    if(!check) {                                                 
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
                    }else if(updateCases[piecePos.y - i][piecePos.x].checked === true ){
                     
                        updateCases[piecePos.y - i][piecePos.x].selected = "tomove" 
                        updateCases[piecePos.y - i][piecePos.x].index = index
                        updateCases[piecePos.y - i][piecePos.x].color= color
                        updateCases[piecePos.y - i][piecePos.x].pieceName= pieceName   
        
                    
                    } 
                    if(updateCases[piecePos.y - i][piecePos.x].checked === false && check && 
                        (updateCases[piecePos.y - i][piecePos.x].eat === "white"
                        || updateCases[piecePos.y - i][piecePos.x].eat === "black") 
                        ) {
                            path2 = false
                        }
            }
        }
}














export { selectVerticalPath}