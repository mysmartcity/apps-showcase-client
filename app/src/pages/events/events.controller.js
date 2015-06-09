
(function(app) {
    'use strict';

    app.controller("EventsCtrl", [
        "$scope",
        "AJAX",
        "Notification",
        function($scope, AJAX, Notification) {
            AJAX.event.query(
                function onSuccess(data) {
                    $scope.events = data;
                    //
                    // Add a default image
                    //
                    angular.forEach($scope.events, function(event) {
                        if ( ! event.imageUrl ) {
                            event.imageUrl = "style/images/organization_default.png";
                        }
                    })
                },
                function onError(error) {
                    Notification.error("Evenimentele nu au putut fi citite");
                });
        }]);

}(angular.module("AppsShowcase")));