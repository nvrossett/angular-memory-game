app.directive("card", function() {
    return {
        restrict: "E",
        replace: true,
        scope: { card: '=', onFlip: '&' },
        template: '<li class="atom-card-item">' +
                        '<a href="#" class="atom-card-container" ng-click="onFlip()" ng-class=" { \'active\' : card.flip, \'complete\' : card.complete } ">' +
                            '<div class="atom-card-flipper">' +
                                '<div class="atom-card-front color-{{ card.color }}"></div>' +
                                '<div class="atom-card-back"></div>' +
                            '</div>' +
                        '</a>' +
                    '</li>',
        link: function(scope, element, attrs) {

        }

    };
});
