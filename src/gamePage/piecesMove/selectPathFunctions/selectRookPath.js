export function selectRookPath (allPossibleMoves, allPiecesData, color, pieceName, position) {
            selectVerticalPath(...arguments)
            selectHorizontalPath(...arguments)
}



function selectVerticalPath (allPossibleMoves, allPiecesData, color, pieceName, position) {
    const {row, col} = position
    const allTopMoves = 7 - row

    let path1 = true
    let path2 = true
    
    
    for (let top = row + 1; top <= allTopMoves; top++) {

        const possibleToEat = allPiecesData[top][col]? allPiecesData[top][col].color !== color : false

        if(path1 && possibleToEat){
             allPossibleMoves.push({ row : top, col : col })
             path1 = false
        }
        if(path1 && allPiecesData[top][col] === null){
            allPossibleMoves.push({ row : top, col : col })
        }
        if(allPiecesData[top][col] !== null && !possibleToEat) {
            path1 = false
        }
    } 
    for (let bottom = row - 1; bottom >= 0; bottom--) {
        const possibleToEat = allPiecesData[bottom][col]? allPiecesData[bottom][col].color !== color : false

        
        if(path2 && possibleToEat){
             allPossibleMoves.push({ row : bottom, col : col })
             path2 = false
        }
        if(path2 && allPiecesData[bottom][col] === null){
            allPossibleMoves.push({ row : bottom, col : col })
        }
        if(allPiecesData[bottom][col] !== null && !possibleToEat) {
            path2 = false
        }
    } 
}


function selectHorizontalPath (allPossibleMoves, allPiecesData, color, pieceName, position) {
    const {row, col} = position
    const allLeftMoves = 7 - col
    
    let path1 = true;
    let path2 = true;
    
    
    for (let left = col + 1; left <= allLeftMoves; left++) {

            const possibleToEat = allPiecesData[row][left]? allPiecesData[row][left].color !== color : false

            if(path1 && possibleToEat){
                    allPossibleMoves.push({ row : row, col : left })
                    path1 = false
            }
            if(path1 && allPiecesData[row][left] === null){
                    allPossibleMoves.push({ row : row, col : left })
                    path1 = false
            }
            if(allPiecesData[row][left] !== null && !possibleToEat){
                    path1 = false
            }
    } 
    for (let right = col - 1; right >= 0; right--) {

            const possibleToEat = allPiecesData[row][right]? allPiecesData[row][right].color !== color : false
            
            if(path2 && possibleToEat){
                allPossibleMoves.push({ row : row, col : right })
                path2 = false
            }
            if(path2 && allPiecesData[row][right] === null){
                    allPossibleMoves.push({ row : row, col : right })
                    path2 = false
            }
            if(allPiecesData[row][right] !== null && !possibleToEat){
                    path2 = false
            }
    } 
}





