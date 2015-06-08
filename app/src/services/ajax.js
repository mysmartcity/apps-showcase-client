(function(app) {
    'use strict';

    app.factory("AJAX", [
        "$resource",
        "config",
        function($resource, config) {
            return {
                organization: $resource(config.api.url + 'organization/:idOrganization'),
                event: $resource(config.api.url + 'event/:idOrganization'),
                project: $resource(config.api.url + 'project/:idOrganization')
            }
        }
    ]);

}(angular.module("AppsShowcase")));