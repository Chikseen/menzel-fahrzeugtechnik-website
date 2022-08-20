// src/plugins/vue-leaflet.js
import 'leaflet/dist/leaflet.css'
import Vue from 'vue'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

const VueLeaflet = {
  install(Vue) {
    Vue.component('l-map', LMap)
    Vue.component('l-marker', LMarker)
    Vue.component('l-tile-layer', LTileLayer)
  },
}
Vue.use(VueLeaflet)
export default VueLeaflet
