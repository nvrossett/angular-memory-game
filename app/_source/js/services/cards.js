app.factory('Cards', function() {

    return {
        getCards : getCards,
        compareCards : compareCards
    };

    function getCards() {

        // List all colors
        var colors = ['red','blue','beige','orange','yellow','green','pink','black','brown','purple'];

        // List duplicate colors
        var cards = $.merge( colors, colors );

        // Shuffle colors
        cards = $.shuffle(cards);

        // Array of Cards
        var arrCards = [];
        var index = 0;
        cards.forEach(function( color  ){

            card = {
                color : color,
                index : index,
                flip : false,
                complete : false
            };

            arrCards.push( card );
            index++;

        });

        return arrCards;
    }

    function compareCards( arrCompare ){

        var cardOne = arrCompare[0],
            cardTwo = arrCompare[1];


        return {
            cardOne: cardOne,
            cardTwo: cardTwo,
            status: ( cardOne.color === cardTwo.color && cardOne.index !== cardTwo.index )
        }; 

    }


});
