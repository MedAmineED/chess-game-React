/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import './CheckModal.css'

import { Check } from "../GameSpace";

function CheckModal () {

    const [top, setTop] = useState(0)
    const [display, setDisplay] = useState("none")
    const [opacity, setOpacity] = useState(0)

    const check = useContext(Check)

    const style = {top : ` ${50 - top}%`,
                    display : display,
                    opacity : opacity}

    useEffect(()=> {
        if(check){
            setTimeout(()=>{
                setDisplay("block")
                setTimeout(()=>{
                    setOpacity(1)
                        setTimeout(()=>{
                            setTop(20)
                            setTimeout(()=> {
                                setOpacity(0)
                                setTimeout(()=>{
                                    setTop(0)
                                    setDisplay("none")
                                },500)
                            }, 100)
                        },1000)
                },100)
            },100)
        }
        
    }, [check])

    return (
        <div className="check" style={style}>
            <h1>check</h1>
        </div>
    )
}


export default CheckModal