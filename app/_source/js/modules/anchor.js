angular.module('anchor', []).config(function() {

    $(document).on('click', "a[href^='@']", function(event) {
        event.preventDefault();

        var id = $(this).attr("href").replace('@','#');
        var precision = (id == '#top') ? 0 : $(id).offset().top ;
        $('html, body').animate({scrollTop: precision}, 2000);

    });
     


});