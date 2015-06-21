
(function(app) {
    'use strict';

    app.controller("EventDetailsCtrl", [
        "$scope",
        "AJAX",
        "Notification",
        "$routeParams",
        function($scope, AJAX, Notification, $routeParams) {

            var idEvent = $routeParams.idEvent;

            AJAX.event.get({idEvent: idEvent},
                function onSuccess(data) {
                    $scope.event = data;
                    //
                    // Add a default image
                    //
                    if ( ! $scope.event.imageUrl ) {
                        $scope.event.imageUrl = "style/images/organization_default.png";
                    }
                },
                function onError(error) {
                    Notification.error("Proiectele nu au putut fi citite");
                }
            )
        }]);

}(angular.module("AppsShowcase")));