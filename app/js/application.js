/**
 * Created by ahmedidoumhaidi on 28/12/15.
 */

'use strict';

/* Override CocoJS external modules */
$CocoJS.$$factory.JQUERY = function () {
    return $CocoJS.$$window.$;
};

/*  Init my custom app */
var application = $CocoJS.module("Application", ["$me", "JQUERY"], function ($me, jquery) {

    $me.$$factory = {

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

    /* add other config using jquery per example */
    /* ... */

});



