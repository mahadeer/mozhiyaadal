am_mozhiyaadal.directive('mdArticle', [function(){
    return {
        restrict: 'E',
        replace: true,
        scope: {
            article: "=ref"
        },
        templateUrl: "app/partials/article-card.html",
        link: function($scope, $element) {
        }
    }
}]);