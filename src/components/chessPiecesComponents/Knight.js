function Knight (props) {
    if(props.pColor === "white"){
        return (<div><img src="chessPiciesImg/Chess_nlt60.png" /></div>
    )}
    else {
        return (<div><img src="chessPiciesImg/Chess_ndt60.png" /></div>)
    }
    
}

export default Knight