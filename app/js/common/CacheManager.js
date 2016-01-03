/**
 * Created by ahmedidoumhaidi on 2/01/16.
 */
var CacheManager = CacheManager || (CacheManager = (function () {
        // Instance stores a reference to the Singleton
        var instance = null;

        function CacheManagerInstance() {
            // Private methods and variables
            var cacheLength = 100;

            function createCache() {
                var keys = [];

                function cache(key, value) {
                    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                    if (keys.push(key + " ") > cacheLength) {
                        // Only keep the most recent entries
                        delete cache[keys.shift()];
                    }
                    return (cache[key + " "] = value);
                }

                return cache;
            }


            return {
                // Public methods and variables
                createCache: createCache
            };
        }

        return {
            getInstance: function () {
                if (!instance) {
                    instance = new CacheManagerInstance();
                }
                return instance;
            }
        };

    })());



