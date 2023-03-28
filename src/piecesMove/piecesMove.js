
class MovePiece {
    constructor(index, 
                color, 
                casePos, 
                pieceName,
                allCases, 
                setCase, 
                board, 
                setBoard,
                newPos,
                whitePiece,
                setWhitePiece,
                blackPiece,
                setBlackPiece,
                playerTurn) {
        
    this.index  = index
    this.color  = color
    this.casePos  = casePos
    this.pieceName = pieceName;
    this.allCases  = allCases
    this.setCase  = setCase
    this.board  = board
    this.setBoard  = setBoard
    this.newPos  = newPos
    this.whitePiece  = whitePiece
    this.setWhitePiece = setWhitePiece
    this.blackPiece = blackPiece
    this.setBlackPiece = setBlackPiece
    this.playerTurn = playerTurn
    }

    clickToMove = async ()=> {
        if (this.allCases[this.casePos.y][this.casePos.x].selected === "tomove" && this.color === "white") {

            const handleWhiteIndex =  this.pieceName === "queen" || this.pieceName === "king"? 
                                    {y : this.whitePiece.y, x : this.whitePiece.x}:
                                    {y : this.whitePiece[this.index].y, x : this.whitePiece[this.index].x}

                                    await  this.playerTurn((prTr)=> prTr + 1)
                                            const piece = this.board[handleWhiteIndex.y][handleWhiteIndex.x]
                                            await this.setBoard((br)=> {
                                                        const upDateBoard = [...br];
                                                        upDateBoard[handleWhiteIndex.y][handleWhiteIndex.x] = "";
                                                        return upDateBoard
                                            }) 
                                            await this.setCase((cs)=> {
                                                const updaECases = [...cs];
                                                updaECases[handleWhiteIndex.y][handleWhiteIndex.x].empty = true
                                                updaECases[handleWhiteIndex.y][handleWhiteIndex.x].eat = ""
                                                updaECases.forEach((el)=> {
                                                    el.forEach((el1)=> {
                                                        el1.selected = false;
                                                        el1.index = "";
                                                        el1.color = "";
                                                        el1.pieceName = "";
                                                    })
                                                })
    
                                                return updaECases
                                            })
                                            await this.newPos(this.casePos, this.index, this.setWhitePiece)
                                            await this.setBoard((br)=> {
                                                        const upDateBoard = [...br];
                                                        upDateBoard[this.casePos.y][this.casePos.x]= piece;
                                                        return upDateBoard
                                            }) 
                                            await this.setCase((cs)=> {
                                                const updaECases = [...cs];
                                                updaECases[this.casePos.y][this.casePos.x].eat = "white"
                                                updaECases[this.casePos.y][this.casePos.x].color = "white"
                                                updaECases[this.casePos.y][this.casePos.x].index = ""
                                                updaECases[this.casePos.y][this.casePos.x].empty = false;
    
                                                return updaECases
                                            })
                                }else if(this.allCases[this.casePos.y][this.casePos.x].selected === "tomove" && this.color === "black") {
                                    const handleBlackIndex =  this.pieceName === "queen" || this.pieceName === "king"? 
                                                                    {y : this.blackPiece.y, x : this.blackPiece.x}:
                                                                    {y : this.blackPiece[this.index].y, x : this.blackPiece[this.index].x}

                                    await   this.playerTurn((prTr)=> prTr + 1)
                                    const piece = this.board[handleBlackIndex.y][handleBlackIndex.x]
                                            await this.setBoard((br)=> {
                                                const upDateBoard = [...br];
                                                upDateBoard[handleBlackIndex.y][handleBlackIndex.x] = "";
                                                return upDateBoard
                                            }) 
                                            await this.setCase((cs)=> {
                                                const updaECases = [...cs];
                                                updaECases[handleBlackIndex.y][handleBlackIndex.x].empty = true;
                                                updaECases[handleBlackIndex.y][handleBlackIndex.x].eat = true;
                                                updaECases.forEach((el)=> {
                                                    el.forEach((el1)=> {
                                                        el1.selected = false;
                                                        el1.pieceName = "";
                                                        el1.index = "";
                                                        el1.color = "";
                                                    })
                                                })
    
                                                return updaECases
                                            })
                                            await this.newPos(this.casePos, this.index, this.setBlackPiece)
                                            await this.setBoard((br)=> {
                                                const upDateBoard = [...br];
                                                upDateBoard[this.casePos.y][this.casePos.x]= piece;
                                                return upDateBoard
                                            }) 
                                            await this.setCase((cs)=> {
                                                const updaECases = [...cs];
                                                updaECases[this.casePos.y][this.casePos.x].eat = "black"
                                                updaECases[this.casePos.y][this.casePos.x].color = "black"
                                                updaECases[this.casePos.y][this.casePos.x].index = ""
                                                updaECases[this.casePos.y][this.casePos.x].empty = false;
    
                                                return updaECases
                                            })
                                }
                        }
}

export {MovePiece}