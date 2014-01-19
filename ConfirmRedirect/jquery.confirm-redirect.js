(function ( $ ) {
    
    $.fn.confirmRedirect = function(options) {
        var settings = $.extend({
            "confirmTitle": "Are you sure?"
        }, options );
        
        this.each(function() {
            $(this).click(function(event) {
                if(confirm(settings.confirmTitle)) {
                    var url = $(this).attr("href");
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