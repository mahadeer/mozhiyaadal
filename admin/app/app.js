var am_mozhiyaadalAdmin = angular.module('am_mozhiyaadalAdmin', ['ngRoute']);

function get_device() {
    if ($(window).width() <= 564) {
        return "mobile";
    } else if ($(window).width() > 564 && $(window).width() <= 992) {
        return "tablet";
    } else if ($(window).width() > 992) {
        return "desktop";
    }
}

am_mozhiyaadalAdmin.run(['$rootScope', function($rootScope){
    $rootScope.Title = 'மொழியாடல்';
    $rootScope.device = get_device();
    $(window).resize(function(){
        $rootScope.device = get_device();
        $rootScope.$apply();
    });
}]);

am_mozhiyaadalAdmin.config(['$routeProvider',function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'app/components/home/home.html',
            controller: 'Sample'
        })
        .when('/post/:id', {
            templateUrl: 'app/components/post/post.html',
            controller: 'ac_postController'
        })
        .otherwise({redirectTo:'/'});
}]);

am_mozhiyaadalAdmin.controller('Sample', ['$scope', function($scope){
    $scope.Test = 'Admin Page';
}]);