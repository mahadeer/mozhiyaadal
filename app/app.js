var am_mozhiyaadal = angular.module('am_mozhiyaadal', ['ngRoute']);

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

am_mozhiyaadal.config(['$routeProvider',function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'app/components/home/home.html',
            controller: 'ac_home'
        })
        .when('/article/:id', {
           templateUrl: 'app/components/article/article.html',
            controller: 'ac_article'
        })
        .otherwise({redirectTo:'/'});
}]);