/**
 * Created by ahmedidoumhaidi on 1/01/16.
 */
'use strict';

application.service("NoteService", ["$me"], function ($me) {

    $me.getNotes = function () {
        var promise = new $CocoJS.$Promise();
        promise.resolve(new application.Note('CocoJS title', 'CocosJS description'));
        return promise;
    };

});
