export function selectHorizontalPath (index, piecePos, color, pieceName, playerTurn, updateCases, check) {
    
    let path1 = true;
    let path2 = true;

    for (let i = 1; i <= 8; i++) { 
        if(piecePos.x + i < 8 && path1) {
                if(!check){
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
                    if(updateCases[piecePos.y][piecePos.x + i].checked === true ){
                        
                        updateCases[piecePos.y][piecePos.x + i].selected = "tomove" 
                        updateCases[piecePos.y][piecePos.x + i].index = index
                        updateCases[piecePos.y][piecePos.x + i].color= color
                        updateCases[piecePos.y][piecePos.x + i].pieceName= pieceName   
                    }
                    if(updateCases[piecePos.y][piecePos.x + i].checked === false && check && 
                        (updateCases[piecePos.y][piecePos.x + i].eat === "white"
                        || updateCases[piecePos.y][piecePos.x + i].eat === "black") 
                        ) {
                            path1 = false
                        }
        }
        if(piecePos.x - i >= 0 && path2){
            if(!check){
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
        if(updateCases[piecePos.y][piecePos.x - i].checked === true){
                     
            updateCases[piecePos.y][piecePos.x - i].selected = "tomove" 
            updateCases[piecePos.y][piecePos.x - i].index = index
            updateCases[piecePos.y][piecePos.x - i].color= color
            updateCases[piecePos.y][piecePos.x - i].pieceName= pieceName   

        
        }if(updateCases[piecePos.y][piecePos.x - i].checked === false && check && 
            (updateCases[piecePos.y][piecePos.x - i].eat === "white"
            || updateCases[piecePos.y][piecePos.x - i].eat === "black") 
            ) {
                path2 = false
            }
        }  

    }
}