var am_mozhiyaadal = angular.module('am_mozhiyaadal', []);

am_mozhiyaadal.run(['$rootScope', function($rootScope){
    $rootScope.Title = 'Mozhiyaadal';
}]);

am_mozhiyaadal.controller('ac_home', ['$scope', function($scope){
    $scope.Content = 'Basic Page from Controller';
}]);