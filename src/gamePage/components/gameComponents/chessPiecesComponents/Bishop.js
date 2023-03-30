import { useContext } from "react"
import { PlayTr } from "../../GameSpace";



function Bishop (props) {

    const playerTurn = useContext(PlayTr);

    const hanDleClickMove = ()=> {
        if(playerTurn % 2 === 0 && props.data.color === "white") {return}
         if(playerTurn % 2 !== 0 && props.data.color === "black") {return}
         console.log(playerTurn);
        props.selectPath(props.data.id, props.position, props.data.color, props.data.name, playerTurn)
    }
    if(props.data.color === "white"){
        return <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_blt60.png" /></div> 
    }else {
          return <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_bdt60.png" /></div>    }
}

export default Bishop