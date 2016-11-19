am_mozhiyaadal.controller('ac_home', ['$scope', 'ArticleApiService', function($scope, ArticleApiService){
    $scope.Content = 'Basic Page from Controller';
    $scope.articles = [];
    $scope.recentPosts = [];
    $scope.labels = [];
    
    ArticleApiService.GetArticles(0).then(function(res){
        if(res.status) {
            $scope.articles = $scope.articles.concat(res.data);
        }
    });

    ArticleApiService.GetArticlesInfo().then(function(res){
       if(res.status) {
           $scope.recentPosts = res.data.recentPosts;
           $scope.labels = res.data.labels;
       }
    });
}]);