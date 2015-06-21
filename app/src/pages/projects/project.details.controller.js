
(function(app) {
    'use strict';

    app.controller("ProjectDetailsCtrl", [
        "$scope",
        "AJAX",
        "Notification",
        "$routeParams",
        function($scope, AJAX, Notification, $routeParams) {

            var idProject = $routeParams.idProject;

            AJAX.project.get({idProject: idProject},
                function onSuccess(data) {
                    $scope.project = data;
                    //
                    // Add a default image
                    //
                    if ( ! $scope.project.imageUrl ) {
                        $scope.project.imageUrl = "style/images/organization_default.png";
                    }
                    //
                    // Split technologies list
                    //
                    var technologies = $scope.project.technologies.split(",");

                    $scope.project.technologies = [];
                    for (var i = 0 ; i < technologies.length ; i++) {
                        $scope.project.technologies.push(technologies[i]);
                    }
                    //
                    // Split functionality list
                    //
                    var functionality = $scope.project.functionalities.split("-");

                    $scope.project.functionalities = [];
                    for (i = 0 ; i < functionality.length ; i++) {
                        $scope.project.functionalities.push(functionality[i]);
                    }
                    //
                    // Get event url
                    //
                    var eventUrl = $scope.project.eventURL.split("/");
                    $scope.project.event = "#/event/" + eventUrl[ eventUrl.length - 1 ];

                },
                function onError(error) {
                    Notification.error("Proiectele nu au putut fi citite");
                }
            )
        }]);

}(angular.module("AppsShowcase")));