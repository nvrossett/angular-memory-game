app.factory('Portfolio', function($http, $q) {

    return {
      openJob : openJob,
      listJobs : listJobs,
      listResources : listResources,
      sendMessage : sendMessage,
      dollar: dollar
    };

    /**
     * List Jobs - Lista de Trabalhos
     *
     */
    function listJobs( limit ) {

        limit = ( limit === 3 ) ? '&limit=3'  : '';

        var deferred = $q.defer(); // pagination.js -> converte objeto em querystring

        $http.get('/api/?request=jobs'+limit).success(function(data, status, headers, config) {
            deferred.resolve(data);
        }).error(function(data, status, headers, config) {
            deferred.reject(data);
        });

        return deferred.promise;

    }
    /**
     * List Jobs - Lista de Trabalhos
     *
     */
    function openJob( slug ) {

        var deferred = $q.defer(); // pagination.js -> converte objeto em querystring

        $http.get('/api/?request=open-job&slug=' + slug ).success(function(data, status, headers, config) {
            deferred.resolve(data);
        }).error(function(data, status, headers, config) {
            deferred.reject(data);
        });

        return deferred.promise;

    }

    /**
     * List Resources - Recursos de Desenvolvimento
     *
     */
    function listResources() {

        var deferred = $q.defer(); // pagination.js -> converte objeto em querystring

        $http.get('/api/?request=resources').success(function(data, status, headers, config) {
            deferred.resolve(data);
        }).error(function(data, status, headers, config) {
            deferred.reject(data);
        });

        return deferred.promise;

    }


    /**
     * List Resources - Recursos de Desenvolvimento
     *
     */
    function sendMessage( data ) {

        var deferred = $q.defer(); // pagination.js -> converte objeto em querystring

        $http.post('/api/?request=send-message', data).success(function(data, status, headers, config) {
            deferred.resolve(data);
        }).error(function(data, status, headers, config) {
            deferred.reject(data);
        });

        return deferred.promise;

    }


        /**
         * List Resources - Recursos de Desenvolvimento
         *
         */
        function dollar() {

            var deferred = $q.defer(); // pagination.js -> converte objeto em querystring

            $http.get('/api/?request=dollar').success(function(data, status, headers, config) {
                deferred.resolve(data);
            }).error(function(data, status, headers, config) {
                deferred.reject(data);
            });

            return deferred.promise;

        }




});
