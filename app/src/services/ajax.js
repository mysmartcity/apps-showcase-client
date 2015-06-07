(function(app) {
    'use strict';

    app.factory("AJAX", [
        "$resource",
        "config",
        function($resource, config) {
            return {
                organization: $resource(config.api.url + 'organization/:idOrganization')
            }
        }
    ]);

}(angular.module("AppsShowcase")));