app.filter('filterJobsBy', function() {

    return function(items, filterOn){

        var filteredJobs = [];


        if ( filterOn.Resources.length === 0 && filterOn.Reach.length === 0 ) {
            filteredJobs = items;
        }else{

            if ( filterOn.Reach.length > 0 ) {

                angular.forEach(items, function( job, key ){
                    if ( job.alcance === filterOn.Reach[0]  ){
                        filteredJobs.push( job );
                    }
                });

            }else{
                filteredJobs = items;
            }


            var filteredJobsResources = [];


            if ( filterOn.Resources.length > 0 ) {


                angular.forEach(filteredJobs, function( job, key ){

                    var arrJobs = 0;
                    filterOn.Resources.forEach(function ( item ) {

                        if ( job.resources.indexOf( item.classe ) >= 0 ){
                            arrJobs++;
                        }

                        if ( filterOn.Resources.length === arrJobs ){
                            filteredJobsResources.push( job );
                            arrJobs = 0;
                        }

                    });

                });

                filteredJobs = filteredJobsResources;

            }

        }

        var firstItem = $('.atom-slider-item:first-child');
        var openPreview = firstItem.attr('open-preview');

        $('.atom-view-item').removeClass('active');
        $('#' + openPreview).addClass('active');
        firstItem.addClass('active');

        $(".molecule-slider-mask-inner").scrollLeft(0);
        return filteredJobs;


    };

});
