app.factory('Game', function() {

    return {
        Config : Config
    };

    function Config() {
        return {
            mode : null,
            turn : 'playerOne',
            finish : false,
            status : {
                time : 0,
                remaning : 20
            },
            singlePlayer : {
                score : 0,
                moves : 0
            },
            multiPlayer : {
                playerOne : {
                    score : 0,
                    moves : 0
                },
                playerTwo : {
                    score : 0,
                    moves : 0
                },
                result: null
            },


        };
    }

});
