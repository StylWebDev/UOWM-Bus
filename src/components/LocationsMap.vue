<script setup lang="ts">
const router = useRouter();

const {long, lati, userLon=0, userLat=0} = defineProps<{
 long: number;
 lati: number;
 userLon?: number;
 userLat?: number;
}>();

const GKEY = import.meta.env.VITE_GKEY

const url= ref<string>(`https://www.google.com/maps/embed/v1/place?key=${GKEY}&q=${lati+','+long}`)

onMounted(() => {
  if (long && lati ) {
    if (userLon && userLat) url.value =`https://www.google.com/maps/embed/v1/directions?key=${GKEY}&origin=${userLat+','+userLon}&destination=${lati+','+long}&avoid=tolls|highways`;
  } else router.push(`/busstops`)
})


</script>

<template>
  <iframe
      referrerpolicy="no-referrer"
      class="max-md:w-full w-[95vw] md:rounded-2xl h-[70vh]"
      :src="url"/>
</template>

<style scoped>
</style>