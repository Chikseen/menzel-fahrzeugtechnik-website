
const lmap = L.map('map').setView([51.271428, 12.369805], 15);

const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileURL, { 
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    zoomOffset: 0
 })

tiles.addTo(lmap);

L.marker([51.271428, 12.369805]).addTo(lmap)


