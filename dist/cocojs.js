/**
 * Created by ahmedidoumhaidi on 3/01/16.
 */
'use strict';

(function (global) {

        var $CocoJS = {};
        var version = "1.0.0";
        var meStr = "$me";

        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        var strundefined = typeof undefined;

        var isUndefined, isDefined, isObject, isString, isNumber, isDate, isArrayLike, selectElement, selectElements,
            factory = {}, module, injector, each, trim, now, map, find,sessionStorage;

        /* Define utils functions */

        isUndefined = function (value) {
            return typeof value === 'undefined';
        };
        isDefined = function (value) {
            return typeof value !== 'undefined';
        };
        isObject = function (value) {
            return value !== null && typeof value === 'object';
        };
        isString = function (value) {
            return typeof value === 'string';
        };
        isNumber = function (value) {
            return typeof value === 'number';
        };
        isDate = function (value) {
            return "".toString.call(value) === '[object Date]';
        };
        isArrayLike = Array.isArray;
        find = function (id) {
            return new OElement(global.document.getElementById(id));
        };
        selectElement = function (cssSelector) {
            return global.document.querySelector(cssSelector);
        };
        selectElements = function (cssSelector) {
            return global.document.querySelectorAll(cssSelector);
        };
        now = function () {
            return +( new Date() );
        };
        trim = function (text) {
            return text == null ?
                "" :
                ( text + "" ).replace(rtrim, "");
        };
        each = function (obj, callback, args) {
            var value,
                i = 0,
                length = obj.length,
                isArray = isArrayLike(obj);

            if (args) {

                if (isArray) {
                    for (; i < length; i++) {
                        value = callback.apply(obj[i], args);

                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.apply(obj[i], args);

                        if (value === false) {
                            break;
                        }
                    }
                }

            } else {
                if (isArray) {
                    for (; i < length; i++) {
                        value = callback.call(obj[i], i, obj[i]);

                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.call(obj[i], i, obj[i]);

                        if (value === false) {
                            break;
                        }
                    }
                }
            }

            return obj;
        };

        map = function (elems, callback, arg) {
            var value,
                i = 0,
                length = elems.length,
                isArray = isArrayLike(elems),
                ret = [];

            if (isArray) {
                for (; i < length; i++) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret.push(value);
                    }
                }

            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret.push(value);
                    }
                }
            }

            return "".concat.apply([], ret);
        };

        /* OElement Object */
        function OElement(htmlElement) {
            this.htmlElement = htmlElement;
            /* Getters and Setters */
            Object.defineProperties(this, {
                "htmlElement": {
                    get: function () {
                        return htmlElement;
                    },
                    set: function (value) {
                        htmlElement = value;
                    }
                }
            });
        }

        OElement.prototype.text = function (value) {

            if ($CocoJS.isDefined(value) && value !== null) {
                this.htmlElement.innerText = value;
            }

            var nodeType = this.htmlElement.nodeType;

            if (nodeType === 3 || nodeType === 4) {
                return this.htmlElement.nodeValue;
            }

            return this.htmlElement.textContent || this.htmlElement.innerText || '';
        };

        OElement.prototype.firstChild = function () {
            var children = this.htmlElement.childNodes;
            for (var i = 0, c = children.length; i < c; i++) {
                if (children[i].nodeType === 1) {
                    return new OElement(children[i]);
                }
            }
            return null;
        };

        OElement.prototype.append = function (htmlElement) {
            this.htmlElement.innerHTML += htmlElement;
            return this;
        };

        OElement.prototype.addClass = function (className) {
            this.htmlElement.classList.add(className);
            return this;
        };

        OElement.prototype.removeClass = function (className) {
            this.htmlElement.classList.remove(className);
            return this;
        };


        OElement.prototype.addClassWithIESupport = function (className) {
            this.htmlElement.className += " " + className;
        };

        OElement.prototype.findClasses = function () {
            var classes = this.htmlElement.className;
            var classesTab = [];
            classes = classes.split(' ');

            for (var i = 0, c = classes.length; i < c; i++) {
                if (classes[i]) {
                    classesTab.push(classes[i]);
                }
            }
            return classesTab;
        };

        OElement.prototype.parent = function () {
            var parent = this.htmlElement.parentNode;
            return parent && parent.nodeType !== 11 ? new OElement(parent) : null;
        };

        OElement.prototype.addStyle = function (name, value) {
            this.htmlElement.style[name] = value;
            return this;
        };


        /* define module */
        module = function (moduleName, dependencies, context) {
            'use strict';

            if ($CocoJS.isUndefined(this[moduleName])) {
                this[moduleName] = {};
                this[moduleName].module = $CocoJS.module;
                this[moduleName].controller = $CocoJS.controller;
                this[moduleName].service = $CocoJS.service;
                this[moduleName].repository = $CocoJS.repository;
                var injector = $CocoJS.injector(dependencies);
                context.apply(context, injector.inject(this,this[moduleName]));
            } else {
                console.warn(moduleName + " module is already defined.");
            }

            return this[moduleName];
        };

        /* define dependency injector */
        injector = function (dependencies) {

            function inject(parent,meObject) {

                var dependenciesObject = [], parentFactory = parent.$$factory;

                for (var i = 0;i < dependencies.length; i++) {

                    if(dependencies[i] === meStr){
                        dependenciesObject.push(meObject);
                    }else{

                        if ($CocoJS.isDefined(parentFactory[dependencies[i]])) {

                            dependenciesObject.push(parentFactory[dependencies[i]]());

                        } else if ($CocoJS.isDefined(parent[dependencies[i]])) {

                            dependenciesObject.push(parent[dependencies[i]]);

                        } else if ($CocoJS.isDefined($CocoJS.$$factory[dependencies[i]])) {

                            dependenciesObject.push($CocoJS.$$factory[dependencies[i]]());

                        } else if ($CocoJS.isDefined($CocoJS[dependencies[i]])) {

                            dependenciesObject.push($CocoJS[dependencies[i]]);

                        } else {
                            console.error("Dependency of " + dependencies[i] + " doesn't exist in the factory config of the application");
                        }

                }
              }
                return dependenciesObject;
            }

            return {
                inject: inject
            }
        };

        /* Promise API */
        function Promise() {
            var status = 'progress',
                fail = [],
                done = [],
                data;

            this.done = function (fn) {
                done.push(fn);
                if (status === 'done') {
                    fn(data);
                }
                return this;
            };

            this.catch = function (fn) {
                fail.push(fn);
                if (status == "failed") {
                    fn(data);
                }
                return this;
            };

            this.resolve = function (result) {
                if (status !== 'progress') {
                    throw 'Promise has already completed with this status : ' + status + '.';
                }

                data = result;
                status = 'done';

                for (var i = 0, il = done.length; i < il; i++) {
                    done[i](data);
                }
            };

            this.fail = function (reason) {
                if (status !== 'progress') {
                    throw 'Promise has already completed with this status : ' + status + '.';
                }

                data = reason;
                status = 'failed';

                for (var i = 0, il = fail.length; i < il; i++) {
                    fail[i](data);
                }
            };
        }

        /* Storage */
        sessionStorage = function(){
            if(typeof(global.Storage) !== "undefined") {
                return global.sessionStorage;
            } else {
                console.log("Sorry! No Web Storage support..");
                return false;
            }
        };

        return global.$CocoJS || (global.$CocoJS = $CocoJS = {

                $$version: version,
                /* Html global local scoped */
                $$window: global,
                /* Principal $CocoJS element */
                OElement: OElement,
                /* Utils functions */
                isUndefined: isUndefined,
                isDefined: isDefined,
                isObject: isObject,
                isString: isString,
                isNumber: isNumber,
                isDate: isDate,
                isArrayLike: isArrayLike,
                each: each,
                find: find,
                selectElement: selectElement,
                selectElements: selectElements,
                trim: trim,
                now: now,
                map: map,
                /* Define Factory */
                $$factory: factory,
                /* Define modules */
                module: module,
                controller: module,
                service: module,
                repository: module,
                component: module,
                /* Define injector */
                injector: injector,
                /* Promise object*/
                $Promise: Promise,
                $sessionStorage : sessionStorage

            });

})(window);

console.log("Welcome to $CocoJS version : " + window.$CocoJS.$$version);
