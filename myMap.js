// Bing Map V8 Web Control API: load map (async)

var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'Your Bing Maps Key'
    });
}
