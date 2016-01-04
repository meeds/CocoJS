/**
 * Created by ahmedidoumhaidi on 1/01/16.
 */
'use strict';

application.controller("NoteController", ['$me', 'NoteService', 'TemplateService', 'JQUERY'],
    function ($me, noteService, templateService, jquery) {

        var start = performance.now();

        /* Controller variables */
        $me.noteTemplate = {};
        $me.notes = [];

        /* Controller functions */
        $me.getAndPopulateNotes = function(templateName){
            var noteContainer = $CocoJS.find("noteContainer").addStyle("padding-top", "60px");
            var promise = templateService.getTemplate(templateName); /* Async template loading */
            promise.done(function (data) {
                /* Set template */
                $me.noteTemplate = data;
                if($CocoJS.$sessionStorage() && !$CocoJS.$sessionStorage().noteTemplate){
                    $CocoJS.$sessionStorage().noteTemplate = data;
                }
                /* Get notes (Async ajax call) return new promise object */
                noteService.getNotes().done(function (note) {

                    $me.notes.push(note);
                    $CocoJS.each($me.notes, function (index, value) {
                        noteContainer.append(Mustache.render(data, value));
                    });

                    var end = performance.now();
                    console.log("Time execution : " + ((end - start)/1000) + " s.");

                }).catch(function (error) {
                    throw "Error getting notes from the remote server : " + error;
                });
            });

            promise.catch(function (error) {
                throw "Error loading template : " + error;
            });
        };

        /* Controller start */
        $me.getAndPopulateNotes.call($me,["../js/template/notetemplate.html"]);

});

