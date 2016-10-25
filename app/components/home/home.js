am_mozhiyaadal.controller('ac_home', ['$scope', function($scope){
    $scope.Content = 'Basic Page from Controller';
    $scope.articles = [];
    /* Get json from files */
    $.getJSON("assets/mock-articles/articles.json", function(data){
        $scope.articles = data;
        $scope.latestPosts = data.map(function(d){
            return {
                title: d.title,
                labels: d.labels,
                read: d.read
            }
        });
        $scope.labels = [];
        var labels = {};
        data.forEach(function(d){
            d.labels.split(',').forEach(function(label){
                if(labels[label] == undefined) {
                    labels[label] = 1;
                } else {
                    labels[label] = labels[label] + 1;
                }
            });
        });
        for(var key in labels) {
            $scope.labels.push(key + " (" + labels[key] + ")");
        }
    });
}]);