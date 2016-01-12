app.filter('rewriteResourceName', function() {

    return function(input, scope) {

        var arrResources = [];
        input.forEach(function( item ){
            arrResources.push(item.nome);
        });

        var textResources = arrResources.join(', '); 

        return textResources;
    };

});
