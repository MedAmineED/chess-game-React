function Bishop (props) {
    if(props.pColor === "white"){
        return <div><img src="chessPiciesImg/Chess_blt60.png" /></div> 
    }else {
          return <div><img src="chessPiciesImg/Chess_bdt60.png" /></div>    }
}

export default Bishop