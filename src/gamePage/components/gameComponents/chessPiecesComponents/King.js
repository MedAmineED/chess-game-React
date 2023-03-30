import { useContext } from "react"
import { PlayTr } from "../../GameSpace";




function King (props) {

    

    const playerTurn = useContext(PlayTr)

    const hanDleClickMove = ()=> {
        if(playerTurn % 2 === 0 && props.data.color === "white") {return}
         if(playerTurn % 2 !== 0 && props.data.color === "black") {return}
        props.selectPath(props.data.id, props.position, props.data.color, props.data.name, playerTurn)
    }
    if (props.data.color === 'white') {
        return <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_klt60.png" /></div>
    }else {
        return <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_kdt60.png" /></div>
    }


    

    
}

export default King