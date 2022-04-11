<template>
  <div id="mapContainer"></div>
</template>

<script>
import { icon, Marker } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "LeafletMap",
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.map = L.map("mapContainer").setView([51.271428, 12.369805], 16);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

   /*  const iconRetinaUrl = "@/assets/marker-icon-2x.png";
    const iconUrl = "@/assets/marker-icon.png";
    const shadowUrl = "@/assets/marker-shadow.png";
    const iconDefault = icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    });
    Marker.prototype.options.icon = iconDefault; */

    L.marker([51.271428, 12.369805]).addTo(this.map);
  },
  onBeforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },
};
</script>

<style scoped>
#mapContainer {
  width: 750px;
  height: 400px;
  margin: 15px auto;
  border-radius: 5px;
}
</style>
