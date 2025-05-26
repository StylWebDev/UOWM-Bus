<script setup lang="ts">
// @ts-ignore
import { Map, MapStyle, Marker, config } from '@maptiler/sdk';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';
import '@maptiler/sdk/dist/maptiler-sdk.css';


const props =defineProps<{
 long: number;
 lati: number;
}>();

const mapContainer = shallowRef<any>(null);
const map = shallowRef<any>(null);

onMounted(() => {
  config.apiKey = 'dbkvY3lkuc3LomMaXvcY';

  const initialState = { lng: props.long, lat: props.lati, zoom: 18 };

  map.value = markRaw(new Map({
    container: mapContainer.value,
    style: MapStyle.STREETS,
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom
  }));

  new Marker({color: "#FF0000"})
      .setLngLat([props.long,initialState.lat])
      .addTo(map.value);

}),
    onUnmounted(() => {
      map.value?.remove();
    })
</script>

<template>
  <div class="map " ref="mapContainer"></div>
</template>

<style scoped>

.map {
  width: 100%;
  height: 70vh;
  border-radius: 30px;
}
</style>