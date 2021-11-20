// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// ALTERNATIVE METHOD
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });
// ALTERNATIVE METHOD END

//  Add a marker to the map for Los Angeles, California.
//  this will creat a circle that is fixed throughout different zoom levels
// let marker = L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color:'black',
//     fillColor:'#FFFFa1'
//  }).addTo(map);

// let marker = L.circle([34.0522, -118.2437], {
//     radius: 300000,
//     color:'black',
//     fillColor:'#FFFFa1'
//  }).addTo(map);

// Get data from cities.js
let cityData = cities;


// loop through cities to map all points
// for (let i = 0; i < cities.length; i++); // alt way of doing it
cities.forEach(function(city){
  console.log(city)
  L.circleMarker(city.location, {
    radius: (city.population - 200000)/100000,
    fillColor: 'orange',
    color: 'orange',
    weight: 4
  })
  // .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population "+ city.population.toLocaleString() + "</h3>")
  .bindPopup(`<h2> ${city.city}, ${city.state} </h2> <hr> <h3>Population ${city.population.toLocaleString()} </h3>`) // toLocaleString() adds comma sperators
  .addTo(map);
});


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//  OTHER MAP IDS :
// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11
//  OTHER MAP IDS END

// We create the tile layer that will be the background of our map. PROVIDE BY MODULE
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

