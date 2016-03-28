// https://github.com/KonstantinFilin/ksJQueryPlugins/tree/master/ConfirmRedirect
(function ( $ ) {
    
    $.fn.confirmRedirect = function(options) {
        var settings = $.extend({
            "confirmTitle": "Are you sure?"
        }, options );
        
        this.each(function() {
            var thisEl = $(this);
            var title = thisEl.attr("title");
            thisEl.click(function(event) {
                if(confirm(title ? title + "?" : settings.confirmTitle)) {
                    var url = thisEl.attr("href");
                    if(url) {
                        document.location.href = url;
                    }
                }
                event.preventDefault();
            });
        });

        return this;
    };
    
}( jQuery ));
