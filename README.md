# CocoJS
$CocoJs is a JavaScript MVC framework

# Quickstart

Include the /dist/cocojs.js as a javascript dependency in your application.

With the $CocoJS you can :

1 - Define the $CocoJS factory with other library as JQUERY

$CocoJS.factory = {
    'JQUERY' : $CocoJS.$$document.$ /* Don't forget to add the jquery js dependency (<script src="...jquery"/>)*/
}

2 - Define your application module

                                /* Parent,Application-name,Dependencies,Scope of The current application*/
var myApplication = $CocoJS.module($CocoJS,"myApplication",['myApplication'],function(scope){

     /* Define your application factory */
     myApplication.factory = {
        'JQUERY' : $CocoJS.$$document.$ /* Don't forget to add the jquery js dependency (<script src="...jquery"/>)*/
     }

});


3 - Define a Controller :


myApplication.controller(myApplication,"HomeController",['HomeController','JQUERY'],function(scope,jquery){


});


4 - Define a Service :


myApplication.service(myApplication,"HomeService",['HomeService','JQUERY'],function(scope,jquery){


});


5 - Define a Repository :


myApplication.repository(myApplication,"HomeRepository",['HomeRepository','JQUERY'],function(scope,jquery){


});

6 - Use $CocoJs global methods to fetch and manipulate the dom element as a OElement object.

/* OElement object is an class who encapsulate a html element and provide functions to manipulate it */

var oelement = $CocoJS.OElement(element);

* Example :

Fetch an element by id :

            var oelement = $CocoJS.find(htmlElementID);
            oelement.addClass(className);

------------------------------------  TO BE CONTINUED ------------------------------------------