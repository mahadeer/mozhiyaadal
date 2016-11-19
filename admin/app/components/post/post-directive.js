am_mozhiyaadalAdmin.directive('elastic', [
    '$timeout',
    function($timeout) {
        return {
            restrict: 'A',
            scope: true,
            link: function($scope, element) {
                $scope.initialHeight = $scope.initialHeight || element[0].style.height;
                var resize = function() {
                    element[0].style.height = $scope.initialHeight;
                    element[0].style.height = "" + element[0].scrollHeight + "px";
                };
                element.on("input change", resize);
                $timeout(resize, 0);
            }
        };
    }
]);

am_mozhiyaadalAdmin.directive('alloyEditor', function() {
   return {
       restrict: 'A',
       require: '?ngModel',
       link: function(scope, $elem, $$attrs, ngModel) {
           var elemId = $$attrs['id'];
           if(elemId == undefined || elemId == "") {
               elemId = "md-content-editable-" + (Math.ceil(Math.random() * 1000));
           }
           $elem.attr('id', elemId);
           var editor = AlloyEditor.editable(elemId);
           if (!ngModel) {
               return;
           }
           var nativeEditor = editor.get('nativeEditor');
           nativeEditor.on('change', function() {
               ngModel.$setViewValue(nativeEditor.getData());
           });
           ngModel.$render = function(value) {
               nativeEditor.setData(ngModel.$viewValue);
           };
       }
   }
});

am_mozhiyaadalAdmin.directive('mdTags', function() {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, $elem, $$attr, ngModel) {
            $elem.tagging({
                "edit-on-delete": false
            });
            $elem.find('input.type-zone').attr('placeholder', $$attr.placeholder);
            $elem.addClass('md-custom-tagging');
            if (!ngModel) {
                return;
            }
            ngModel.$render = function() {
                var tags = ngModel.$viewValue.split(',');
                tags.forEach(function(tag){
                    $elem.tagging("add", tag);
                });
                $elem.on( "add:after", function ( el, text, tagging ) {
                    ngModel.$setViewValue(tagging.getTags().toString());
                });
                $elem.on( "remove:after", function ( el, text, tagging ) {
                    ngModel.$setViewValue(tagging.getTags().toString());
                });
            };
        }
    }
});