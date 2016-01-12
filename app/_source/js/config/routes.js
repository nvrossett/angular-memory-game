app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {



    $urlRouterProvider.otherwise("/");
    $stateProvider.state('home', {
            url: "/",
            templateUrl: "views/home.html",
            resolve: {
                tag: function( Metatags ) {
                    Metatags.set({
                        title: "nvieira.com.br - Criação e otimização de sites",
                    });
                }
            }
        })
        .state('sobre-mim', {
            url: "/sobre-mim",
            templateUrl: "views/sobre-mim.html",
            resolve: {
                tag: function( Metatags ) {
                    Metatags.set({
                        title: "Sobre Mim | nvieira.com.br - Criação e otimização de sites",
                    });
                }
            }
        })
        .state('tecnologias', {
            url: "/tecnologias",
            templateUrl: "views/tecnologias.html",
            resolve: {
                tag: function( Metatags ) {
                    Metatags.set({
                        title: "Tecnologias | nvieira.com.br - Criação e otimização de sites",
                    });
                }
            }
        })
        .state('portfolio', {
            url: "/portfolio",
            templateUrl: "views/portfolio.html",
            controller: "PortfolioCtrl",
            resolve: {
                tag: function( Metatags ) {
                    Metatags.set({
                        title: "Portfolio | nvieira.com.br - Criação e otimização de sites",
                    });
                }
            }
        })
        .state('trabalho', {
            url: "/trabalho/:slug",
            templateUrl: "views/trabalho.html",
            controller: "JobCtrl"
        })
        
        .state('contato', {
            url: "/contato",
            templateUrl: "views/contato.html",
            controller: "ContatoCtrl",
            resolve: {
                tag: function( Metatags ) {
                    Metatags.set({
                        title: "Contato | nvieira.com.br - Criação e otimização de sites",
                    });
                }
            }
        });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

});
