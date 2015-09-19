'use strict';
var appModule = angular.module('suApp',[]);

appModule.controller('loginController', function() {});

appModule.directive('optIn', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div ng-transclude></div><login></login>'
    }
});

appModule.directive('login', function() {
    return {
        restrict: 'E',
        templateUrl: "./sign-up/sign-up-form.html"
    }
});