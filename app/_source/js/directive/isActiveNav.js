app.directive('isActiveNav', function($location) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            scope.location = $location;
            scope.$watch('location.path()', function(currentPath) {
                setTimeout(function() {

                    var linkElement = element[0].getAttribute('href');
                    
                    $('.atom-menu-link').removeClass('active'); 

                    if ( linkElement === currentPath ){  
                        setTimeout(function(){
                            element.addClass('active');                            
                        }, 0)
                    }

                    if ( linkElement === '/portfolio' && currentPath.split('/')[1] === 'trabalho' ){                          
                        setTimeout(function(){
                            element.addClass('active');                            
                        }, 0)
                    }
 

                }, 0);
            });
        }
    };
});

