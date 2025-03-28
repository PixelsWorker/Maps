// Define map settings and initial values
const mapCenter = [51.505, -0.09];
const mapZoom = 13;
const markerCoordinates = [26.1858541, 91.7762986];
const popupContent = "<b>Hello world!</b><br>This is a popup.";

// Initialize the map with a specified center and zoom level
const map = L.map('map').setView(mapCenter, mapZoom);

// Add OpenStreetMap tile layer
function addTileLayer() {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);
}

// Create a marker and bind a popup to it
function createMarker() {
  const marker = L.marker(markerCoordinates).addTo(map);
  marker.bindPopup(popupContent).openPopup();
}

// Call functions to add layers and markers
function initMap() {
  addTileLayer();
  createMarker();
}

// Initialize the map
initMap();
