app.controller('AbrirVideoCtrl', function ($scope, $http, $location, $routeParams, Site, $sce, Metatags) {  
    
    var hash_id = $routeParams.hash_id;

    Site.getIndividualVideo( hash_id ).then(function( data ){
        $scope.page = data.result; 

        if (  $scope.page.nome ) {

            Metatags.set({ 
                title : $scope.page.nome + " - " + $scope.page.profissao + " | Habib's - #TodoMundoSeAjudando",
                node_link : 'http://'+window.location.hostname+'/'+$location.$$path,
            });

            Site.getPlayer( hash_id ).then(function( data ){ 
                $scope.page.player = $sce.trustAsHtml( data );
                window.prerenderReady = true;
            });

        }
        
    });  


    Site.getVideos(1,8).then(function( data ){
        $scope.relatedList = data.result;            
    })


    $scope.thisPage = $location.$$absUrl;
 

})