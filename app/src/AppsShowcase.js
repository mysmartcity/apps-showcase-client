
(function() {
    'use strict';

    var AppsShowcase = angular.module("AppsShowcase", [
        "ngRoute",
        "ngResource"
    ]);

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
            .when("/project/:idProject", {
                templateUrl: "src/pages/projects/project.details.html",
                controller: "ProjectDetailsCtrl"
            })
            .when("/organizations", {
                templateUrl: "src/pages/organizations/organizations.list.html",
                controller: "OrganizationsCtrl"
            })
            .when("/organization/:idOrganization", {
                templateUrl: "src/pages/organizations/organization.details.html",
                controller: "OrganizationDetailsCtrl"
            })
            .when("/events", {
                templateUrl: "src/pages/events/events.list.html",
                controller: "EventsCtrl"
            })
            .when("/event/:idEvent", {
                templateUrl: "src/pages/events/event.details.html",
                controller: "EventDetailsCtrl"
            })
            .when("/login", {
                templateUrl: "src/pages/login/login.html",
                controller: "LoginCtrl"
            })
            .otherwise({redirectTo: "/"})
    }]);

    AppsShowcase.constant("config", {
        api: {
            url: "http://ec2-52-28-69-136.eu-central-1.compute.amazonaws.com/"
        }
    })
}());