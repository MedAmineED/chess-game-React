function King (props) {
    const hanDleClickMove = ()=> {
        console.log("t3adeet");
        props.selectPath(props.data.id, props.position, props.data.color)
    }
    if (props.data.color === 'white') {
        return <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_klt60.png" /></div>
    }else {
        return <div onClick={hanDleClickMove}><img src="chessPiciesImg/Chess_kdt60.png" /></div>
    }


    

    
}

export default King