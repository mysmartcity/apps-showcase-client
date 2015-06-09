(function(app) {
    'use strict';

    app.controller("LoginCtrl", [
        "$scope",
        "config",
        function($scope, config) {
            $scope.googleLoginUrl = config.api.url + "oauth/google"
        }
    ]);

}(angular.module("AppsShowcase")));