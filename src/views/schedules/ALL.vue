<script setup lang="ts">
import Card from "../theme/Card.vue";
import {useConfigureStore} from "../../stores/configure.ts";
import GridMinified from "../../components/GridMinified.vue";
import {Icon} from "@iconify/vue";
import FlexMinified from "../..//components/FlexMinified.vue";
import VanillaTilt from "vanilla-tilt";
import {onMounted} from "vue";

onMounted(() => {
  VanillaTilt.init(document.querySelectorAll(".card"), {max: 1.3, glare: true, "max-glare": 0.1} )
})

const { trans } = useConfigureStore()
</script>

<template>
  <FlexMinified :column="true" items="center">
    <h3 class="flex justify-center gap-x-1 items-center text-center font-bold text-3xl rainbow">
      <Icon icon="healthicons:i-schedule-school-date-time" class="size-12 " />
      <span class="block">ΔΡΟΜΟΛΟΓΙΑ</span>
    </h3>
    <div class="h-0.5 w-[70vw] text-center rounded-full bg-rainbow"/>
  </FlexMinified>

  <GridMinified columns="1" sm-columns="2" md-columns="2" xl-columns="3"
                class="mt-5 items-center justify-items-center">
    <Card
        v-for="i in 3" :key="i"
        color="bg-neutral-800"
        border-color="border-white/35"
        :shadow="true"
        class="card cursor-default h-fit w-[80vw] min-[400px]:w-[65vw] min-[430px]:w-[60vw] sm:w-[40vw] md:w-[38vw] lg:w-[33vw] xl:w-[45vh] 2xl:w-[20vw] mt-5"
    >
      <template #img>
        <img src="https://astikoktelkastorias.gr/wp-content/uploads/2023/10/mesopotamia-2.png"
             class="rounded-t-lg bg-red-500"
             alt="mesopotamia image">
      </template>
      <template #title>
        Μεσοποταμία
      </template>
      <template #subtitle>
        Ζώνη Β
      </template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
          quas!
        </p>
      </template>
      <template #footer>
        <RouterLink
                :to="`/schedule/${i}`"
                :class="trans"
                class="bg-cyan-600 font-semibold text-neutral-50
             text-base px-4 py-1 rounded hover:brightness-150"
        >Show More</RouterLink>
      </template>
    </Card>
  </GridMinified>
</template>

<style scoped>

</style>