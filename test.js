// Setup namespace
var valtech = window.valtech || {};

// Access jQuery as $ 
(function($) {

    // UI Namespace
    valtech.ui = {
        toggleContent: function(event) {
            var target = $('#' + $(event.currentTarget).attr('aria-controls')); // Using WAI-ARIA as functional links
            var targetState = target.attr('aria-hidden');
            var stateCssClass = 'is-hidden';

            target.toggleClass(stateCssClass)
            target.attr('aria-hidden', function() {
                return targetState === 'true' ? false : true;
            });
            event.preventDefault();
        }

    }
 
})(jQuery);

// Let the page load
jQuery(document).ready(function(){
    
    // Setup click targets
    jQuery('.js-toggleContent').on('click', function(event) {
        valtech.ui.toggleContent(event);
    });

});