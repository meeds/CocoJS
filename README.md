# CocoJS
$CocoJs is a JavaScript MVC framework

# Quickstart

Include the /dist/cocojs.js as a javascript dependency in your application.

With the $CocoJS you can :

1 - Define the $CocoJS factory with other library as JQUERY

$CocoJS.factory = {
    'JQUERY' : $CocoJS.$$document.$ 
}

2 - Define your application module

                               
var myApplication = $CocoJS.module($CocoJS,"myApplication",['myApplication'],function(scope){

     myApplication.factory = {
        'JQUERY' : $CocoJS.$$document.$ 
     }

});

# $Cocojs modules 

1 - Define a Component :


myApplication.component(myApplication,"HomeComponent",['HomeComponent','HomeController','JQUERY'],function(scope,homeController,jquery){


});

1 - Define a Controller :


myApplication.controller(myApplication,"HomeController",['HomeController','HomeService','JQUERY'],function(scope,homeService,jquery){


});


2 - Define a Service :


myApplication.service(myApplication,"HomeService",['HomeService','HomeRepository','JQUERY'],function(scope,homeRepository,jquery){


});


3 - Define a Repository :


myApplication.repository(myApplication,"HomeRepository",['HomeRepository','JQUERY'],function(scope,jquery){


});

# OElement (The right way to encapsulate your html element) 


