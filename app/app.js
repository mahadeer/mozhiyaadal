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

am_mozhiyaadal.run(['$rootScope', 'SiteInfo' , function($rootScope, SiteInfo){
    $rootScope.Title = 'மொழியாடல்';
    $rootScope.device = get_device();
    $(window).resize(function(){
        $rootScope.device = get_device();
        $rootScope.$apply();
    });
    /* Define API Services URL */
    $rootScope.APIUri = "http://localhost:8080";

    SiteInfo.refresh();

    $rootScope.$on("$locationChangeStart", function(event, next, current) {
        $('.morphsearch').removeClass('open');
        $('body').css('overflow', 'visible');
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
        .when('/search/:term', {
            templateUrl: 'app/components/list/list.html',
            controller: 'ac_search'
        })
        .when('/labels/:term', {
            templateUrl: 'app/components/list/list.html',
            controller: 'ac_labels'
        })
        .otherwise({redirectTo:'/'});
}]);

am_mozhiyaadal.filter("trust", ['$sce', function($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    }
}]);