


export const checkEngineVerification = async (board, allCases, props)=> {
    for(let y = 0; y < 8; y++) {
        for(let x = 0; x < 8; x++) {
                    if(board[y][x].props && 
                                board[y][x].props.data.name === "king"&&
                                board[y][x].props.data.color === "white"&&
                                allCases[y][x].danger.blackDanger > 0 && !props.check) {
                                    props.changeCheck(true)
                    }else if(board[y][x].props && 
                                board[y][x].props.data.name === "king" &&
                                board[y][x].props.data.color === "black" &&
                                allCases[y][x].danger.whiteDanger > 0 && !props.check) {
                                    props.changeCheck(true)
                    }
                    if(board[y][x].props && board[y][x].props.data.name === "king" && props.check &&
                                ((board[y][x].props.data.color === "white" &&
                                allCases[y][x].danger.blackDanger === 0)
                                ||
                                (board[y][x].props.data.color === "black" &&
                                    allCases[y][x].danger.whiteDanger === 0))){
                                    props.changeCheck(false);
                     }
                }
            }
}