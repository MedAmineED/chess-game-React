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


class KnightMethods extends MovePiece {
    constructor (index, color, casePos, pieceName,allCases, 
                    setCase,  board, setBoard,newPos, whitePiece,
                    setWhitePiece, blackPiece,setBlackPiece, playerTurn) {
        super (index, color, casePos, pieceName,allCases, 
                    setCase,  board, setBoard,newPos, whitePiece,
                    setWhitePiece, blackPiece,setBlackPiece, playerTurn)
    }


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
                if((updateCases[knightPos.y  + 2][knightPos.x + 1].empty)
                ||((playerTr % 2 === 0 && updateCases[knightPos.y  + 2][knightPos.x + 1].eat === "white") 
                || (playerTr % 2 !== 0 && updateCases[knightPos.y  + 2][knightPos.x + 1].eat === "black"))){
                    updateCases[knightPos.y  + 2][knightPos.x + 1].selected = "tomove" 
                    updateCases[knightPos.y  + 2][knightPos.x + 1].index = index
                    updateCases[knightPos.y  + 2][knightPos.x + 1].color= color 
                    updateCases[knightPos.y  + 2][knightPos.x + 1].pieceName= "knight"
                }
            }


            if(knightPos.y + 2 < 8 && knightPos.x - 1 >= 0) {
                    if((updateCases[knightPos.y  + 2][knightPos.x - 1].empty)
                        ||((playerTr % 2 === 0 && updateCases[knightPos.y  + 2][knightPos.x - 1].eat === "white") 
                        || (playerTr % 2 !== 0 && updateCases[knightPos.y  + 2][knightPos.x - 1].eat === "black"))){
                            updateCases[knightPos.y  + 2][knightPos.x - 1].selected = "tomove"
                            updateCases[knightPos.y  + 2][knightPos.x - 1].index = index
                            updateCases[knightPos.y  + 2][knightPos.x - 1].color= color 
                            updateCases[knightPos.y  + 2][knightPos.x - 1].pieceName= "knight"}
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





    selectPath = (index, bishopPos, color, playerTr)=> {
        this.setCase((cs)=> {
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
                        if(bishopPos.y  + i < 8 && bishopPos.x + i < 8 && path1) {
                                    if(updateCases[bishopPos.y  + i][bishopPos.x + i].empty){
                                            updateCases[bishopPos.y  + i][bishopPos.x + i].selected = "tomove" 
                                            updateCases[bishopPos.y  + i][bishopPos.x + i].index = index
                                            updateCases[bishopPos.y  + i][bishopPos.x + i].color= color 
                                            updateCases[bishopPos.y  + i][bishopPos.x + i].pieceName= "bishop"
                                    }
                                    if((playerTr % 2 === 0 && updateCases[bishopPos.y + i][bishopPos.x + i].eat === "white") 
                                        || (playerTr % 2 !== 0 && updateCases[bishopPos.y + i][bishopPos.x + i].eat === "black"))
                                        {
                                            path1 = false;
                                            updateCases[bishopPos.y  + i][bishopPos.x + i].selected = "tomove" 
                                            updateCases[bishopPos.y  + i][bishopPos.x + i].index = index
                                            updateCases[bishopPos.y  + i][bishopPos.x + i].color= color 
                                            updateCases[bishopPos.y  + i][bishopPos.x + i].pieceName= "bishop"
                                        }
                                    if((playerTr % 2 !== 0 && updateCases[bishopPos.y + i][bishopPos.x + i].eat === "white") 
                                        || (playerTr % 2 === 0 && updateCases[bishopPos.y + i][bishopPos.x + i].eat === "black"))
                                        {
                                           path1 = false   
                                        }
                        }

                        if(bishopPos.y - i >= 0 && bishopPos.x - i >= 0 && path2) {
                                    if(updateCases[bishopPos.y  - i][bishopPos.x - i].empty){
                                        updateCases[bishopPos.y - i][bishopPos.x - i].selected = "tomove";
                                        updateCases[bishopPos.y - i][bishopPos.x - i].index = index;
                                        updateCases[bishopPos.y - i][bishopPos.x - i].color= color;
                                        updateCases[bishopPos.y - i][bishopPos.x - i].pieceName= "bishop";
                                    }
                                    if((playerTr % 2 === 0 && updateCases[bishopPos.y - i][bishopPos.x - i].eat === "white") 
                                       || (playerTr % 2 !== 0 && updateCases[bishopPos.y - i][bishopPos.x - i].eat === "black"))
                                       {
                                            path2 = false
                                            updateCases[bishopPos.y - i][bishopPos.x - i].selected = "tomove";
                                            updateCases[bishopPos.y - i][bishopPos.x - i].index = index;
                                            updateCases[bishopPos.y - i][bishopPos.x - i].color= color;
                                            updateCases[bishopPos.y - i][bishopPos.x - i].pieceName= "bishop";
                                        }
                                    if((playerTr % 2 !== 0 && updateCases[bishopPos.y - i][bishopPos.x - i].eat === "white") 
                                       || (playerTr % 2 === 0 && updateCases[bishopPos.y - i][bishopPos.x - i].eat === "black"))
                                       {
                                            path2 = false   
                                       }
                        } 


                        if(bishopPos.y + i < 8 && bishopPos.x - i >= 0 && path3) {
                                if(updateCases[bishopPos.y + i][bishopPos.x - i].empty){
                                            updateCases[bishopPos.y + i][bishopPos.x - i].selected = "tomove" 
                                            updateCases[bishopPos.y + i][bishopPos.x - i].index = index 
                                            updateCases[bishopPos.y + i][bishopPos.x - i].color= color 
                                            updateCases[bishopPos.y + i][bishopPos.x - i].pieceName= "bishop"
                                }
                                if((playerTr % 2 === 0 && updateCases[bishopPos.y + i][bishopPos.x - i].eat === "white")
                                  || (playerTr % 2 !== 0 && updateCases[bishopPos.y + i][bishopPos.x - i].eat === "black"))
                                  {
                                        path3 = false
                                        updateCases[bishopPos.y + i][bishopPos.x - i].selected = "tomove" 
                                        updateCases[bishopPos.y + i][bishopPos.x - i].index = index 
                                        updateCases[bishopPos.y + i][bishopPos.x - i].color= color 
                                        updateCases[bishopPos.y + i][bishopPos.x - i].pieceName= "bishop"
                                   }
                                if((playerTr % 2 !== 0 && updateCases[bishopPos.y + i][bishopPos.x - i].eat === "white")
                                  || (playerTr % 2 === 0 && updateCases[bishopPos.y + i][bishopPos.x - i].eat === "black"))
                                  {
                                    path3 = false   
                                  }

                        }
                        if(bishopPos.y - i >= 0 && bishopPos.x + i < 8 && path4) {
                            if(updateCases[bishopPos.y - i][bishopPos.x + i].empty){
                                        updateCases[bishopPos.y - i][bishopPos.x + i].selected = "tomove" 
                                        updateCases[bishopPos.y - i][bishopPos.x + i].index = index 
                                        updateCases[bishopPos.y - i][bishopPos.x + i].color= color 
                                        updateCases[bishopPos.y - i][bishopPos.x + i].pieceName= "bishop" 
                            }
                            if((playerTr % 2 === 0 && updateCases[bishopPos.y - i][bishopPos.x + i].eat === "white") 
                                || (playerTr % 2 !== 0 && updateCases[bishopPos.y - i][bishopPos.x + i].eat === "black"))
                                {
                                    path4 = false
                                    updateCases[bishopPos.y - i][bishopPos.x + i].selected = "tomove" 
                                    updateCases[bishopPos.y - i][bishopPos.x + i].index = index 
                                    updateCases[bishopPos.y - i][bishopPos.x + i].color= color 
                                    updateCases[bishopPos.y - i][bishopPos.x + i].pieceName= "bishop"                                                     
                                }
                            if((playerTr % 2 !== 0 && updateCases[bishopPos.y - i][bishopPos.x + i].eat === "white") 
                               || (playerTr % 2 === 0 && updateCases[bishopPos.y - i][bishopPos.x + i].eat === "black"))
                                {
                                    path4 = false   
                                }
                }
            }
            return updateCases
        })
    }
}


class KingMethods extends MovePiece {    
    constructor (index, color, casePos, pieceName,allCases, 
                            setCase,  board, setBoard,newPos, whitePiece,
                            setWhitePiece, blackPiece,setBlackPiece, playerTurn) {

                        super(index, color, casePos, pieceName,allCases, 
                                    setCase,  board, setBoard,newPos, whitePiece,
                                    setWhitePiece, blackPiece,setBlackPiece, playerTurn)
    }

    
    
    selectPath = (index, kingPos, color, playerTr)=> {

        this.setCase((cs)=> {
            const updateCases = [...cs];
            updateCases.forEach((el)=> {
                el.forEach((el1)=> {
                    el1.selected = false;
                })
            })
            if(kingPos.y + 1 < 8){
                if((updateCases[kingPos.y  + 1][kingPos.x].empty || ((playerTr % 2 === 0 && updateCases[kingPos.y  + 1][kingPos.x].eat === "white") 
                || (playerTr % 2 !== 0 && updateCases[kingPos.y  + 1][kingPos.x].eat === "black")))){
                    updateCases[kingPos.y  + 1][kingPos.x].selected = "tomove";
                    updateCases[kingPos.y  + 1][kingPos.x].index = index;
                    updateCases[kingPos.y  + 1][kingPos.x].pieceName = "king";
                    updateCases[kingPos.y  + 1][kingPos.x].color= color;
                }
            }
            if(kingPos.x + 1 < 8){
                if((updateCases[kingPos.y][kingPos.x + 1].empty||((playerTr % 2 === 0 && updateCases[kingPos.y][kingPos.x + 1].eat === "white") 
                || (playerTr % 2 !== 0 && updateCases[kingPos.y][kingPos.x + 1].eat === "black")))){
                    updateCases[kingPos.y][kingPos.x + 1].selected = "tomove";
                    updateCases[kingPos.y][kingPos.x + 1].index = index;
                    updateCases[kingPos.y][kingPos.x + 1].pieceName = "king";
                    updateCases[kingPos.y][kingPos.x + 1].color= color;
                }
            }
            if(kingPos.x - 1 >= 0){
                if((updateCases[kingPos.y][kingPos.x - 1].empty)||((playerTr % 2 === 0 && updateCases[kingPos.y][kingPos.x - 1].eat === "white") 
                || (playerTr % 2 !== 0 && updateCases[kingPos.y][kingPos.x - 1].eat === "black"))){
                    updateCases[kingPos.y][kingPos.x - 1].selected = "tomove";
                    updateCases[kingPos.y][kingPos.x - 1].index = index;
                    updateCases[kingPos.y][kingPos.x - 1].pieceName = "king";
                    updateCases[kingPos.y][kingPos.x - 1].color= color;
                }
            }
            if(kingPos.y - 1 >= 0) {
                if((updateCases[kingPos.y - 1][kingPos.x].empty)
                    ||((playerTr % 2 === 0 && updateCases[kingPos.y - 1][kingPos.x].eat === "white") 
                    || (playerTr % 2 !== 0 && updateCases[kingPos.y - 1][kingPos.x].eat === "black"))){
                        updateCases[kingPos.y - 1][kingPos.x].selected = "tomove";
                        updateCases[kingPos.y - 1][kingPos.x].index = index;
                        updateCases[kingPos.y - 1][kingPos.x].pieceName = "king";
                        updateCases[kingPos.y - 1][kingPos.x].color= color;
                }
            }
            if(kingPos.y + 1 < 8 && kingPos.x + 1 < 8) {
                if((updateCases[kingPos.y + 1][kingPos.x + 1].empty)
                    ||((playerTr % 2 === 0 && updateCases[kingPos.y + 1][kingPos.x + 1].eat === "white") 
                    || (playerTr % 2 !== 0 && updateCases[kingPos.y + 1][kingPos.x + 1].eat === "black"))){
                            updateCases[kingPos.y + 1][kingPos.x + 1].selected = "tomove";
                            updateCases[kingPos.y + 1][kingPos.x + 1].index = index;
                            updateCases[kingPos.y + 1][kingPos.x + 1].pieceName = "king";
                            updateCases[kingPos.y + 1][kingPos.x + 1].color= color;
                }
            }
            if(kingPos.y - 1 >= 0 && kingPos.x - 1 >= 0) {
                if((updateCases[kingPos.y - 1][kingPos.x - 1].empty)
                    ||((playerTr % 2 === 0 && updateCases[kingPos.y - 1][kingPos.x - 1].eat === "white") 
                    || (playerTr % 2 !== 0 && updateCases[kingPos.y - 1][kingPos.x - 1].eat === "black"))){
                            updateCases[kingPos.y - 1][kingPos.x - 1].selected = "tomove";
                            updateCases[kingPos.y - 1][kingPos.x - 1].index = index;
                            updateCases[kingPos.y - 1][kingPos.x - 1].pieceName = "king";
                            updateCases[kingPos.y - 1][kingPos.x - 1].color= color;
                }
            }
            if(kingPos.y + 1 < 8 && kingPos.x - 1 >= 0) {
                if((updateCases[kingPos.y + 1][kingPos.x - 1].empty)
                   ||((playerTr % 2 === 0 && updateCases[kingPos.y + 1][kingPos.x - 1].eat === "white") 
                   || (playerTr % 2 !== 0 && updateCases[kingPos.y + 1][kingPos.x - 1].eat === "black"))){
                            updateCases[kingPos.y + 1][kingPos.x - 1].selected = "tomove";
                            updateCases[kingPos.y + 1][kingPos.x - 1].index = index;
                            updateCases[kingPos.y + 1][kingPos.x - 1].pieceName = "king";
                            updateCases[kingPos.y + 1][kingPos.x - 1].color= color;
                }
            }
            if(kingPos.y - 1 >= 0 && kingPos.x + 1 < 8) {
                if((updateCases[kingPos.y - 1][kingPos.x + 1].empty)
                    ||((playerTr % 2 === 0 && updateCases[kingPos.y - 1][kingPos.x + 1].eat === "white") 
                    || (playerTr % 2 !== 0 && updateCases[kingPos.y - 1][kingPos.x + 1].eat === "black"))){
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
export { MovePiece, RookMethods, KnightMethods, BishopMethods, KingMethods }