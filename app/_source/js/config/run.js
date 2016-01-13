app.run(function ($http, $rootScope, $timeout, $state, $location ) {

  // $http.defaults.headers.common.Authorization = 'Basic ' + 'cmFuaWE6VG1FaUxGVj1SNm9wS1lqNFsyVG4yXUN0';

    var effect = '';

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

     });

     $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $('body').scrollTop(0);

     });

});
