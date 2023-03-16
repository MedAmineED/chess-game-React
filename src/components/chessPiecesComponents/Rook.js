function Rook (props) {
    if(props.pColor === "white") {
        return (
        <div><img src="chessPiciesImg/Chess_rlt60.png" /></div>
    )
    }else {
        return (
            <div><img src="chessPiciesImg/Chess_rdt60.png" /></div>
        )
    }
    

    
}

export default Rook