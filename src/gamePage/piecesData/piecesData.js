let  pawn = {
    whitePlayer :  [{   name : "pawn",
                        id : 0,
                        position : {x : 0,
                                    y : 1},
                        color : "white",
                        firstStep : true
                    },
                    {   name : "pawn",
                        id : 1,
                        position : {x : 1,
                                    y : 1},
                        color : "white",
                        firstStep : true
                    },
                    {   name : "pawn",
                        id : 2,
                        position : {x : 2,
                                    y : 1},
                        color : "white",
                        firstStep : true
                    },
                    {   name : "pawn",
                        id : 3,
                        position : {x : 3,
                                    y : 1},
                        color : "white",
                        firstStep : true
                    },
                    {   name : "pawn",
                        id : 4,
                        position : {x : 4,
                                    y : 1},
                        color : "white",
                        firstStep : true
                    },
                    {   name : "pawn",
                        id : 5,
                        position : {x : 5,
                                    y : 1},
                        color : "white",
                        firstStep : true
                    },
                     {   name : "pawn",
                        id : 6,
                        position : {x : 6,
                                    y : 1},
                        color : "white",
                        firstStep : true
                    },
                     {   name : "pawn",
                        id : 7,
                        position : {x : 7,
                                    y : 1},
                        color : "white",
                        firstStep : true
    }],
    blackPlayer :  [{   name : "pawn",
                        id : 0,
                        position : {x : 0,
                                    y : 6},
                        color : "black",
                        firstStep : true
                    },
                     {   name : "pawn",
                        id : 1,
                        position : {x : 1,
                                    y : 6},
                        color : "black",
                        firstStep : true
                    },
                     {   name : "pawn",
                        id : 2,
                        position : {x : 2,
                                    y : 6},
                        color : "black",
                        firstStep : true
                    },
                     {   name : "pawn",
                        id : 3,
                        position : {x : 3,
                                    y : 6},
                        color : "black",
                        firstStep : true
                    },
                     {   name : "pawn",
                        id : 4,
                        position : {x : 4,
                                    y : 6},
                        color : "black",
                        firstStep : true
                    },
                     {   name : "pawn",
                        id : 5,
                        position : {x : 5,
                                    y : 6},
                        color : "black",
                        firstStep : true
                    },
                     {   name : "pawn",
                        id : 6,
                        position : {x : 6,
                                    y : 6},
                        color : "black",
                        firstStep : true
                    },
                     {   name : "pawn",
                        id : 7,
                        position : {x : 7,
                                    y : 6},
                        color : "black",
                        firstStep : true
    }]

}
const knight = {
                whitePlayer : [
                    {   name : "knight",
                        id : 0,
                        position : {x:1, y:0},
                        color : "white"
                    },
                    {   name : "knight",
                        id : 1,
                        position : {x:6, y:0},
                        color : "white"
                    }
                    ],
                    blackPlayer : [
                                {   name : "knight",
                                    id : 0,
                                    position : {x:1 , y:7},
                                    color : "black"
                                },
                                {   name : "knight",
                                    id : 1,
                                    position : {x:6, y:7},
                                    color : "black"
                                }
                        
                            ]
}

const rook = {
            whitePlayer : [
                        {   name : "rook",
                            id : 0,
                            position : {x:0 , y:0},
                            color : "white"
                        },
                        {   name : "rook",
                            id : 1,
                            position : {x:7, y:0},
                            color : "white"
                        }
                
            ],
            blackPlayer : [
                        {   name : "rook",
                            id : 0,
                            position : {x:0 , y:7},
                            color : "black"
                        },
                        {   name : "rook",
                            id : 1,
                            position : {x:7, y:7},
                            color : "black"
                        }
                
                    ]

}

const bishop = {
                whitePlayer : [
                        {   name : "bishop",
                            id : 0,
                            position : {x:2 , y:0},
                            color : "white"
                        },
                        {   name : "bishop",
                            id : 1,
                            position : {x:5, y:0},
                            color : "white"
                        }

                    ],
                blackPlayer : [
                        {   name : "bishop",
                            id : 0,
                            position : {x:2 , y:7},
                            color : "black"
                        },
                        {   name : "bishop",
                            id : 1,
                            position : {x:5, y:7},
                            color : "black"
                        }
                    ]
}

const king =  {
            whitePlayer : {
                name : "king",
                id : 0,
                position : {x:4 , y:0},
                color : "white"
            },
            blackPlayer : {
                name : "king",
                id : 1,
                position : {x:4 , y:7},
                color : "black"
            }
}


const queen = {
    whitePlayer : {
        name : "queen",
        id : 0,
        position : {x:3 , y:0},
        color : "white"
    },
    blackPlayer : {
        name : "queen",
        id : 1,
        position : {x:3 , y:7},
        color : "black"
    }

}


export {pawn, rook, knight, bishop, king, queen}