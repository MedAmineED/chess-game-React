/* eslint-disable no-useless-constructor */
import { selectDiagonalPath, selectHorizontalPath, selectVerticalPath } from "./selectPathFunctions/selectPathFunctions";

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

                                    await  this.playerTurn()
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

                                    await   this.playerTurn()
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


class PawnMethods extends MovePiece {
    constructor (index, color, casePos, pieceName,allCases, 
        setCase,  board, setBoard,newPos, whitePiece,
        setWhitePiece, blackPiece,setBlackPiece, playerTurn) {

    super(index, color, casePos, pieceName,allCases, 
                setCase,  board, setBoard,newPos, whitePiece,
                setWhitePiece, blackPiece,setBlackPiece, playerTurn)
    }

    selectPath = async (index, pawnPos, color)=> {
        if(color === "white") {
                                this.setCase((cs)=> {
                                    const updaECases = [...cs];
                                    updaECases.forEach((el)=> {
                                        el.forEach((el1)=> {
                                            el1.selected = false;
                                        })
                                    })

                                    if(updaECases[pawnPos.y  + 1][pawnPos.x].empty){
                                            updaECases[pawnPos.y  + 1][pawnPos.x].selected = "tomove";
                                            updaECases[pawnPos.y  + 1][pawnPos.x].index = index;
                                            updaECases[pawnPos.y  + 1][pawnPos.x].pieceName = "pawn";
                                            updaECases[pawnPos.y  + 1][pawnPos.x].color= color;}
                                    
                                    
                                    if(pawnPos.y === 1 && updaECases[pawnPos.y  + 2][pawnPos.x].empty
                                        &&updaECases[pawnPos.y + 1][pawnPos.x].empty){
                                            pawnPos.y === 1? updaECases[pawnPos.y  + 2][pawnPos.x].selected = "tomove": updaECases[pawnPos.y  + 2] !== undefined? updaECases[pawnPos.y  + 2][pawnPos.x].selected = false: console.log("end"); 
                                            pawnPos.y === 1? updaECases[pawnPos.y  + 2][pawnPos.x].index = index: updaECases[pawnPos.y  + 2] === undefined? console.log("end"): console.log("end"); 
                                            pawnPos.y === 1? updaECases[pawnPos.y  + 2][pawnPos.x].color = color: updaECases[pawnPos.y  + 2] === undefined? console.log("end"): console.log("end"); 
                                            pawnPos.y === 1? updaECases[pawnPos.y  + 2][pawnPos.x].pieceName = "pawn": updaECases[pawnPos.y  + 2] === undefined? console.log("end"): console.log("end");} 
                                    
                                    
                                    if(pawnPos.y + 1 < 8 && pawnPos.x + 1 < 8 && updaECases[pawnPos.y  + 1][pawnPos.x + 1].eat === "black") {
                                            updaECases[pawnPos.y  + 1][pawnPos.x + 1].selected = "tomove";
                                            updaECases[pawnPos.y  + 1][pawnPos.x + 1].color = color;
                                            updaECases[pawnPos.y  + 1][pawnPos.x + 1].index = index;
                                            updaECases[pawnPos.y  + 1][pawnPos.x + 1].pieceName = "pawn";
                                    }
                                    
                                    if(pawnPos.y + 1 < 8 && pawnPos.x - 1 >=0 && updaECases[pawnPos.y  + 1][pawnPos.x - 1].eat === "black") {
                                            updaECases[pawnPos.y  + 1][pawnPos.x - 1].selected = "tomove";
                                            updaECases[pawnPos.y  + 1][pawnPos.x - 1].color = color;
                                            updaECases[pawnPos.y  + 1][pawnPos.x - 1].index = index;
                                            updaECases[pawnPos.y  + 1][pawnPos.x - 1].pieceName = "pawn";
                                    }
                                    return updaECases
                                })
                    }else if(color === "black") {
                        this.setCase((cs)=> {
                            const updaECases = [...cs];
                            updaECases.forEach((el)=> {
                                el.forEach((el1)=> {
                                    el1.selected = false;
                                })
                            })

                            if(pawnPos.y === 6 && updaECases[pawnPos.y  - 2][pawnPos.x].empty 
                                &&updaECases[pawnPos.y  - 1][pawnPos.x].empty){
                                pawnPos.y === 6? updaECases[pawnPos.y  - 2][pawnPos.x].selected = "tomove": updaECases[pawnPos.y  - 2] !== undefined? updaECases[pawnPos.y  - 2][pawnPos.x].selected = false: console.log("end"); 
                                pawnPos.y === 6? updaECases[pawnPos.y  - 2][pawnPos.x].index = index: updaECases[pawnPos.y  - 2] === undefined? console.log("end"): console.log("end"); 
                                pawnPos.y === 6? updaECases[pawnPos.y  - 2][pawnPos.x].color = color: updaECases[pawnPos.y  - 2] === undefined? console.log("end"): console.log("end"); 
                                pawnPos.y === 6? updaECases[pawnPos.y  - 2][pawnPos.x].pieceName = "pawn": updaECases[pawnPos.y  - 2] === undefined? console.log("end"): console.log("end"); }



                            if(updaECases[pawnPos.y  - 1][pawnPos.x].empty){
                                updaECases[pawnPos.y  - 1][pawnPos.x].selected = "tomove";
                                updaECases[pawnPos.y  - 1][pawnPos.x].index = index;
                                updaECases[pawnPos.y  - 1][pawnPos.x].color= color;
                                updaECases[pawnPos.y  - 1][pawnPos.x].pieceName = "pawn";}

                            if(pawnPos.y - 1 >= 0 && pawnPos.x + 1 < 8 && updaECases[pawnPos.y  - 1][pawnPos.x + 1].eat === "white") {
                                    updaECases[pawnPos.y  - 1][pawnPos.x + 1].selected = "tomove";
                                    updaECases[pawnPos.y  - 1][pawnPos.x + 1].color = color;
                                    updaECases[pawnPos.y  - 1][pawnPos.x + 1].index = index;
                                    updaECases[pawnPos.y  - 1][pawnPos.x + 1].pieceName = "pawn";
                                }
                                
                            if(pawnPos.y - 1 >= 0 && pawnPos.x - 1 >=0 && updaECases[pawnPos.y  - 1][pawnPos.x - 1].eat === "white") {
                                    updaECases[pawnPos.y  - 1][pawnPos.x - 1].selected = "tomove";
                                    updaECases[pawnPos.y  - 1][pawnPos.x - 1].color = color;
                                    updaECases[pawnPos.y  - 1][pawnPos.x - 1].index = index;
                                    updaECases[pawnPos.y  - 1][pawnPos.x - 1].pieceName = "pawn";
                                }
                            return updaECases
                        })
                    }
                                
                }


}


class RookMethods extends MovePiece {

    selectPath = async (index, rookPos, color, playerTr, pieceName)=> {
        await this.setCase((cs)=> {
            const updateCases = [...cs];
            updateCases.forEach((el)=> {
                el.forEach((el1)=> {
                    el1.selected = false;
                    el1.pieceName = ""
                    el1.color= ""
                })
            })
                    selectVerticalPath(index, rookPos, color, pieceName, playerTr, updateCases)
                    selectHorizontalPath(index, rookPos, color, pieceName, playerTr, updateCases)
            return updateCases
        })
    }
    
}


class KnightMethods extends MovePiece {


    selectPath = (index, knightPos, color, playerTr)=> {

        this.setCase((cs)=> {
            const updateCases = [...cs];
            updateCases.forEach((el)=> {
                el.forEach((el1)=> {
                    el1.selected = false;
                    el1.pieceName = ""
                    el1.color= ""
                })
            })
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

            
            
            return updateCases
        })
    }
}


class BishopMethods extends MovePiece {
    constructor (index, color, casePos, pieceName,allCases, 
                setCase,  board, setBoard,newPos, whitePiece,
                setWhitePiece, blackPiece,setBlackPiece, playerTurn) {

                super(index, color, casePos, pieceName,allCases, 
                    setCase,  board, setBoard,newPos, whitePiece,
                    setWhitePiece, blackPiece,setBlackPiece, playerTurn)
            }
            
            
    selectPath = (index, bishopPos, color, playerTr, pieceName)=> {
                this.setCase((cs)=> {
                    const updateCases = [...cs];
                    updateCases.forEach((el)=> {
                        el.forEach((el1)=> {
                            el1.selected = false;
                            el1.pieceName = ""
                            el1.color= ""
                        })
                    })
            selectDiagonalPath(index, bishopPos, color, pieceName, playerTr, updateCases)
            return updateCases
        })
    }
}


class KingMethods extends MovePiece {    

    
    
    selectPath = (index, kingPos, color, playerTr)=> {

        this.setCase((cs)=> {
            const updateCases = [...cs];
            updateCases.forEach((el)=> {
                el.forEach((el1)=> {
                    el1.selected = false;
                })
            })
            if(kingPos.y + 1 < 8){
                if((updateCases[kingPos.y + 1][kingPos.x].empty && playerTr % 2 === 0 &&  updateCases[kingPos.y + 1][kingPos.x].danger.whiteDanger === 0) 
                ||(updateCases[kingPos.y + 1][kingPos.x].empty && playerTr % 2 !== 0 &&  updateCases[kingPos.y + 1][kingPos.x].danger.blackDanger === 0) 
                ||((playerTr % 2 === 0 && updateCases[kingPos.y + 1][kingPos.x].eat === "white" &&  updateCases[kingPos.y + 1][kingPos.x].danger.whiteDanger === 0) 
                || (playerTr % 2 !== 0 && updateCases[kingPos.y + 1][kingPos.x].eat === "black" &&  updateCases[kingPos.y + 1][kingPos.x].danger.blackDanger === 0))){
                    updateCases[kingPos.y + 1][kingPos.x].selected = "tomove";
                    updateCases[kingPos.y + 1][kingPos.x].index = index;
                    updateCases[kingPos.y + 1][kingPos.x].pieceName = "king";
                    updateCases[kingPos.y + 1][kingPos.x].color= color;
                }
            }
            if(kingPos.x + 1 < 8){
                if((updateCases[kingPos.y][kingPos.x + 1].empty && playerTr % 2 === 0 &&  updateCases[kingPos.y][kingPos.x + 1].danger.whiteDanger === 0) 
                ||(updateCases[kingPos.y][kingPos.x + 1].empty && playerTr % 2 !== 0 &&  updateCases[kingPos.y][kingPos.x + 1].danger.blackDanger === 0) 
                ||((playerTr % 2 === 0 && updateCases[kingPos.y][kingPos.x + 1].eat === "white" &&  updateCases[kingPos.y][kingPos.x + 1].danger.whiteDanger === 0) 
                || (playerTr % 2 !== 0 && updateCases[kingPos.y][kingPos.x + 1].eat === "black" &&  updateCases[kingPos.y][kingPos.x + 1].danger.blackDanger === 0))){
                    updateCases[kingPos.y][kingPos.x + 1].selected = "tomove";
                    updateCases[kingPos.y][kingPos.x + 1].index = index;
                    updateCases[kingPos.y][kingPos.x + 1].pieceName = "king";
                    updateCases[kingPos.y][kingPos.x + 1].color= color;
                }
            }
            if(kingPos.x - 1 >= 0){
                if((updateCases[kingPos.y][kingPos.x - 1].empty && playerTr % 2 === 0 &&  updateCases[kingPos.y][kingPos.x - 1].danger.whiteDanger === 0) 
                ||(updateCases[kingPos.y][kingPos.x - 1].empty && playerTr % 2 !== 0 &&  updateCases[kingPos.y][kingPos.x - 1].danger.blackDanger === 0) 
                ||((playerTr % 2 === 0 && updateCases[kingPos.y][kingPos.x - 1].eat === "white" &&  updateCases[kingPos.y][kingPos.x - 1].danger.whiteDanger === 0) 
                || (playerTr % 2 !== 0 && updateCases[kingPos.y][kingPos.x - 1].eat === "black" &&  updateCases[kingPos.y][kingPos.x - 1].danger.blackDanger === 0))){
                    updateCases[kingPos.y][kingPos.x - 1].selected = "tomove";
                    updateCases[kingPos.y][kingPos.x - 1].index = index;
                    updateCases[kingPos.y][kingPos.x - 1].pieceName = "king";
                    updateCases[kingPos.y][kingPos.x - 1].color= color;
                }
            }
            if(kingPos.y - 1 >= 0) {
                if((updateCases[kingPos.y - 1][kingPos.x].empty && playerTr % 2 === 0 &&  updateCases[kingPos.y - 1][kingPos.x].danger.whiteDanger === 0) 
                ||(updateCases[kingPos.y - 1][kingPos.x].empty && playerTr % 2 !== 0 &&  updateCases[kingPos.y - 1][kingPos.x].danger.blackDanger === 0) 
                ||((playerTr % 2 === 0 && updateCases[kingPos.y - 1][kingPos.x].eat === "white" &&  updateCases[kingPos.y - 1][kingPos.x].danger.whiteDanger === 0) 
                || (playerTr % 2 !== 0 && updateCases[kingPos.y - 1][kingPos.x].eat === "black" &&  updateCases[kingPos.y - 1][kingPos.x].danger.blackDanger === 0))){
                        updateCases[kingPos.y - 1][kingPos.x].selected = "tomove";
                        updateCases[kingPos.y - 1][kingPos.x].index = index;
                        updateCases[kingPos.y - 1][kingPos.x].pieceName = "king";
                        updateCases[kingPos.y - 1][kingPos.x].color= color;
                }
            }
            if(kingPos.y + 1 < 8 && kingPos.x + 1 < 8) {
                if((updateCases[kingPos.y + 1][kingPos.x + 1].empty && playerTr % 2 === 0 &&  updateCases[kingPos.y + 1][kingPos.x + 1].danger.whiteDanger === 0) 
                ||(updateCases[kingPos.y + 1][kingPos.x + 1].empty && playerTr % 2 !== 0 &&  updateCases[kingPos.y + 1][kingPos.x + 1].danger.blackDanger === 0) 
                ||((playerTr % 2 === 0 && updateCases[kingPos.y + 1][kingPos.x + 1].eat === "white" &&  updateCases[kingPos.y + 1][kingPos.x + 1].danger.whiteDanger === 0) 
                || (playerTr % 2 !== 0 && updateCases[kingPos.y + 1][kingPos.x + 1].eat === "black" &&  updateCases[kingPos.y + 1][kingPos.x + 1].danger.blackDanger === 0))){
                            updateCases[kingPos.y + 1][kingPos.x + 1].selected = "tomove";
                            updateCases[kingPos.y + 1][kingPos.x + 1].index = index;
                            updateCases[kingPos.y + 1][kingPos.x + 1].pieceName = "king";
                            updateCases[kingPos.y + 1][kingPos.x + 1].color= color;
                }
            }
            if(kingPos.y - 1 >= 0 && kingPos.x - 1 >= 0) {
                if((updateCases[kingPos.y - 1][kingPos.x - 1].empty && playerTr % 2 === 0 &&  updateCases[kingPos.y - 1][kingPos.x - 1].danger.whiteDanger === 0) 
                ||(updateCases[kingPos.y - 1][kingPos.x - 1].empty && playerTr % 2 !== 0 &&  updateCases[kingPos.y - 1][kingPos.x - 1].danger.blackDanger === 0) 
                ||((playerTr % 2 === 0 && updateCases[kingPos.y - 1][kingPos.x - 1].eat === "white" &&  updateCases[kingPos.y - 1][kingPos.x - 1].danger.whiteDanger === 0) 
                || (playerTr % 2 !== 0 && updateCases[kingPos.y - 1][kingPos.x - 1].eat === "black" &&  updateCases[kingPos.y - 1][kingPos.x - 1].danger.blackDanger === 0))){
                            updateCases[kingPos.y - 1][kingPos.x - 1].selected = "tomove";
                            updateCases[kingPos.y - 1][kingPos.x - 1].index = index;
                            updateCases[kingPos.y - 1][kingPos.x - 1].pieceName = "king";
                            updateCases[kingPos.y - 1][kingPos.x - 1].color= color;
                }
            }
            if(kingPos.y + 1 < 8 && kingPos.x - 1 >= 0) {
                if((updateCases[kingPos.y + 1][kingPos.x - 1].empty && playerTr % 2 === 0 &&  updateCases[kingPos.y + 1][kingPos.x - 1].danger.whiteDanger === 0) 
                ||(updateCases[kingPos.y + 1][kingPos.x - 1].empty && playerTr % 2 !== 0 &&  updateCases[kingPos.y + 1][kingPos.x - 1].danger.blackDanger === 0) 
                ||((playerTr % 2 === 0 && updateCases[kingPos.y + 1][kingPos.x - 1].eat === "white" &&  updateCases[kingPos.y + 1][kingPos.x - 1].danger.whiteDanger === 0) 
                || (playerTr % 2 !== 0 && updateCases[kingPos.y + 1][kingPos.x - 1].eat === "black" &&  updateCases[kingPos.y + 1][kingPos.x - 1].danger.blackDanger === 0))){
                            updateCases[kingPos.y + 1][kingPos.x - 1].selected = "tomove";
                            updateCases[kingPos.y + 1][kingPos.x - 1].index = index;
                            updateCases[kingPos.y + 1][kingPos.x - 1].pieceName = "king";
                            updateCases[kingPos.y + 1][kingPos.x - 1].color= color;
                }
            }
            if(kingPos.y - 1 >= 0 && kingPos.x + 1 < 8) {
                if((updateCases[kingPos.y - 1][kingPos.x + 1].empty && playerTr % 2 === 0 &&  updateCases[kingPos.y - 1][kingPos.x + 1].danger.whiteDanger === 0) 
                ||(updateCases[kingPos.y - 1][kingPos.x + 1].empty && playerTr % 2 !== 0 &&  updateCases[kingPos.y - 1][kingPos.x + 1].danger.blackDanger === 0) 
                ||((playerTr % 2 === 0 && updateCases[kingPos.y - 1][kingPos.x + 1].eat === "white" &&  updateCases[kingPos.y - 1][kingPos.x + 1].danger.whiteDanger === 0) 
                || (playerTr % 2 !== 0 && updateCases[kingPos.y - 1][kingPos.x + 1].eat === "black" &&  updateCases[kingPos.y - 1][kingPos.x + 1].danger.blackDanger === 0))){
                            updateCases[kingPos.y - 1][kingPos.x + 1].selected = "tomove";
                            updateCases[kingPos.y - 1][kingPos.x + 1].index = index;
                            updateCases[kingPos.y - 1][kingPos.x + 1].pieceName = "king";
                            updateCases[kingPos.y - 1][kingPos.x + 1].color= color;
                }
            }
        
            return updateCases

        })
    

    
}

}


class QueenMethods extends MovePiece {
    constructor (index, color, casePos, pieceName,allCases, 
                setCase,  board, setBoard,newPos, whitePiece,
                setWhitePiece, blackPiece,setBlackPiece, playerTurn) {

        super(index, color, casePos, pieceName,allCases, 
            setCase,  board, setBoard,newPos, whitePiece,
            setWhitePiece, blackPiece,setBlackPiece, playerTurn)
    }

    selectPath = (index, bishopPos, color, playerTr, pieceName)=> {
        this.setCase((cs)=> {
            const updateCases = [...cs];
            updateCases.forEach((el)=> {
                el.forEach((el1)=> {
                    el1.selected = false;
                    el1.pieceName = ""
                    el1.color= ""
                })
            })
    selectDiagonalPath(index, bishopPos, color, pieceName, playerTr, updateCases)
    selectHorizontalPath(index, bishopPos, color, pieceName, playerTr, updateCases)
    selectVerticalPath(index, bishopPos, color, pieceName, playerTr, updateCases)
    return updateCases
})
}
}
export { MovePiece, RookMethods, KnightMethods, BishopMethods, KingMethods, QueenMethods, PawnMethods }