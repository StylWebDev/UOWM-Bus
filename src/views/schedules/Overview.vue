<script setup lang="ts">
import VanillaTilt from "vanilla-tilt";
import { Icon } from "@iconify/vue";
onMounted(() => {
  VanillaTilt.init(document.querySelectorAll(".card") as unknown as HTMLElement, {max: 1.3, glare: true, "max-glare": 0.3} )
})

import {useDataStore} from "../../stores/data.ts";
const {getData} = useDataStore()


const areas = (await getData(Number(52100))).areas;

const { trans } = useConfigureStore()
</script>

<template>
  <Transition appear enter-from-class="opacity-0 -translate-y-full" appear-active-class="transition-all duration-700 ease-linear">
    <FlexMinified :column="true" items="center">
      <h3 class="flex justify-center gap-x-1 items-center text-center font-bold text-3xl md:text-4xl rainbow">
        <Icon icon="healthicons:i-schedule-school-date-time" class="size-12 2xl:size-16" />
        <span class="block uppercase">{{($i18n.locale.toString() === 'el') ? "Δρομολόγια" : "Routes"}}</span>
      </h3>
      <div class="h-0.5 w-[70vw] text-center rounded-full bg-rainbow"/>
    </FlexMinified>
  </Transition>

  <GridMinified columns="1" sm-columns="2" md-columns="2" xl-columns="3"
                class="mt-5 items-center justify-items-center">
    <TransitionGroup appear enter-from-class="opacity-0 translate-y-full" appear-active-class="transition-all duration-700 ease-linear">
      <Card
          v-for="(area,index) in areas" :key="index"
          color="bg-neutral-800"
          border-color="border-white/35"
          :shadow="true"
          class="card cursor-default h-fit w-[85vw] min-[430px]:w-[75vw] sm:w-[46vw] md:w-[46vw] lg:w-[40vw] xl:w-[45vh] 2xl:w-[25vw]  mt-5"
          :class="(index==2) ? `sm:col-span-2 xl:col-span-1` : ``"
      >
        <template #img>
          <img :src="area.map_img"
               class=" rounded-t-lg  size-full h-[40vh] object-cover"
               :alt="area.place.end.el.location + `_image`">
        </template>
        <template #title>
          {{  ($i18n.locale.toString() === 'el') ? area.place.start.el.location : area.place.start.en.location }} - {{  ($i18n.locale.toString() === 'el') ? area.place.end.el.location : area.place.end.en.location }}
        </template>
        <template #subtitle>
        {{  ($i18n.locale.toString() === 'el') ? `Ζώνη` : `Zone` }} {{area.zone}}
        </template>
        <template #content>
          <p class="m-0">
            {{($i18n.locale.toString() === 'el') ? area["desc_el"] : area["desc_en"]}}
          </p>
        </template>
        <template #footer>
          <RouterLink
              :to="`/schedule/${index+1}`"
              :class="trans"
              class="bg-cyan-600 font-semibold text-neutral-50 ease-linear
             text-base px-4 py-1 rounded hover:bg-white hover:text-black hover:scale-110"
          >{{$t('more')}}</RouterLink>
        </template>
      </Card>
    </TransitionGroup>
  </GridMinified>
</template>

<style scoped>

</style>