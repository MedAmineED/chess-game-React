let  pawn = {
    whitePlayer :  [{
                        id : 0,
                        position : {x : 0,
                                    y : 1},
                        color : "white",
                        firstStep : true
                    },
                    {
                        id : 1,
                        position : {x : 1,
                                    y : 1},
                        color : "white",
                        firstStep : true
                    },
                    {
                        id : 2,
                        position : {x : 2,
                                    y : 1},
                        color : "white",
                        firstStep : true
                    },
                    {
                        id : 3,
                        position : {x : 3,
                                    y : 1},
                        color : "white",
                        firstStep : true
                    },
                    {
                        id : 4,
                        position : {x : 4,
                                    y : 1},
                        color : "white",
                        firstStep : true
                    },
                    {
                        id : 5,
                        position : {x : 5,
                                    y : 1},
                        color : "white",
                        firstStep : true
                    },
                     {
                        id : 6,
                        position : {x : 6,
                                    y : 1},
                        color : "white",
                        firstStep : true
                    },
                     {
                        id : 7,
                        position : {x : 7,
                                    y : 1},
                        color : "white",
                        firstStep : true
    }],
    blackPlayer :  [{
                        id : 0,
                        position : {x : 0,
                                    y : 6},
                        color : "black",
                        firstStep : true
                    },
                     {
                        id : 1,
                        position : {x : 1,
                                    y : 6},
                        color : "black",
                        firstStep : true
                    },
                     {
                        id : 2,
                        position : {x : 2,
                                    y : 6},
                        color : "black",
                        firstStep : true
                    },
                     {
                        id : 3,
                        position : {x : 3,
                                    y : 6},
                        color : "black",
                        firstStep : true
                    },
                     {
                        id : 4,
                        position : {x : 4,
                                    y : 6},
                        color : "black",
                        firstStep : true
                    },
                     {
                        id : 5,
                        position : {x : 5,
                                    y : 6},
                        color : "black",
                        firstStep : true
                    },
                     {
                        id : 6,
                        position : {x : 6,
                                    y : 6},
                        color : "black",
                        firstStep : true
                    },
                     {
                        id : 7,
                        position : {x : 7,
                                    y : 6},
                        color : "black",
                        firstStep : true
    }]

}
const knight = {
                whitePlayer : [
                    {
                        id : 0,
                        position : {x:1, y:0},
                        color : "white"
                    },
                    {
                        id : 1,
                        position : {x:6, y:0},
                        color : "white"
                    }
                    ],
                    blackPlayer : [
                                {
                                    id : 1,
                                    position : {x:1 , y:7},
                                    color : "black"
                                },
                                {
                                    id : 1,
                                    position : {x:6, y:7},
                                    color : "black"
                                }
                        
                            ]
}

const rook = {
            whitePlayer : [
                        {
                            id : 0,
                            position : {x:0 , y:0},
                            color : "white"
                        },
                        {
                            id : 1,
                            position : {x:7, y:0},
                            color : "white"
                        }
                
            ],
            blackPlayer : [
                        {
                            id : 1,
                            position : {x:0 , y:7},
                            color : "black"
                        },
                        {
                            id : 1,
                            position : {x:7, y:7},
                            color : "black"
                        }
                
                    ]

}

export {pawn, rook, knight}