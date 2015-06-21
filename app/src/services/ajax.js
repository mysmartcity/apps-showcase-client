(function(app) {
    'use strict';

    app.factory("AJAX", [
        "$resource",
        "config",
        function($resource, config) {
            return {
                organization: $resource(config.api.url + 'organization/:idOrganization'),
                event: $resource(config.api.url + 'event/:idEvent'),
                project: $resource(config.api.url + 'project/:idProject')
            }
        }
    ]);

}(angular.module("AppsShowcase")));