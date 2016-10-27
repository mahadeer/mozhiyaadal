am_mozhiyaadalAdmin.directive('subMenuEnable', function(){
    return {
        restrict: 'A',
        link: function(scope, $elem, $$attr) {
            var hasSubmenu = $$attr['subMenuEnable'];
            if(hasSubmenu != undefined && hasSubmenu != "") {
                $elem.find(hasSubmenu).on('click', function(event){
                    if($(this).hasClass('active')) {
                        $(this).removeClass('active');
                    } else if($(event.target.closest('li')).hasClass('has-children')) {
                        $elem.find(hasSubmenu).removeClass('active');
                        $(this).addClass('active');
                    }
                });
            }
        }
    }
});