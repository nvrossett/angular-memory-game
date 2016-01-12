app.factory('Metatags', function( $location ) {
    var meta = {
        title: "nvieira.com.br - Criação e otimização de sites",
        current_link: $location.$$absUrl,
        body: '',
        img: ''
    };

    return {
        show: function() {
            return meta;
        },
        set: function(info) {
            meta = info;
        }
    };

});
