/* eslint-disable no-useless-constructor */
import { selectHorizontalPath, selectVerticalPath } from "./selectPathFunctions/selectPathFunctions";

class MovePiece {
    constructor(index, color, casePos, pieceName,allCases, 
                setCase,  board, setBoard,newPos, whitePiece,
                setWhitePiece, blackPiece,setBlackPiece, playerTurn) {
        
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


class RookMethods extends MovePiece {
    
    constructor (index, color, casePos, pieceName,allCases, 
                    setCase,  board, setBoard,newPos, whitePiece,
                    setWhitePiece, blackPiece,setBlackPiece, playerTurn) {
        
     super(index, color, casePos, pieceName,allCases, 
                setCase,  board, setBoard,newPos, whitePiece,
                setWhitePiece, blackPiece,setBlackPiece, playerTurn)
    }

    selectPath = async (index, rookPos, color, playerTr)=> {
        console.log("playertutn from rook select --- : " + playerTr);
        await this.setCase((cs)=> {
            const updateCases = [...cs];
            updateCases.forEach((el)=> {
                el.forEach((el1)=> {
                    el1.selected = false;
                    el1.pieceName = ""
                    el1.color= ""
                })
            })
            let path1 = true;
            let path2 = true;
            let path3 = true;
            let path4 = true;

            for (let i = 1; i <= 8; i++) {

                        if(rookPos.y  + i < 8 && path1) {


                                    //chek player enemy and case state to move in the top vertical path 
                                    if((playerTr % 2 === 0 && updateCases[rookPos.y + i][rookPos.x].eat === "white") 
                                        || (playerTr % 2 !== 0 && updateCases[rookPos.y + i][rookPos.x].eat === "black")){
                                        updateCases[rookPos.y  + i][rookPos.x].selected = "tomove" 
                                        updateCases[rookPos.y  + i][rookPos.x].index = index
                                        updateCases[rookPos.y  + i][rookPos.x].color= color 
                                        updateCases[rookPos.y  + i][rookPos.x].pieceName= "rook"   
                                        path1 = false   
                                    }
                                    if((playerTr % 2 !== 0 && updateCases[rookPos.y + i][rookPos.x].eat === "white") || (playerTr % 2 === 0 && updateCases[rookPos.y + i][rookPos.x].eat === "black")){
                                        path1 = false   
                                    }


                                    //chek if empty 
                                    if(updateCases[rookPos.y + i][rookPos.x].empty === true) {
                                        updateCases[rookPos.y  + i][rookPos.x].selected = "tomove" 
                                        updateCases[rookPos.y  + i][rookPos.x].index = index
                                        updateCases[rookPos.y  + i][rookPos.x].color= color 
                                        updateCases[rookPos.y  + i][rookPos.x].pieceName= "rook"
                                    }
                        }
                        if(rookPos.y - i >= 0 && path2) {
                                        
                                    if(updateCases[rookPos.y  - i][rookPos.x].empty === true){
                                        updateCases[rookPos.y  - i][rookPos.x].selected = "tomove"
                                        updateCases[rookPos.y  - i][rookPos.x].index = index
                                        updateCases[rookPos.y  - i][rookPos.x].color= color 
                                        updateCases[rookPos.y  - i][rookPos.x].pieceName= "rook"}
                                    
                                    
                                    if((playerTr % 2 === 0 && updateCases[rookPos.y - i][rookPos.x].eat === "white") 
                                        || (playerTr % 2 !== 0 && updateCases[rookPos.y - i][rookPos.x].eat === "black")){
                                            path2 = false
                                            updateCases[rookPos.y  - i][rookPos.x].selected = "tomove" 
                                            updateCases[rookPos.y  - i][rookPos.x].index = index
                                            updateCases[rookPos.y  - i][rookPos.x].color= color
                                            updateCases[rookPos.y  - i][rookPos.x].pieceName= "rook"                                          
                                    }
                                    if((playerTr % 2 !== 0 && updateCases[rookPos.y - i][rookPos.x].eat === "white") 
                                        || (playerTr % 2 === 0 && updateCases[rookPos.y - i][rookPos.x].eat === "black")){
                                            path2 = false                                    
                                    }
                        } 
                        if(rookPos.x + i < 8 && path3) {

                                    if(updateCases[rookPos.y][rookPos.x + i].empty === true){
                                        updateCases[rookPos.y][rookPos.x + i].selected = "tomove" 
                                        updateCases[rookPos.y][rookPos.x + i].index = index 
                                        updateCases[rookPos.y][rookPos.x + i].color= color 
                                        updateCases[rookPos.y][rookPos.x + i].pieceName= "rook" }

                                    if((playerTr % 2 === 0 && updateCases[rookPos.y][rookPos.x + i].eat === "white") || (playerTr % 2 !== 0 && updateCases[rookPos.y][rookPos.x + i].eat === "black")){
                                            path3 = false
                                            updateCases[rookPos.y][rookPos.x + i].selected = "tomove" 
                                            updateCases[rookPos.y][rookPos.x + i].index = index
                                            updateCases[rookPos.y][rookPos.x + i].color= color 
                                            updateCases[rookPos.y][rookPos.x + i].pieceName= "rook"                                          
                                    }
                                    if((playerTr % 2 !== 0 && updateCases[rookPos.y][rookPos.x + i].eat === "white") || (playerTr % 2 === 0 && updateCases[rookPos.y][rookPos.x + i].eat === "black")){
                                            path3 = false                                          
                                    }
                        }
                        if(rookPos.x - i >= 0 && path4){
                            if(updateCases[rookPos.y][rookPos.x - i].empty === true){
                                updateCases[rookPos.y][rookPos.x - i].selected = "tomove";
                                updateCases[rookPos.y][rookPos.x - i].index = index 
                                updateCases[rookPos.y][rookPos.x - i].color= color;
                                updateCases[rookPos.y][rookPos.x - i].pieceName= "rook";}
                            if((playerTr % 2 === 0 && updateCases[rookPos.y][rookPos.x - i].eat === "white") || (playerTr % 2 !== 0 && updateCases[rookPos.y][rookPos.x - i].eat === "black")){
                                    path4 = false
                                    updateCases[rookPos.y][rookPos.x - i].selected = "tomove" 
                                    updateCases[rookPos.y][rookPos.x - i].index = index
                                    updateCases[rookPos.y][rookPos.x - i].color= color
                                    updateCases[rookPos.y][rookPos.x - i].pieceName= "rook"                                          
                            }
                            if((playerTr % 2 !== 0 && updateCases[rookPos.y][rookPos.x - i].eat === "white") || (playerTr % 2 === 0 && updateCases[rookPos.y][rookPos.x - i].eat === "black")){
                                    path4 = false
                            }
                        }                                                        
            }
            return updateCases
        })
    }
    
}

export { MovePiece, RookMethods}