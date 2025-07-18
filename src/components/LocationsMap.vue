<script setup lang="ts">
defineProps<{
 long: number;
 lati: number;
}>();

const GKEY = import.meta.env.VITE_GKEY
</script>

<template>
  <iframe
      referrerpolicy="no-referrer"
      class="max-md:w-full w-[95vw] md:rounded-2xl h-[70vh]"
      :src="`https://www.google.com/maps/embed/v1/place?key=${GKEY}&q=${lati+','+long}`"/>
</template>

<style scoped>
</style>