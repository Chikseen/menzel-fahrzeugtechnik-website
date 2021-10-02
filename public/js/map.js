const map = L.map('map').setView([51.277028, 12.363394], 15);

/*
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileURL, { attribution })*/

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoiY2hpa3NlZW4iLCJhIjoiY2t1OW1kb2JqMDhjMDMybDlhOHkxajJ4bSJ9.BaTZjQfXLOexJu0ArXZyNA}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

//tiles.addTo(map);

L.marker([51.271430,12.369738]).addTo(map)
