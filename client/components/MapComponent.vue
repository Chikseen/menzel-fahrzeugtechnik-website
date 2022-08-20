<template>
  <div id="map"></div>
</template>
<script>
export default {
  name: 'leaflet-map',
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
}
</script>

<style>
#map {
  height: 400px;
  max-width: 550px;
  margin: 15px auto;
  border-radius: 10px;
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