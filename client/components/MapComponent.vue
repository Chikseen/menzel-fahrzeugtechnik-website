<template>
  <div id="map"></div>
</template>
<script>
import markerIcon from "~/assets/mapIcons/marker-icon.png"
import markerIconShadow from "~/assets/mapIcons/marker-shadow.png"

export default {
  name: 'leaflet-map',
  mounted() {

    const lmap = L.map("map").setView([51.271428, 12.369805], 16);

    var greenIcon = L.icon({
      iconUrl: markerIcon,
      shadowUrl: markerIconShadow,

      iconSize: [24, 40], // size of the icon
      shadowSize: [24, 40], // size of the shadow
      iconAnchor: [12, 40], // point of the icon which will correspond to marker's location
      shadowAnchor: [7, 40],  // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tiles = L.tileLayer(tileURL, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      zoomOffset: 1,
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
    });

    tiles.addTo(lmap);
    L.marker([51.271428, 12.369805], {icon: greenIcon}).addTo(lmap);
  },
}
</script>

<style>
#map {
  height: 400px;
  max-width: 550px;
  margin: 15px auto;
  border-radius: 3px;
}
</style>

<!-- <template>
  <div id="map">
    <p>PLACEHOLDER</p>
  </div>
</template>

<script>
const L = require("leaflet");

export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const lmap = L.map("map").setView([51.271428, 12.369805], 16);

    const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tiles = L.tileLayer(tileURL, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      zoomOffset: 1,
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
    });

    tiles.addTo(lmap);

    L.marker([51.271428, 12.369805]).addTo(lmap);
  },
};
</script>

<style>
#map {
  height: 400px;
  max-width: 550px;
  margin: 15px auto;
  border-radius: 10px;
}
</style>
 -->