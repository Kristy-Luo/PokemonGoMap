// Bing Map V8 Web Control API: load map (async)
var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AorhxR-W15VbulU0aX5b-KPHXEEnhPtvtzHMrGNTwkYdhUeQ2Fzky8dzELJrPezY'
    });
    add_pokemon_layer_to_map();
}

// 1. Define pokemon data format. And create mock pokemon data to test our map API. 
// To display a pokemon on map, we need coordinate (latitude, longitude), pokemon_id, expiration times. 
map_items = [
    {
        "pokemon_id": 32, 
        "expiration_timestamp_ms": 1492439998000, 
        "longitude": -73.99953096315751, 
        "latitude": 41.72332198248414
    }
]


// 2. Display pokemon image on map by adding a pokemon data layer to the map.
function generate_pokemon_layer(map_items) {
    var pushpins = []
    // Create a pushpin for each map_item (pokemon)
    for map_item in map_items:
        var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
    anchor: new Microsoft.Maps.Point(12, 39) });
        pushpins.append(pushpin);
    
    // Add all pushpins to a layer 
    var layer = new Microsoft.Maps.Layer();
    layer.add(pushpins);
    
    return layer; 
}

function add_pokemon_layer_to_map() {
    var pokemon_layer = generate_pokemon_layer(map_items);
    map.layers.insert(pokemon_layer);
}








// 3. Create pokemon countdown clock refresh. 
// 4. Connect with REST API to fetch pokemon data (dynamic data) from AWS Query Cluster. 
