app.controller('ContatoCtrl', function ($scope, $http, Portfolio) {

    $scope.labelBtn = ($scope.language === 'pt_BR') ? 'Enviar' : 'Send';


    $scope.sendMessage = function(){
        $scope.labelBtn == ($scope.language === 'pt_BR') ? 'Aguarde, Enviando' : 'Wait, Sending';
        Portfolio.sendMessage( $scope.message ).then(function( data ){
            $scope.enviado = true;
        });
    };

});
