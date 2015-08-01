var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function(router){
    router
        .when('/settings', {
            templateUrl: '/Javascript/intro-to-routing/app/templates/settings_template.html',
            controller: 'SettingsController'
        }).when('/List', {
            templateUrl: '/Javascript/intro-to-routing//app/templates/list_template.html',
            controller: 'ListController'
        }).when('/Details/:DetailID', {
            templateUrl: '/Javascript/intro-to-routing//app/templates/details_template.html',
            controller: 'DetailsController'
        });
}
]);



