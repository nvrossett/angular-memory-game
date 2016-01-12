app.directive('lamp', function () {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, el, attrs) {
            
            document.addEventListener("mousemove", function( event ){ 

                var mouse = {
                    x : event.pageX
                },
                screen = {
                    width  : $(this).width()
                }

                var position = parseInt( ( mouse.x * 100 ) / screen.width );

                if ( (position <= 100) && (position > 91) )  {        el.find('image').attr('y','0px');           }
                if ( (position <= 90) && (position > 81)  )  {        el.find('image').attr('y','-360px');        }
                if ( (position <= 80) && (position > 71)  )  {        el.find('image').attr('y','-720px');        }
                if ( (position <= 70) && (position > 61)  )  {        el.find('image').attr('y','-1080px');       }
                if ( (position <= 60) && (position > 51)  )  {        el.find('image').attr('y','-1440px');       }
                if ( (position <= 50) && (position > 41)  )  {        el.find('image').attr('y','-1440px');       }
                if ( (position <= 40) && (position > 31)  )  {        el.find('image').attr('y','-1080px');       }
                if ( (position <= 30) && (position > 21)  )  {        el.find('image').attr('y','-720px');        }
                if ( (position <= 20) && (position > 10)  )  {        el.find('image').attr('y','-360px');        }
                if ( (position <= 10) && (position > 0)   )  {        el.find('image').attr('y','0px');           }
 
            });


 


        }
    };
});

