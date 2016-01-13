app.controller('AppCtrl', function ($scope, Metatags, Cards, $timeout) {

    $scope.Metatags = Metatags;
    $scope.allCards = Cards.getCards();
    $scope.CardsRemaing = 20;

    var lockFlip = false;
    var Compare = [];



    $scope.flipCard = function( card ) {
        if ( lockFlip === false ) {
            lockFlip = true;

            var indexArray = card.index;
            $scope.allCards[ indexArray ].flip = true;
            Compare.push( card );

            if ( Compare.length == 2 ) {
                result = Cards.compareCards( Compare );

                switch ( result.status ) {

                    case true:
                        $scope.allCards[ result.cardOne.index ].complete = true;
                        $scope.allCards[ result.cardTwo.index ].complete = true;
                        lockFlip = false;
                        $scope.CardsRemaing = $scope.CardsRemaing - 2;
                    break;
                    case false:
                        $timeout(function(){
                            $scope.allCards[ result.cardOne.index ].flip = false;
                            $scope.allCards[ result.cardTwo.index ].flip = false;
                            lockFlip = false;
                        },1000);
                    break;

                }

                Compare = [];
            }else{
                lockFlip = false;
            }
        }


    };


});
