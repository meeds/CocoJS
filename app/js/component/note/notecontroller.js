/**
 * Created by ahmedidoumhaidi on 1/01/16.
 */
'use strict';

application.controller(application, "NoteController", ['NoteController', 'NoteService', 'TemplateService', 'JQUERY'],
    function (scope, noteService, templateService, jquery) {

        scope.noteContainer = $CocoJS.find("noteContainer").addStyle("padding-top", "60px");
        scope.noteTemplate = {};
        scope.notes = [];

        var promise = templateService.getTemplate("../js/template/notetemplate.html");

        promise.done(function (data) {

            /* Set template */
            scope.noteTemplate = data;
            /* Get notes */
            noteService.getNotes().done(function (note) {

                scope.notes.push(note);
                $CocoJS.each(scope.notes, function (index, value) {
                    scope.noteContainer.append(Mustache.render(data, value));
                });

            }).catch(function (error) {
                throw "Error getting notes from the remote server : " + error;
            });

        });

        promise.catch(function (error) {
            throw "Error loading template : " + error;
        });

    });