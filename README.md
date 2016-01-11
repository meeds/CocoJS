# CocoJS
$CocoJs is a JavaScript MVC framework

 
# Quick start


/* Use $CocoJS object to create a new module for your application */
var application = $CocoJS.module("Application", ["$me", "JQUERY"], function ($me) {

  /* Configure your application by adding a factory */
  $me.$$factory = {
        "JQUERY" : $CocoJS.$$window.$;
  }

});


/* Create a new service */
application.service("NoteService", ["$me"],
    function ($me) {
       /* Add functions and others properties using $me ... */
});

/* Create a new Controller and inject automatically your Service already created with JQUERY */
application.controller("NoteController", ['$me', 'NoteService','JQUERY'],
    function ($me, noteService, jquery) {

});

/* Add a parent entity */
application.entity("Entity", null, function construct(className) {

    /* Fields */
    this.className = className;

});

/* Create a child entity */
application.entity("Note", Entity, function construct(title, description) {

    /* Parent constructor call */
    Entity.call(this, "Note");

    /* Fields */
    this.title = title;
    this.description = description;

    /* Functions */
    this.fullDescription = function () {
        return title + " " + description;
    };

    /* Getters and Setters */
    Object.defineProperties(this, {
        "title": {
            get: function () {
                return title;
            },
            set: function (value) {
                title = value;
            }
        },

        "description": {
            get: function () {
                return description;
            },
            set: function (value) {
                description = value;
            }
        }
    });

});

