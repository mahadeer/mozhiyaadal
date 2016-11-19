am_mozhiyaadal.controller('ac_article',
    ['$scope', '$routeParams', 'ArticleApiService', function ($scope, $routeParams, ArticleApiService) {
        $scope.articleId = $routeParams.id;
        $scope.loader = true;
        $scope.article = {};
        $scope.next = {};
        $scope.isNext = false;

        ArticleApiService.GetArticleByUri($scope.articleId).then(function(res){
            if(res.status) {
                $scope.article = res.data.article;
                $scope.isNext = res.data.isNext;
                if($scope.isNext) {
                    $scope.next = res.data.next;
                }
                $scope.loader = false;
            }
        });
    }]);