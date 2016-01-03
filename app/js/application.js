/**
 * Created by ahmedidoumhaidi on 28/12/15.
 */
'use strict';

/* Override CocoJS modules */
$CocoJS.$$factory.JQUERY = function () {
    return $CocoJS.$$window.$;
};

/*  Init my custom app */
var application = $CocoJS.module($CocoJS, "Application", ["Application", "JQUERY"], function (scope, jquery) {

    scope.$$factory = {

        'TemplateService': function () {
            return TemplateService.getInstance();
        },

        'HttpService': function () {
            return HttpService.getInstance();
        },

        'JQUERY': function () {
            return jquery;
        }
    };

});



