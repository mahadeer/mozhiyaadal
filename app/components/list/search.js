am_mozhiyaadal.controller('ac_search',
    ['$scope', '$routeParams','ArticleApiService', function ($scope, $routeParams, ArticleApiService) {
        var searchTerm = $routeParams.term;
        $scope.Msg = "'" + searchTerm + "'-க்கான தெடல் முடிவுகள்";
        $scope.results = [];
        $scope.loader = true;
        ArticleApiService.GetSearchResults(searchTerm).then(function(res){
            if(res.status) {
                $scope.loader = false;
                $scope.results = res.data;
            }
        });
    }]);

am_mozhiyaadal.controller('ac_labels',
    ['$scope', '$routeParams','ArticleApiService', function ($scope, $routeParams, ArticleApiService) {
        var searchTerm = $routeParams.term;
        $scope.Msg = "'" + searchTerm + "'-க்கான லெபிள் முடிவுகள்";
        $scope.results = [];
        $scope.loader = true;
        ArticleApiService.GetLabelResults(searchTerm).then(function(res){
            if(res.status) {
                $scope.loader = false;
                $scope.results = res.data;
            }
        });
    }]);