let map = L.map("map").setView([26.765, 88.341], 16);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
//   minZoom: 12,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);
let marker = L.marker([26.765, 88.341]).addTo(map);
marker.bindPopup("<b>Peda</b><br>Peda address").openPopup();