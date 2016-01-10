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

    $me.entity = $CocoJS.entity;

//    var obj = {};
//
//    // en recyclant un objet
//    function addConstant(value) {
//        var d = addConstant.d || (
//                addConstant.d = {
//                    enumerable: true,
//                    writable: false,
//                    configurable: false,
//                    value: null
//                }
//            );
//        d.value = value;
//        return d;
//    }
//
//// en utilisant __proto__
//    Object.defineProperty(obj, "test", addConstant("Hello"));
//
//    console.log(obj.test);
//
//    (Object.freeze||Object)(Object.prototype);



    /* add other config using jquery per example */
    /* ... */

});



