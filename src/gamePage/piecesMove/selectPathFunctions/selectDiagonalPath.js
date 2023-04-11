export function selectDiagonalPath(allPossibleMoves, allPiecesData, color, pieceName, position) {
    const { row, col } = position;

    let path1 = true;
    let path2 = true;
    let path3 = true;
    let path4 = true;

        for(let step = 1; step < 8; step ++) {
          const cellExixst =  row + step  >= 0 
                                && row + step < 8 
                                && col + step >= 0 
                                && col + step < 8? 
                                true : false;

          const seLectCells = {
                            newRow : row + step,
                            newCol : col + step
          }
          if(cellExixst) {
            allPossibleMoves.push({ row : seLectCells.newRow, col : seLectCells.newCol })
          }
        }
    
    
}