export function selectKnightPath(knightPos, updateCases, index, color, playerTr) {
    if(knightPos.y + 2 < 8 && knightPos.x + 1 < 8) {
        if((updateCases[knightPos.y + 2][knightPos.x + 1].empty)
        ||((playerTr % 2 === 0 && updateCases[knightPos.y + 2][knightPos.x + 1].eat === "white") 
        || (playerTr % 2 !== 0 && updateCases[knightPos.y + 2][knightPos.x + 1].eat === "black"))){
            updateCases[knightPos.y + 2][knightPos.x + 1].selected = "tomove" 
            updateCases[knightPos.y + 2][knightPos.x + 1].index = index
            updateCases[knightPos.y + 2][knightPos.x + 1].color= color 
            updateCases[knightPos.y + 2][knightPos.x + 1].pieceName= "knight"
        }
    }


    if(knightPos.y + 2 < 8 && knightPos.x - 1 >= 0) {
            if((updateCases[knightPos.y + 2][knightPos.x - 1].empty)
                ||((playerTr % 2 === 0 && updateCases[knightPos.y + 2][knightPos.x - 1].eat === "white") 
                || (playerTr % 2 !== 0 && updateCases[knightPos.y + 2][knightPos.x - 1].eat === "black"))){
                    updateCases[knightPos.y + 2][knightPos.x - 1].selected = "tomove"
                    updateCases[knightPos.y + 2][knightPos.x - 1].index = index
                    updateCases[knightPos.y + 2][knightPos.x - 1].color= color 
                    updateCases[knightPos.y + 2][knightPos.x - 1].pieceName= "knight"}
    }


    if(knightPos.y - 2 >= 0&& knightPos.x + 1 < 8) {
            if((updateCases[knightPos.y  - 2][knightPos.x + 1].empty)
                ||((playerTr % 2 === 0 && updateCases[knightPos.y - 2][knightPos.x + 1].eat === "white") 
                || (playerTr % 2 !== 0 && updateCases[knightPos.y - 2][knightPos.x + 1].eat === "black"))){
                    updateCases[knightPos.y - 2][knightPos.x + 1].selected = "tomove" 
                    updateCases[knightPos.y - 2][knightPos.x + 1].index = index 
                    updateCases[knightPos.y - 2][knightPos.x + 1].color= color 
                    updateCases[knightPos.y - 2][knightPos.x + 1].pieceName= "knight" }
    }

    if(knightPos.y - 2 >=0 && knightPos.x - 1 >= 0){
            if((updateCases[knightPos.y  - 2][knightPos.x - 1].empty)
                ||((playerTr % 2 === 0 && updateCases[knightPos.y - 2][knightPos.x - 1].eat === "white") 
                || (playerTr % 2 !== 0 && updateCases[knightPos.y - 2][knightPos.x - 1].eat === "black"))){
                    updateCases[knightPos.y - 2][knightPos.x - 1].selected = "tomove";
                    updateCases[knightPos.y - 2][knightPos.x - 1].index = index 
                    updateCases[knightPos.y - 2][knightPos.x - 1].color= color;
                    updateCases[knightPos.y - 2][knightPos.x - 1].pieceName= "knight";}
    }


    if(knightPos.y + 1 < 8 && knightPos.x + 2 < 8){
            if((updateCases[knightPos.y  + 1][knightPos.x + 2].empty)
            ||((playerTr % 2 === 0 && updateCases[knightPos.y  + 1][knightPos.x + 2].eat === "white") 
            || (playerTr % 2 !== 0 && updateCases[knightPos.y  + 1][knightPos.x + 2].eat === "black"))){ 
                updateCases[knightPos.y  + 1][knightPos.x + 2].selected = "tomove" 
                updateCases[knightPos.y  + 1][knightPos.x + 2].index = index
                updateCases[knightPos.y  + 1][knightPos.x + 2].color= color 
                updateCases[knightPos.y  + 1][knightPos.x + 2].pieceName= "knight"}
    }


    if(knightPos.y + 1 < 8 && knightPos.x - 2 >= 0){
            if((updateCases[knightPos.y  + 1][knightPos.x - 2].empty)
            ||((playerTr % 2 === 0 && updateCases[knightPos.y  + 1][knightPos.x - 2].eat === "white") 
            || (playerTr % 2 !== 0 && updateCases[knightPos.y  + 1][knightPos.x - 2].eat === "black"))){ 
                updateCases[knightPos.y  + 1][knightPos.x - 2].selected = "tomove"
                updateCases[knightPos.y  + 1][knightPos.x - 2].index = index
                updateCases[knightPos.y  + 1][knightPos.x - 2].color= color 
                updateCases[knightPos.y  + 1][knightPos.x - 2].pieceName= "knight"}
    }


    if(knightPos.y - 1 >= 0 && knightPos.x + 2 < 8){
            if((updateCases[knightPos.y - 1][knightPos.x + 2].empty)
            ||((playerTr % 2 === 0 && updateCases[knightPos.y - 1][knightPos.x + 2].eat === "white") 
            || (playerTr % 2 !== 0 && updateCases[knightPos.y - 1][knightPos.x + 2].eat === "black"))){ 
                updateCases[knightPos.y - 1][knightPos.x + 2].selected = "tomove" 
                updateCases[knightPos.y - 1][knightPos.x + 2].index = index 
                updateCases[knightPos.y - 1][knightPos.x + 2].color= color 
                updateCases[knightPos.y - 1][knightPos.x + 2].pieceName= "knight" }
    }

    if(knightPos.y - 1 >=0 && knightPos.x - 2 >= 0){
        if((updateCases[knightPos.y - 1][knightPos.x - 2].empty)
            ||((playerTr % 2 === 0 && updateCases[knightPos.y - 1][knightPos.x - 2].eat === "white") 
            || (playerTr % 2 !== 0 && updateCases[knightPos.y - 1][knightPos.x - 2].eat === "black"))){
                updateCases[knightPos.y - 1][knightPos.x - 2].selected = "tomove";
                updateCases[knightPos.y - 1][knightPos.x - 2].index = index 
                updateCases[knightPos.y - 1][knightPos.x - 2].color= color;
                updateCases[knightPos.y - 1][knightPos.x - 2].pieceName= "knight";}
    }
}