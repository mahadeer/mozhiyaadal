
/*
Tipr 2.0.1
Copyright (c) 2015 Tipue
Tipr is released under the MIT License
http://www.tipue.com/tipr
*/


(function($) {

     $.fn.tipr = function(options) {
     
          var set = $.extend( {
               
               'speed'        : 200,
               'mode'         : 'bottom',
			   'theme'		  : 'dark'
          
          }, options);

          return this.each(function() {
          
               var tipr_cont = '.tipr_container_' + set.mode;

               $(this).hover(
                    function ()
                    {
                         var d_m = set.mode;
						 var theme = (set.theme == 'dark') ? 'tipr_dark' : '';
                         if ($(this).attr('data-mode'))
                         {
                              d_m = $(this).attr('data-mode')
                              tipr_cont = '.tipr_container_' + d_m;   
                         }
                         
                         var out = '<div class="tipr_container_' + d_m + ' ' + theme + '"><div class="tipr_point_' + d_m + '"><div class="tipr_content">' + $(this).attr('data-tip') + '</div></div></div>';
                         
                         $('body').append(out);
                    
                         var tip_offset = $(this).offset();
                         var tip_width = $(this).width();
                         var tip_height = $(this).height();
                         var tip_left = (tip_offset.left - (tip_width / 2)) + 'px';
                         var tip_top = (tip_offset.top + tip_height  + 5) + 'px';
                    
                         $(tipr_cont).css('top', tip_top);
                         $(tipr_cont).css('left', tip_left);
                         $(this).removeAttr('title alt');
                         
                         $(tipr_cont).fadeIn(set.speed);              
                    },
                    function ()
                    {   
                         $(tipr_cont).remove();    
                    }     
               );
                              
          });
     };
     
})(jQuery);
