/**
 * Created by ahmedidoumhaidi on 2/01/16.
 */
var TemplateService = (function () {
    // Instance stores a reference to the Singleton
    var instance = null;

    function TemplateServiceInstance() {
        // Private methods and variables
        function getTemplate(templatePath) {
            return HttpService.getInstance().get(templatePath);
        }

        return {
            // Public methods and variables
            getTemplate: getTemplate
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = new TemplateServiceInstance();
            }
            return instance;
        }
    };

})();