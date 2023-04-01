import { useContext, useEffect, useState } from "react"
import { PlayTr, Start } from "../../GameSpace";



function Bishop (props) {

    const playerTurn = useContext(PlayTr);
    const start = useContext(Start);


    const [canPlay, setCanPlay] = useState(false)
    
    useEffect(()=>{
        console.log(start);
        setCanPlay(start)
    }, [start])


    const hanDleClickMove = ()=> {
        if(playerTurn % 2 === 0 && props.data.color === "white") {return}
         if(playerTurn % 2 !== 0 && props.data.color === "black") {return}
         console.log(playerTurn);
        props.selectPath(props.data.id, props.position, props.data.color, props.data.name, playerTurn, canPlay)
    }
    if(props.data.color === "white"){
        return <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_blt60.png" /></div> 
    }else {
          return <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_bdt60.png" /></div>    }
}

export default Bishop