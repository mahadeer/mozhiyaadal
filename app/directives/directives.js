am_mozhiyaadal.directive('navHeader', function () {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            logo: '@'
        },
        templateUrl: 'app/partials/header.html',
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

am_mozhiyaadal.directive('searchOverlay', function (SiteInfo, $location) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(element).click(function (event) {
                $('.morphsearch').toggleClass('open');
                if ($('.morphsearch').hasClass('open')) {
                    $('.morphsearch-input').val('');
                    $('.morphsearch-input').focus();
                    $('.morphsearch-input').keyup(function (event) {
                        if (event.keyCode == 13) {
                            var term = event.target.value;
                            var url = '/search/' + term;
                            $location.path(url);
                            scope.$apply();
                        }
                    });
                    $('body').css('overflow', 'hidden');
                } else {
                    $('body').css('overflow', 'visible');
                }
                $('.rsx-site-nav-trigger').removeClass('rsx-active');
                $('.rsx-site-nav').removeClass('rsx-active');
            });
        },
        controller: function ($scope) {
            $scope.topSearches = SiteInfo.get('searches');
            $scope.likes = SiteInfo.get('likes');
            $scope.comments = SiteInfo.get('comments');
        }
    }
});

am_mozhiyaadal.directive('timeSpan', function () {
    return {
        restrict: 'A',
        link: function ($scope, $elem, $attrs) {
            var posted = $scope.$eval($attrs.timeSpan);
            var timeAgo = moment(posted).fromNow();
            if (timeAgo.includes("years") || timeAgo.includes("months")) {
                timeAgo = moment(posted).format("MMMM Do YYYY");
            }
            $elem.html(timeAgo);
        }
    }
});