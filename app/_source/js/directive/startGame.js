app.directive("startGame", function( $timeout ) {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            element.on('click', function( event ) {

                $timeout(function() {
                    $('.molecule-cards').toggleClass('waiting-start').toggleClass('in-play');
                    $('.atom-card-container').removeClass('active').removeClass('complete');
                    $('.organism-header').addClass('playing');                    
                },100);

            });
        }

    };
});
