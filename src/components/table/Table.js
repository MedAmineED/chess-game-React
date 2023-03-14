import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect, useState } from 'react';
import Case from '../case/Case';
import './table.css'


function Table ()  {


   let arrTable = [["1","2","3","4","5","6","7","8"],["A","B","C","D","E","F","G","H"]];//bord map 

   let myFixedArr =  [arrTable[0], arrTable[1].reverse()];
//    myFixedArr.push(arrTable[1].reverse())


    const myCases = ()=> {
        console.log("working");
        let cases = [];


          //----------------------------- 
          //--set cases and color cases
          //----------------------------- 
        for (let i = 0; i < 8; i++) {                              //row 
                for (let j = 0; j < 8; j++) {                      //colomns
                    
                    const row = i + 1;
                    const col = j + 1;
                    
                    const position = {                             // refrence of position
                        y : row,
                        x : 9 - col
                    }
                    
                    if ((row % 2) === 0 && (col % 2)!==0) {
                            cases.push(<Case  key={`${myFixedArr[0][i]}${(myFixedArr[1])[j]}`} 
                                              pos = {position}
                                              clCase = {`case black-player ${myFixedArr[0][i]}${myFixedArr[1][j]}`}/>)
                    }
                    
                    else if ((row % 2) !== 0 && (col % 2)===0) {
                            cases.push(<Case key={`${myFixedArr[0][i]}${myFixedArr[1][j]}`} 
                                             pos = {position}
                                             clCase= {`case black-player ${myFixedArr[0][i]}${myFixedArr[1][j]}`}/>
                                            )
                    }


                    else {
                        cases.push(<Case key={`${myFixedArr[0][i]}${myFixedArr[1][j]}`} 
                                         pos = {position}
                                         clCase= {`case white-player ${myFixedArr[0][i]}${myFixedArr[1][j]}`}/>
                                        )
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