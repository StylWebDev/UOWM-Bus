<script setup lang="ts">

import Intro from "../components/home/Intro.vue";

onMounted(() => {
  VanillaTilt.init(document.querySelectorAll(".card") as unknown as HTMLElement, {max: 1.3, glare: true, "max-glare": 0.1} )
})
</script>

<template>
  <div>
    <Intro/>

    <Services/>
    <Timeline/>
  </div>
</template>