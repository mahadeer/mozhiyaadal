am_mozhiyaadal.directive('navHeader', function () {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            logo: '@'
        },
        templateUrl: 'app/views/templates/header.html',
        link: function (scope, element, attrs) {
            $(element).find('.rsx-site-nav-trigger').click(function (event) {
                $(this).toggleClass('rsx-active');
                $(this).closest('.rsx-site-nav').toggleClass('rsx-active');
            });
            $(element).find('.rsx-site-nav ul.rsx-site-menu li').click(function (event) {
                $('.rsx-site-nav-trigger').removeClass('rsx-active');
                $('.rsx-site-nav').removeClass('rsx-active');
            });
        }
    }
});

am_mozhiyaadal.directive('searchOverlay', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(element).click(function (event) {
                $('.morphsearch').toggleClass('open');
                if ($('.morphsearch').hasClass('open')) {
                   $('.morphsearch-input').focus();
                    $('body').css('overflow', 'hidden');
                } else {
                    $('body').css('overflow', 'visible');
                }
                $('.rsx-site-nav-trigger').removeClass('rsx-active');
                $('.rsx-site-nav').removeClass('rsx-active');
            });
        },
        controller: function($scope) {
            $scope.topSearches = [
                {
                    term: "மார்க்ஸ்",
                    count: 23
                },
                {
                    term: "தமிழ் சினிமா",
                    count: 17
                },
                {
                    term: "பாலியல் அரசியல் ",
                    count: 7
                }
            ];
            $scope.reads = [];
            $scope.commented = [];
            $.getJSON("assets/mock-articles/articles.json", function(data){
                $scope.reads = data.map(function(d){
                    return {
                        title: d.title,
                        count: d.read
                    }
                });
                $scope.commented = data.map(function(d){
                    return {
                        title: d.title,
                        count: d.comments
                    }
                });
            });
        }
    }
});
