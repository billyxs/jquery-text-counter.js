/**
 *
 *
 */
(function($){
    $.fn.textcounter = function(options){
        var opts = $.extend({}, $.fn.textcounter.defaults, options);
        var $limitElem = (opts.container !== null) ? opts.container : $('<span></span>');

        $limitElem.addClass(opts.class);

        return this.each(function(){
            var $this = $(this);

            if(opts.container === null)
                $limitElem.insertBefore( $this );

            $this.each(updateTextareaCount);

            $this.keyup(updateTextareaCount);
        });

        function updateTextareaCount(){

            if( $(this).val().length>opts.limit )
                $(this).val( $(this).val().substr(0, opts.limit) );

            var count = (opts.limit-$(this).val().length);
            $limitElem.html( buildCounterString(count) );
        }

        function buildCounterString(count) {
            return opts.prefix + count + opts.suffix;
        }

    };

    //
    // plugin defaults
    //
    $.fn.textcounter.defaults = { limit: 160
                                , class: "textarea-limit-label"
                                , container: null
                                , prefix: ""
                                , suffix: ""
                                };
})(jQuery);