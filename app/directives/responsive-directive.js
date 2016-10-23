/** Responsive directives */
am_mozhiyaadal.directive('visibleDevices', [function(){

}]);

am_mozhiyaadal.directive('responsiveTwelveColumn', ['$rootScope', function($rootScope){
    function ChangeResponsiveColumnType($device, $element) {
        if($device == 'desktop') {
            $element.removeClass('twelve');
        } else {
            $element.addClass('twelve');
        }
    }
    return {
        restrict: 'A',
        link: function($scope, $element, attrs) {
            $rootScope.$watch($rootScope.device, function(olddevice, newdevice){
                if(olddevice != newdevice) {
                    ChangeResponsiveColumnType($rootScope.device, $element);
                }
            });
        }
    }
}]);