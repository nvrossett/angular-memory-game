app.filter('urlEncode', function() {
    
    return function(input, scope) {
        if (input!==null)
            return encodeURIComponent(input);
    }

});