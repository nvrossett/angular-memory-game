app.controller('AppCtrl', function ($scope, $http, $location, Portfolio, Metatags, gettextCatalog) {

     $scope.Metatags = Metatags;

     Portfolio.listJobs(3).then(function( data ){
         $scope.lastJobs = data;
         $scope.featureJob = data[0];
     });

     Portfolio.dollar().then(function( data ){
         $scope.dollar = data.dollar;
     });


     $scope.newFeatureJob = function( job ){
         $scope.featureJob = job;
     };

     $scope.changeLanguage = function( language ){
        $scope.language = language;
        gettextCatalog.setCurrentLanguage( language );
     };

});
