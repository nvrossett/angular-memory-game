describe('Sessão Testada >> ', function () {

    var $rootScope,
        $scope,
        controller; 

    beforeEach(function(){
        module('App');
        inject(function( $injector ){
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("AppCtrl", {$scope : $scope});
        });
    });
  
    
    describe("Area Testada  >>  ", function() {


        it("Describe test", function() {
           expect( $scope.message ).toBe("nvieira");
        });
 

    });

 
});