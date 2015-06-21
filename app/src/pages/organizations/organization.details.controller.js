
(function(app) {
    'use strict';

    app.controller("OrganizationDetailsCtrl", [
        "$scope",
        "AJAX",
        "Notification",
        "$routeParams",
        function($scope, AJAX, Notification, $routeParams) {

            var idOrganization = $routeParams.idOrganization;

            AJAX.organization.get({idOrganization: idOrganization},
                function onSuccess(data) {
                    $scope.organization = data;
                    //
                    // Add a default image
                    //
                    console.log(data);
                    if ( ! $scope.organization.imageUrl ) {
                        $scope.organization.imageUrl = "style/images/organization_default.png";
                    }
                },
                function onError(error) {
                    Notification.error("Proiectele nu au putut fi citite");
                }
            )
        }]);

}(angular.module("AppsShowcase")));