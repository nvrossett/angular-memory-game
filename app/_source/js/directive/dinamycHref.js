app.directive('dinamycHref', function () {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, el, attrs) {

            el.on('click', function( event ){
                event.preventDefault();
                var href = el.attr('href');

                if (  $(window).width() <= '800' ) {
                    location.href = href;
                }
            });

        }
    };
});
