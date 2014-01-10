(function ( $ ) {
    
    $.fn.inputLengthLimit = function(options) {
        var settings = $.extend({
            maxLen: 255,
            mes: "Chars rest: %",
            mesCssClass: "jq_length_limit_mes",
            mesTag: "span",
            mesReplaceChar: "%"
        }, options );

        this.each(function() {
            var len = $(this).val().length;
            var rest = settings.maxLen < len ? 0 : settings.maxLen - len;
            $(this).after("<" + settings.mesTag + " class=\"" + settings.mesCssClass + "\">" 
                              + settings.mes.replace(settings.mesReplaceChar, rest)
                              + "</" + settings.mesTag + ">");
            
            $(this).keyup(function () {
                var len = $(this).val().length;
                var rest = settings.maxLen < len ? 0 : settings.maxLen - len;
                // console.log("Len: " + len + " of " + settings.maxLen + " (rest: " + rest + ")");
                $(this).next("." + settings.mesCssClass).text(settings.mes.replace(settings.mesReplaceChar, rest));
                
                if(rest < 1) {
                    limitedText = $(this).val().substr(0, settings.maxLen);
                    $(this).val(limitedText);
                }
            });

        });

        return this;
    };
    
}( jQuery ));