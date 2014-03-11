/**
 *
 *
 */
(function($){
    $.fn.textcounter = function(options){
        var opts = $.extend({}, $.fn.textcounter.defaults, options);

        return this.each(function(){
            var $this = $(this);
            $('<span class="textarea-limit-label"> (160)</span>').insertAfter( $this.parent().children('label') );

            $this.each(updateTextareaCount);

            $this.keyup(updateTextareaCount);
        });

        function updateTextareaCount(){
            if( $(this).val().length>opts.limit )
                $(this).val( $(this).val().substr(0, opts.limit) );

            $(this).parent().children('.textarea-limit-label').html(' ('+(opts.limit-$(this).val().length)+')');
        }

    };

    //
    // plugin defaults
    //
    $.fn.textcounter.defaults = {
        limit: 160
    };
})(jQuery);