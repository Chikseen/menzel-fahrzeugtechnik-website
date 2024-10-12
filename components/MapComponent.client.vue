<template>
	<LMap class="contact_map" ref="map" :zoom="15" :center="[51.271428, 12.369805]" :use-global-leaflet="false">
		<LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
			layer-type="base" name="OpenStreetMap" />
		<l-marker :lat-lng="[51.271428, 12.369805]">
		</l-marker>
	</LMap>
</template>

<script setup>
import { ref } from 'vue'
const zoom = ref(6)
</script>