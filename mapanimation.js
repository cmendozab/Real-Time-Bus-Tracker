// This array contains the coordinates for several cities / countries.
const busStops = [
  [-86.87235862789244, 21.041954042478693],
  [-90.53182978808131, 14.59521198267536],
  [-74.0425, 3.8231],
  [-78.6235, 0.0742],
  [-71.0048, -33.2228],
  [-58.4455, -34.6102],
  [-46.7257, -23.5664],
  [-86.87235862789244, 21.041954042478693]
];

// Add your own access token
mapboxgl.accessToken = '';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-77.04550626681687, -12.038586056772019],
  zoom: 3,
});

// Add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"

var marker = new mapboxgl.Marker({color: '#F84C4C'}).setLngLat([-86.87235862789244, 21.041954042478693]).addTo(map)   //Nota: No colocar ; después de esta instrucción
//var marker = new mapboxgl.Marker().setLngLat([-90.5749, 14.5403]).addTo(map)   //Nota: No colocar ; después de esta instrucción


// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // Move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(() => {
    if(counter >= busStops.length){return}; 
    marker.setLngLat(busStops[counter]);
    console.log(busStops[console]);
    counter++;
    move();
  }, 1000);

}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
