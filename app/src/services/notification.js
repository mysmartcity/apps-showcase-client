(function(app) {
    'use strict';

    app.factory("Notification", function() {
        toastr.options.preventDuplicates = true;
        toastr.options.closeButton = true;

        return {
            success: function(message) {
                toastr.success(message)
            },
            error: function(message) {
                toastr.error(message)
            }
        }
    })

}(angular.module("AppsShowcase")));