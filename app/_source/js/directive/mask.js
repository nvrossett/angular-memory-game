app.directive('mask', function ($timeout) {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, el, attrs) {

            el.on('keyup', function(){

                var cleanValue = el.val().replace(/\D/g,''),
                    mask = attrs.mask.split(' | '),
                    pattern;

                    VMasker( el ).unMask();

                    if ( mask[1] ) {
                        pattern = ( cleanValue.length < 11 ) ? mask[0] : mask[1] ;
                    }else{
                        pattern = mask[0];
                    }

                    VMasker( el ).maskPattern( pattern );

            });

        }
    };
});
