(function ( $ ) {
    
    $.fn.selall = function(options) {
        var settings = $.extend({
            "checkAllSelector": "",
            "uncheckAllSelector": "",
            "toggleSelector": "",
            "itemsSelector": "input[name=ids\\[\\]]"
        }, options );
        
        if(settings.checkAllSelector) {
            $(settings.checkAllSelector).click(function (event) {
                check(settings.itemsSelector);
                event.preventDefault();
            });
        }

        if(settings.uncheckAllSelector) {
            $(settings.uncheckAllSelector).click(function (event) {
                uncheck(settings.itemsSelector);
                event.preventDefault();
            });
        }
        
        if(settings.toggleSelector) {
            $(settings.toggleSelector).click(function () {
                console.log("ll");
                if(this.checked) {
                    check(settings.itemsSelector);
                } else {
                    uncheck(settings.itemsSelector);
                }
            });
        }

        return this;
    };
    
    function check(sel) {
        $(sel).each(function () {
            $(this).prop("checked", "checked");
        });
    }
    
    function uncheck(sel) {
        $(sel).each(function () {
            $(this).removeAttr("checked");
        });
    }
    
}( jQuery ));