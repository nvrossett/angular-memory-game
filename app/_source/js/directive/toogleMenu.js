app.directive('toogleMenu', function () {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, el, attrs) {

            el.on('click', function(){
                $('.molecule-menu-list').toggleClass('open');
            });

            $('.molecule-menu-list a').click(function(){
                $('.molecule-menu-list').removeClass('open');
            });
        }
    };
});
