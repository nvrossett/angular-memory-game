app.directive('accessItem', function () {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, el, attrs) {
            
            el.on('click', function( event ){
                event.preventDefault();

                var accessItem = attrs.accessItem;

                $('.atom-technologies-item a').removeClass('active');
                el.addClass('active');
                
                $('.atom-technologies-description-title, .atom-technologies-description-text').hide();
                $('.atom-technologies-description-title[technology-item="'+accessItem+'"], .atom-technologies-description-text[technology-item="'+accessItem+'"]').show();
                
            });


        }
    };
});

