import King from "../chessPiecesComponents/King";
import Pawn from "../chessPiecesComponents/Pawn"


function Case (props) {
    return (
        <div className= {props.clCase} >
            <Pawn pos = {props.pos} />
            <King pos = {props.pos} />
        </div>
    )
}

export default Case