var am_mozhiyaadal = angular.module('am_mozhiyaadal', []);

function get_device() {
    if ($(window).width() <= 564) {
        return "mobile";
    } else if ($(window).width() > 564 && $(window).width() <= 992) {
        return "tablet";
    } else if ($(window).width() > 992) {
        return "desktop";
    }
}

am_mozhiyaadal.run(['$rootScope', function($rootScope){
    $rootScope.Title = 'மொழியாடல்';
    $rootScope.device = get_device();
    $(window).resize(function(){
        $rootScope.device = get_device();
        $rootScope.$apply();
    });
}]);

am_mozhiyaadal.controller('ac_home', ['$scope', function($scope){
    $scope.Content = 'Basic Page from Controller';
    $scope.articles = [];
    /* Get json from files */
    $.getJSON("assets/mock-articles/articles.json", function(data){
        $scope.articles = data;
        $scope.latestPosts = data.map(function(d){
            return {
                title: d.title,
                labels: d.labels
            }
        });
    })
}]);