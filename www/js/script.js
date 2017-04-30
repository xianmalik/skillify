angular.module("navRouting", ["ngRoute"])

    .config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when("/", {
                templateUrl : "templates/home.htm"
            })
            .when("/mentors", {
                templateUrl : "templates/mentors.htm"
            })
            .otherwise({
                redirectTo: "/"
            });

        // use the HTML5 History API
        $locationProvider.hashPrefix('').html5Mode({
            enabled: true,
            requireBase: false
        });
    });
