function Knight (props) {
    return (
        props.pos.y === 1 && (props.pos.x === 2 || props.pos.x ===  7)? <div><img src="chessPiciesImg/Chess_nlt60.png" /></div>: null
    )

    
}

export default Knight