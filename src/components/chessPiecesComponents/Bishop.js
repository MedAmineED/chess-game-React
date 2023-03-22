function Bishop (props) {
    const hanDleClickMove = ()=> {
        props.selectPath(props.data.id, props.position, props.data.color)
    }
    if(props.data.color === "white"){
        return <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_blt60.png" /></div> 
    }else {
          return <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_bdt60.png" /></div>    }
}

export default Bishop