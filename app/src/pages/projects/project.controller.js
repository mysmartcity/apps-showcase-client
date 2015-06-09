
(function(app) {
    'use strict';

    app.controller("ProjectCtrl", [
        "$scope",
        "AJAX",
        "Notification",
        function($scope, AJAX, Notification) {
            AJAX.project.query(
                function onSuccess(data) {
                    $scope.projects = data;
                    //
                    // Add a default image
                    //
                    var technologies = [], i;
                    angular.forEach($scope.projects, function(project) {
                        if ( ! project.imageUrl ) {
                            project.imageUrl = "style/images/organization_default.png";
                        }
                        technologies = project.technologies.split(",");
                        project.technologies = [];
                        for ( i = 0 ; i < technologies.length ; i++) {
                            project.technologies.push(technologies[i]);
                        }
                    })
                },
                function onError(error) {
                    Notification.error("Proiectele nu au putut fi citite");
                }
            )
        }]);

}(angular.module("AppsShowcase")));