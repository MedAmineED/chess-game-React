export function dangerPawnZone(y, x, board, boardCase, updateCases){
    if(board[y][x].props.data.color === "white"){
        const finindKing = []
            if(y + 1 < 8 && x + 1 < 8) {
                updateCases[y + 1][x + 1].danger.whiteDanger += 1 
                finindKing.push(board[y + 1][x + 1])
            }
            if(y + 1 < 8 && x - 1 >= 0){
                updateCases[y + 1][x - 1].danger.whiteDanger += 1 
                finindKing.push(board[y + 1][x - 1])
            }
            finindKing.forEach((cs)=>{
                if(cs.props
                    && cs.props.data.color === "black"
                    && cs.props.data.name === "king") {
                        updateCases[y][x].checked = true
                    }
            })
    }
    if(board[y][x].props.data.color === "black"){
        const finindKing = []
        if(y - 1 >= 0 && x + 1 < 8){
            updateCases[y - 1][x + 1].danger.blackDanger += 1
            finindKing.push(board[y - 1][x + 1])
        }
        if(y - 1 >= 0 && x - 1 >= 0){
            updateCases[y - 1][x - 1].danger.blackDanger += 1
            finindKing.push(board[y - 1][x - 1])
        }
        finindKing.forEach((cs)=>{
            if(cs.props
                && cs.props.data.color === "white"
                && cs.props.data.name === "king") {
                    updateCases[y][x].checked = true
                }
        })
    }

    

}