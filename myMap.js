// Bing Map V8 Web Control API: load map (async)
var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AorhxR-W15VbulU0aX5b-KPHXEEnhPtvtzHMrGNTwkYdhUeQ2Fzky8dzELJrPezY'
    });
}

// 1. Define pokemon data format. And create mock pokemon data to test our map API. 
// To display a pokemon on map, we need coordinate (latitude, longitude), pokemon_id, expiration times. 
map_item = [
    {
        "pokemon_id": 32, 
        "expiration_timestamp_ms": 1492439998000, 
        "longitude": -73.99953096315751, 
        "latitude": 41.72332198248414
    }
]


// 2. Create and display pokemon image to map. 
// 3. Create pokemon countdown clock refresh. 
// 4. Connect with REST API to fetch pokemon data (dynamic data) from AWS Query Cluster. 
