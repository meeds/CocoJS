/**
 * Created by ahmedidoumhaidi on 1/01/16.
 */
'use strict';


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