app.run(function ($http, $rootScope, $timeout, $state, $location, gettextCatalog ) {

   var idioma, currentLanguage;

   if(navigator.browserLanguage) {
       idioma = navigator.browserLanguage;
   }else if(navigator.language) {
       idioma = navigator.language;
   }

   currentLanguage = ( idioma.substring(0,2) === 'pt' ) ? 'pt_BR' : 'en_US' ;

   gettextCatalog.setCurrentLanguage( currentLanguage );
   $rootScope.language = currentLanguage;


  // $http.defaults.headers.common.Authorization = 'Basic ' + 'cmFuaWE6VG1FaUxGVj1SNm9wS1lqNFsyVG4yXUN0';

    var effect = '';

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {


     });

     $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        var url = window.location;

        $('body').scrollTop(0);

        var path = url.pathname.split('/')[1];

        switch( path ){

             case 'sobre-mim':
             case 'tecnologias':
             case 'contato':
                 $('.atom-lamp').css('right','5000px');
             break;

             case 'portfolio':
             case 'trabalho':
                 $('.atom-lamp').css({'right':'-200px', 'top':'300px'});
             break;

             default:
                 $('.atom-lamp').css('right', '-400px');
             break;

         }

     });

});
