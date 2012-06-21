// Fady version 0.1
// Simple Cross Fade Images
// By Kuzin

(function($) {

    $.fn.fady = function(options) {

        if (!this.length) { return this; }

        var opts = $.extend(true, {}, $.fn.fady.defaults, options);

        this.each(function() {
            var $this       = $(this),
                $image      = $this.find('img'),
                $background = $image.attr('src');

            var height = (opts.vertical == true) ? $image.height() / 2 : $image.height();
            var width  = (opts.vertical != true ) ? $image.width() / 2 : $image.width();

            $this.css({
                'background' : 'url(' + $background + ')',
                'background-position' : 'bottom left',
                'background-repeat' : 'no-repeat',
                'overflow' : 'hidden'
            }).height(height).width(width);

            $this.hover(function() {
                $image.stop().animate({opacity:0}, opts.speed);
            }, function() {
                $image.stop().animate({opacity:1}, opts.speed);
            });

        });
        return this;
    };

    // Options
    $.fn.fady.defaults = {
    'speed'     : 500, // int
    'vertical'  : true // null if horizontal
    };

})(jQuery);
