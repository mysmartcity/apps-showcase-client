
(function(app) {
    'use strict';

    app.controller("ProjectCtrl", [
        "$scope",
        "AJAX",
        function($scope, AJAX) {
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
                    // TODO: toastr
                    console.log(error);
                }
            )
        }]);

}(angular.module("AppsShowcase")));