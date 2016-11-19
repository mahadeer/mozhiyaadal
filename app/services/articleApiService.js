am_mozhiyaadal.service('ArticleApiService',
    ['$rootScope', 'HttpRequest', function ($rootScope, HttpRequest) {
        /* Get All Articles by pagesize */
        this.GetArticles = function (pgNo) {
            var url = $rootScope.APIUri + '/articles/?pgNo=' + pgNo;
            return HttpRequest.get(url);
        };
        /* Get Labels and recent posts */
        this.GetArticlesInfo = function() {
            var url = $rootScope.APIUri + '/articles/api/info';
            return HttpRequest.get(url);
        };
        /* Get Article by Id */
        this.GetArticleByUri = function(articleUri) {
            var url = $rootScope.APIUri + '/articles/' + articleUri;
            return HttpRequest.get(url);
        };
        /* Get Search Results */
        this.GetSearchResults = function(keyword) {
            var url = $rootScope.APIUri + '/helper/search/' + keyword;
            return HttpRequest.get(url);
        };
        /* Get Label Results */
        this.GetLabelResults = function(keyword) {
            var url = $rootScope.APIUri + '/helper/labels/' + keyword;
            return HttpRequest.get(url);
        };
    }]);