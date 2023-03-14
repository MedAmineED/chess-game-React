function Bishop (props) {
    return (
        props.pos.y === 1 && (props.pos.x === 3 || props.pos.x ===  6)? <div><img src="chessPiciesImg/Chess_blt60.png" /></div>: null
    )
}

export default Bishop