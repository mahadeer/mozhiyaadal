am_mozhiyaadal.factory("SiteInfo", ['AppEngineService', function (AppEngineService) {
    var $obj = {};
    return {
        refresh: function () {
            AppEngineService.UpdateSiteInfo().then(function (res) {
                if (res.status) {
                    $obj = res.data;
                } else {
                    $obj = {
                        'searches': [],
                        'comments': [],
                        'likes': []
                    }
                }
            });
        },
        get: function (infoName) {
            return $obj[infoName];
        }
    };
}]);

am_mozhiyaadal.factory("HttpRequest", ['$q', function ($q){
    return {
        get: function(url, params) {
            var deferred = $q.defer();
            $.support.cors = true;
            $.ajax({
                url: url,
                type: "GET",
                async: true
            }).done(function (data, STATUS, res) {
                if (STATUS == "success" && res.status == 200) {
                    deferred.resolve({
                        status: true,
                        data: data
                    });
                } else {
                    deferred.reject({
                        status: false,
                        msg: STATUS
                    });
                }
            }).fail(function (xhr, ERR_MSG, ERR_CODE) {
                deferred.reject({
                    status: false,
                    msg: ERR_MSG
                });
            });
            return deferred.promise;
        }
    }
}]);