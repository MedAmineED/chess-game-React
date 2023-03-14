function Queen (props) {
    return (
        props.pos.y === 1 && props.pos.x === 4? <div><img src="chessPiciesImg/Chess_qlt60.png" /></div>: null

    )

    
}

export default Queen