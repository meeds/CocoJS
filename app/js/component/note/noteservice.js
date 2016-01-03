/**
 * Created by ahmedidoumhaidi on 1/01/16.
 */
'use strict';

application.service(application, "NoteService", ["NoteService"], function (scope) {

    scope.getNotes = function () {
        var promise = new $CocoJS.$Promise();
        setTimeout(function () {
            promise.resolve(new Note('Welcome home', 'Hello welcome to home'));
        }, 200);
        return promise;
    };

});
