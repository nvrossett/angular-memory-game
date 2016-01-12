describe('Sessão Testada >> ', function () {

    var data; 

    beforeEach(function(){
        module('App');
        inject(function( $injector ){ 
            data = $injector.get('data');
        });
    });
  
    describe("Area Testada >> ", function() {
        it("Test First Name", function() { 
            expect( data.firstname ).toBe("Nicolas");   
        });
        it("Test Last Name", function() {  
            expect( data.lastname ).toBe("Rossett");   
        });
        it("Test Nick Name", function() {  
            expect( data.nickname ).toBe("nvieira");  
        });
    });

    
 
});