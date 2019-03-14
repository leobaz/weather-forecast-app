// Services
weatherApp.service('cityService', function () {
    this.city = 'New York';
});

weatherApp.service('weatherService', ['$resource', function ($resource) {

    this.GetWeather = function (city, days) {
        var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast?APPID=280d0df558c4ce5b07c25c74d7778930', {
            jsonpCallbackParam: 'cb'

        });

        return weatherAPI.get({
            q: city,
            cnt: days
        });
    };
}]);