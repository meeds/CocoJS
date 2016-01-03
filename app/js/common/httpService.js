/**
 * Created by ahmedidoumhaidi on 2/01/16.
 */
var HttpService = (function () {
    // Instance stores a reference to the Singleton
    var instance = null;

    function HttpServiceInstance() {
        // Private methods and variables
        function get(url) {
            var promise = new $CocoJS.$Promise();
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.addEventListener('readystatechange', function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    promise.resolve(xhr.responseText);
                } else if (xhr.readyState === 4 && xhr.status !== 200) {
                    promise.fail(xhr.responseText);
                }
            }, true);
            xhr.send(null);
            return promise;
        }

        return {
            // Public methods and variables
            get: get
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = new HttpServiceInstance();
            }
            return instance;
        }
    };

})();
