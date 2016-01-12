app.directive('openPreview', function () {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, el, attrs) {

            el.on('click, mouseenter', function( event ){
                event.preventDefault();
                var openPreview = attrs.openPreview;
                $('.atom-view-item').removeClass('active');
                $('#' + openPreview).addClass('active'); 
            });


        }
    };
});
