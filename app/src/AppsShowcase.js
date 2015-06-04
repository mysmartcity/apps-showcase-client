
(function() {
    'use strict';

    var AppsShowcase = angular.module("AppsShowcase", ["ngRoute"]);

    AppsShowcase.config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "src/pages/home/home.html",
                controller: "HomePageCtrl"
            })
            .when("/projects", {
                templateUrl: "src/pages/projects/project.list.html",
                controller: "ProjectCtrl"
            })
            .when("/organizations", {
                templateUrl: "src/pages/organizations/organizations.list.html",
                controller: "OrganizationsCtrl"
            })
            .when("/events", {
                templateUrl: "src/pages/events/events.list.html",
                controller: "EventsCtrl"
            })
            .otherwise({redirectTo: "/"})
    }]);

}());