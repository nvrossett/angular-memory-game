app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
 
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('home', {
        url: "/",
        templateUrl: "views/single-player.html"
    });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

});
