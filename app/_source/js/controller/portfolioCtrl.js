app.controller('PortfolioCtrl', function ($scope, Portfolio) { 

    $scope.filterJobs = {
        Resources : [],
        Reach : []
    };

    if ( !$scope.listResources ) {

        Portfolio.listResources().then(function( result ){
            $scope.listResources = result;
            $scope.listReach = [
                { name : 'Nacionais', value : 'nacionais' },
                { name : 'Internacionais', value : 'internacionais' }
            ];
        });


    }
    if ( !$scope.listJobs ) {

        Portfolio.listJobs().then(function( result ){
            $scope.listJobs = result;
        });

    }

    $scope.$watch('filterJobs', function( filterBy ){        
        
        var total = filterBy.Reach.length; 

        switch ( total ){            

            case 1: 
                if ( filterBy.Reach[0] === 'nacionais' ) {
                    $('.atom-filters-reach.internacionais').addClass('off') ;
                }else{                    
                    $('.atom-filters-reach.nacionais').addClass('off') ;
                }
            break;

            case 2:
                $('.atom-filters-reach').removeClass('off');
                $scope.filterJobs.Reach = ( filterBy.Reach[0] === 'nacionais' ) ? ['internacionais'] : ['nacionais'] ;
            break;

            case 0:     
                $('.atom-filters-reach').removeClass('off') 
            break;

        }
 

    }, true);


 
})