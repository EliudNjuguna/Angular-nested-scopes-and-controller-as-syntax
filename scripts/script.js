
/// <reference path="angular.min.js" />

var app = angular
            .module("Demo", [])
            .controller("countryController", function(){
                this.name = "Kenya";

            })
            .controller("stateController",function() {
                // body...
                this.name = "Nairobi";
            })
            .controller("cityController",function(){
                this.name = "Mombasa";
            })