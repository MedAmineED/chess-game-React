function Queen (props) {

    if (props.pColor === 'white') {
        return (<div><img src="chessPiciesImg/Chess_qlt60.png" /></div>)
    }else {
        return (<div><img src="chessPiciesImg/Chess_qdt60.png" /></div>)
    }
    

    
}

export default Queen