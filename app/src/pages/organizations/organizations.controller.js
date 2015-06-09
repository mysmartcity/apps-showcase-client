
(function(app) {
    'use strict';

    app.controller("OrganizationsCtrl", [
        "$scope",
        "AJAX",
        "Notification",
        function($scope, AJAX, Notification) {
            //
            // Get list of organizations
            //
            AJAX.organization.query(
                function onSuccess(data) {
                    $scope.organizations = data;
                    //
                    // Add a default image
                    //
                    angular.forEach($scope.organizations, function(organization) {
                        if ( ! organization.imageUrl ) {
                            organization.imageUrl = "style/images/organization_default.png";
                        }
                    })
                },
                function onError(error) {
                    Notification.error("Organizatiile nu au putut fi citite");
                }
            )

        }]);

}(angular.module("AppsShowcase")));