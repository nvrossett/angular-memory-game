app.directive("moveSlider", function( $timeout ) {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            var context = element[0];

            context.addEventListener("mousemove", function(event) {

                    var Mask = this.querySelector(".molecule-slider-mask"),
                        Container = this.querySelector(".molecule-slider-container");


                    var sliderMask = {
                        element: Mask,
                        width: parseInt(Mask.offsetWidth),
                        left: $(".molecule-slider-mask").offset().left
                    };

                    var sliderContainer = {
                        element: Container,
                        width: parseInt(Container.offsetWidth),
                        left: parseFloat(Container.style.left)
                    };
 

                    var mouse = event.pageX - sliderMask.left;

                    var space = sliderContainer.width - sliderMask.width;
                    var posicao = mouse * 100 / sliderMask.width;
                    var coordenada = posicao * space / 100;
                    var coord = coordenada < 0 ? coordenada * 1 : coordenada;

                    $(document).find(".molecule-slider-mask-inner").scrollLeft(coord);


            });

        }
    };
});
