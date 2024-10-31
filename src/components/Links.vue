<script setup lang="ts">
import Grid from "./GridMinified.vue";
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const linkList = ref<any[]>([{href:`https://www.linkedin.com/in/konstantinos-stylianou-a4a95625b/` ,icon:`line-md:linkedin` },{href:`https://github.com/AliBaBas02` ,icon:`line-md:github-loop` },{href:`https://styls.pages.dev` ,icon:`solar:global-bold` }])
</script>

<template>
    <Grid columns="5" class="justify-items-center grid-flow-row gap-x-1 max-sm:gap-x-8">
      <a v-for="(link,index) in linkList" :key="index" class="block p-1 bg-neutral-100 bg-opacity-10 rounded-xl hover:scale-110 transition duration-500 ease-in" :href="link.href" target="_blank">
        <Icon width="20px"  :icon="link.icon"/><span class="hidden">‎</span>
      </a>
      <a href="mailto:stylsbot@gmail.com" class="block p-1 bg-neutral-100 bg-opacity-10 rounded-xl hover:scale-110 transition duration-500 ease-in" :href="link.href" target="_blank">
        <Icon width="20px"  icon="material-symbols:alternate-email"/><span class="hidden">‎</span>
      </a>
    </Grid>
</template>

<style scoped>

</style>