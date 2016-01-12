app.controller('JobCtrl', function ($scope, $state, Portfolio, Metatags, $location) {
    var slug = $state.params.slug;

    Portfolio.openJob( slug ).then(function( result ){
        $scope.job = result; 
        Metatags.set({
            title : $scope.job.projeto + " | nvieira.com.br - Criação e otimização de sites",
            node_link : 'http://'+window.location.hostname+'/'+$location.$$path,
        });

    });

});
