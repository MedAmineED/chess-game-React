import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect, useState } from 'react';
import Case from '../case/Case';
import './table.css'
import Pawn from '../chessPiecesComponents/Pawn'
import King from '../chessPiecesComponents/King'
import Queen from '../chessPiecesComponents/Queen'
import Bishop from '../chessPiecesComponents/Bishop'
import Knight from '../chessPiecesComponents/Knight'
import Rook from '../chessPiecesComponents/Rook'


function Table ()  {
    const [usePosPawn, setPosPawn] = useState([
                                                {x:0, y:0},
                                                {x:0, y:0},
                                                {x:0, y:0},
                                                {x:0, y:0},
                                                {x:0, y:0},
                                                {x:0, y:0},
                                                {x:0, y:0},
                                                {x:0, y:0}
                                            ]);
       
   let arrTable = [["1","2","3","4","5","6","7","8"],["A","B","C","D","E","F","G","H"]];//bord map 

   let myFixedArr =  [arrTable[0], arrTable[1].reverse()];

   const move = (n) => {
        
            setPosPawn(st => {
            const updatedState = [...st];
            updatedState[n] = {y : st[n].y + 1};
            return updatedState;
            });
  };


   const myCases = ()=> {
        let num = 0;
        let cases = [];
        
        //--set cases and color cases--
        for (let i = 0; i < 8; i++) {                              //row 
                for (let j = 0; j < 8; j++) {                      //colomns
                    
                    const row = i + 1;
                    const col = j + 1;
                    
                    const position = {                             //refrence of position
                        y : row,
                        x : 9 - col
                    }
                    
                    if ((row % 2) === 0 && (col % 2)!==0) {
                            cases.push(<div key={myFixedArr[1][j]+ myFixedArr[0][i]} className= {`case black-player ${myFixedArr[1][j]}${myFixedArr[0][i]}`} >
                                            
                                            <Pawn pos = {position} 
                                                 newPos = {usePosPawn[j]} 
                                                 myRef = {`${position.x}${position.y}`} 
                                                 move = {move}
                                                 n = {num}
                                                 onRender={() => { num++; }}
                                                 />
                                            <King pos = {position} />
                                            <Queen pos = {position}/>
                                            <Bishop pos = {position}/>
                                            <Knight pos = {position}/>
                                            <Rook  pos = {position}/>
                                        </div>

                    )}
                    
                    else if ((row % 2) !== 0 && (col % 2)===0) {
                            cases.push(<div key={myFixedArr[1][j] + myFixedArr[0][i]} className= {`case black-player ${myFixedArr[1][j]}${myFixedArr[0][i]}`} >
                                            <Pawn move = {move} 
                                                    pos = {position} 
                                                    newPos = {usePosPawn[j]} 
                                                    myRef = {`${position.x}${position.y}`}
                                                    n = {num}
                                                    onRender={() => { num++; }}
                                                    /> 
                                            <King pos = {position}/>
                                            <Queen pos = {position}/>
                                            <Bishop pos = {position}/>
                                            <Knight pos = {position}/>
                                            <Rook  pos = {position}/>
                                       </div>
                                            )
                    }


                    else {
                        cases.push(<div key={myFixedArr[1][j] + myFixedArr[0][i]} className= {`case white-player ${myFixedArr[1][j]}${myFixedArr[0][i]}`} >
                                        <Pawn move = {move} 
                                                pos = {position} 
                                                newPos = {usePosPawn[j]} 
                                                myRef = {`${position.x}${position.y}`}
                                                n = {num}
                                                onRender={() => { num++; }}
                                                />
                                        <King pos = {position} />
                                        <Queen pos = {position}/>
                                        <Bishop pos = {position}/>
                                        <Knight pos = {position}/>
                                        <Rook  pos = {position}/>
                                    </div>)
                    }
                }
            }
        return cases.reverse()
    }

    return (
       
        <>
            <div className='container'>
              <div className='table'>
                    {myCases()}
                </div>
            </div>
        </>
    )
}


export default Table