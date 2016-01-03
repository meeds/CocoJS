/**
 * Created by ahmedidoumhaidi on 1/01/16.
 */
'use strict';

//jsHome           = window.jsHome || (window.jsHome = {}),

(function (application) {
    // The global object is passed as a parameter
    application(window, document);

}(function (window, document) {

    // Init variables
    var board = null;
    board = document.getElementById("board");

    var person = {firstName: 'ahmed', lastName: 'idoumhaidi', age: 24};
    person.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    };

    //Person.call(this);
    //person.prototype = Object.create(XXX.prototype);
    // Person.prototype.constructor=cat


    //Object.getOwnPropertyDescriptor(person,'firstName')
    // Object.Freeze
    //Object.defineProperty(person,'firstName',{writable:false});
    //
    //try{
    //    person.firstName = 'Mehdi';
    //    display(person.firstName);
    //}catch (e){
    //    console.log('My Error : ',e);
    //}

    //Object.defineProperty(person,'firstName',{configurable:false});
    //
    //
    //
    //delete person.firstName;
    //display(person.firstName);


    //Object.defineProperty(person,'fullName',{
    //    get : function(){
    //        return this.firstName;
    //    }
    //});
    //
    //display(person.fullName);

    // Application Commons Functions
    function display(message) {
        board.innerHTML = message;
    }

    function displayWithAppend(message) {
        board.innerHTML += message;
    }

    // Init Objects And Classes


}));

/* File testing */
//(function(){
//
//    var allowedTypes = ['png', 'jpg', 'jpeg', 'gif'];
//    var progressBar = document.getElementById("progressBar");
//
//    document.getElementById("fileIpt").addEventListener("change",function(event){
//        var files = this.files;
//
//        if(files.length > 0 && allowedTypes.indexOf(getLowerCaseFileMimeType(files[0])) != -1
//            && files[0].size <= 2097152){
//
//            var file = files[0];
//            var reader = new FileReader();
//
//            console.log(file.size);
//
//            reader.addEventListener("load",function(){
//
//                var image = document.createElement("img");
//                image.style.maxWidth = '200px';
//                image.style.maxHeight = '200px';
//                image.src = this.result;
//                document.getElementById("imageContainer").appendChild(image);
//
//            },false);
//
//
//            reader.addEventListener("progress",function(e){
//                progressBar.value = e.loaded;
//                progressBar.total = e.total;
//            });
//
//
//            reader.readAsDataURL(file);
//
//        }else{
//            alert("Veuillez choisir un fichier avec l'extension (png)");
//        }
//
//        event.stopPropagation();
//        //event.returnValue = true; IE Support.
//    },false);
//
//
//    function getLowerCaseFileMimeType(file){
//        var split = file.name.split('.');
//        return split[split.length - 1].toLowerCase();
//    }
//
//})();


//var noteRequest = new XMLHttpRequest();
//
//noteRequest.addEventListener('readystatechange', function() { // On gère ici une requête asynchrone
//    if (noteRequest.readyState == 4 && noteRequest.status == 200) { // Si le fichier est chargé sans erreur
//
//    } else if (noteRequest.readyState == 4 && noteRequest.status != 200) { // En cas d'erreur !
//
//    }
//}, true); /* Async */