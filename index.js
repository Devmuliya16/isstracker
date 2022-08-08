//for iss location
const el = document.createElement('div');
el.className = 'marker';
el.style.backgroundImage = "url('./iss.png')";
el.style.backgroundSize = '100%';

//for map
async function getiss(url) {
    const response = await fetch(url);
    var data = await response.json();
    //this can be done through XML which is learned in javascript sections
    
    document.getElementById('velocity').innerHTML= `velocity = ${data.velocity}`;

    
    new mapboxgl.Marker(el)
    .setLngLat([data.longitude, data.latitude])
    .addTo(map);
}

function callback(){
    const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
    getiss(api_url);
}
setInterval(callback,100);




var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
getLocation();
function showPosition(position) {
    x.innerHTML = "your location <br>long: "+position.coords.longitude+"lat: "+position.coords.latitude;
    new mapboxgl.Marker()
    .setLngLat([position.coords.longitude,position.coords.latitude])
    .addTo(map);
}

