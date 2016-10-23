am_mozhiyaadal.directive('mdArticle', [function(){
    return {
        restrict: 'E',
        replace: true,
        scope: {
            article: "=ref"
        },
        templateUrl: "app/views/templates/article.html",
        link: function($scope, $element) {
        }
    }
}]);