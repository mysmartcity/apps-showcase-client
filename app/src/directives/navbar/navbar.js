
(function(app) {
    'use strict';

    app.directive("navbar", [
        "$location",

        function($location) {
            return {
                restrict: "AE",
                templateUrl: "src/directives/navbar/navbar.html",
                link: function($scope) {
                    $scope.atPage = function(page) {
                        return $location.path() === page;
                    }
                }
            };
        }]);

}(angular.module("AppsShowcase")));