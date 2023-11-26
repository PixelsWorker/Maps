// Create a map centered at a specific location and with an initial zoom level
const map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (using OpenStreetMap tiles) to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// Create a marker and add it to the map
const marker = L.marker([26.1858541, 91.7762986]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Hello world!</b><br>This is a popup.").openPopup();

