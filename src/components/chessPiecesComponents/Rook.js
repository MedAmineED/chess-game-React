function Rook (props) {
    return (
        props.pos.y === 1 && (props.pos.x === 1 || props.pos.x ===  8)? <div><img src="chessPiciesImg/Chess_rlt60.png" /></div>: null
    )

    
}

export default Rook