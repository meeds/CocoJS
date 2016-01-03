/**
 * Created by ahmedidoumhaidi on 1/01/16.
 */
'use strict';

function Note(title, description) {
    Entity.call(this, "Note");
    this.title = title || "";
    this.description = description || "";

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
}

/* Set Inheritance and correct constructor */
Note.prototype = Object.create(Entity.prototype);
Note.prototype.constructor = Note;
