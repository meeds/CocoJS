/**
 * Created by ahmedidoumhaidi on 1/01/16.
 */
'use strict';

application.service("NoteService", ["$me"], function ($me) {

    $me.getNotes = function () {
        var promise = new $CocoJS.$Promise();
        setTimeout(function () {
            promise.resolve(new Note('CocoJS title', 'CocosJS description'));
        }, 200);
        return promise;
    };

});
