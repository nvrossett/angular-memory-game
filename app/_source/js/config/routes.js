app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/");
    $stateProvider.state('home', {
        url: "/",
        templateUrl: "views/home.html"
    });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

});
