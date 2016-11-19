am_mozhiyaadal.service('AppEngineService',
    ['$rootScope', 'HttpRequest', function ($rootScope, HttpRequest) {
    //Get Site infos
    this.UpdateSiteInfo = function () {
        var url = $rootScope.APIUri + '/helper/';
        return HttpRequest.get(url);
    }
}]);