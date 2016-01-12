app.filter('joinResources', function() {

    return function(input, scope) {

        var arr = [];

        for ( var item in input ){
            arr.push( input[item] );
        }

        return arr.join(', ');
    };

});
