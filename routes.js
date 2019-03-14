//Routes
weatherApp.config(function ($routeProvider, $locationProvider, $sceDelegateProvider) {
    $locationProvider.hashPrefix('');

    // $sceDelegateProvider.resourceUrlWhitelist(['http://api.openweathermap.org/data/2.5/forecast/daily?APPID=280d0df558c4ce5b07c25c74d7778930', 'self']);

    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
        })
        .when('/forecast/:days', {
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
        })
});