<script setup lang="ts">
import FlexMinified from "../components/FlexMinified.vue";

import {useConfigureStore} from "../stores/configure.ts";
import {Carousel, Slide} from "vue3-carousel";
import {onMounted} from "vue";
import VanillaTilt from "vanilla-tilt";
const {trans} = useConfigureStore()

const carouselConfig = {
  itemsToShow: 1,
  autoplay: 5000,
  wrapAround: true,
  mouseDrag: false
}

const slides = [
  {id: 1, src: `bus1.webp`, alt: 'img'},
  {id: 2, src: `bus2.webp`, alt: 'img'},
  {id: 3, src: `bus3.webp`, alt: 'img'},
  {id: 4, src: `bus4.webp`, alt: 'img'},
  {id: 5, src: `bus5.webp`, alt: 'img'},
  {id: 6, src: `bus6.webp`, alt: 'img'},
  {id: 7, src: `bus7.webp`, alt: 'img'},
  {id: 8, src: `bus8.webp`, alt: 'img'}
]

onMounted(() => {
  VanillaTilt.init(document.querySelectorAll(".card") as unknown as HTMLElement, {max: 1.3, glare: true, "max-glare": 0.1} )
})

</script>

<template>

<FlexMinified items="center" justify="between" class="sm:h-full max-xl:justify-center max-xl:flex-col xl:flex-row">
  <Transition appear enter-from-class="scale-0 opacity-0" appear-active-class="transition-all duration-700 ease-in">
    <FlexMinified :column="true" class="w-full sm:pl-8 max-xl:items-center mt-2" gap-y="4">
      <FlexMinified :column="true" items="center"
                    class="max-[411px]:text-2xl xl:flex-row text-5xl min-[2000px]:text-7xl sm:self-start font-bold w-full rainbow max-xl:text-center">
        <img src="../assets/logo.webp" alt="logo" class="max-[406px]:size-16 max-md:size-24 size-40 xl:size-16 mr-4">
        <span class="align-middle">UOWM Student Bus</span>
      </FlexMinified>

      <p class="max-[411px]:text-base max-sm:text-xl text-xl  max-xl:text-center font-light min-[2000px]:text-2xl">
        {{$t('home.p1_1')}} <strong>{{$t('home.uni')}}</strong> {{$t('home.p1_2')}}.
        <span class="max-sm:hidden">{{$t('home.p2')}}</span><br>
        <br class="xl:hidden">
        <span class="max-md:hidden"> {{$t('home.p3')}}</span>
        <span class="max-md:hidden">
        <br><br>
          {{$t('home.p4')}}
      </span>
      </p>

      <FlexMinified
          :column="true"
          :md-row="true"
          class="gap-x-10 gap-y-2 font-semibold text-xl min-[2000px]:text-2xl max-[411px]:text-base max-md:w-full w-fit"
      >
        <RouterLink class="max-md:px-0 max-md:py-6 max-md:w-full px-4 py-1 bg-black md:rounded-md text-center hover:bg-white hover:text-black" to="/schedule" :class="trans">
          {{$t('home.btn1')}}</RouterLink>
        <RouterLink class="max-md:px-0 max-md:py-6 max-md:w-full px-4 py-1 bg-blue-500 md:rounded-md hover:bg-white text-center hover:text-black" :class="trans" to="/tickets">{{$t('home.btn2')}}</RouterLink>
        <RouterLink class="max-md:px-0 max-md:py-6 max-md:w-full px-4 py-1 bg-emerald-500 md:rounded-md hover:bg-white text-center hover:text-black" :class="trans" to="/busstops">{{$t('header.route5')}}</RouterLink>
      </FlexMinified>
    </FlexMinified>
  </Transition>
  <Transition appear enter-from-class="translate-x-full opacity-0" appear-active-class="transition-all duration-1000 ease-linear">
    <FlexMinified justify="end" class="w-full h-auto  pl-20 pr-20 max-xl:hidden ">
      <Carousel v-bind="carouselConfig" >
        <Slide v-for="slide in slides" :key="slide.id">
          <img class="card object-cover opacity-90 rounded-4xl size-[33vw]"  :src="slide.src" :alt="slide.alt + slide.id">
        </Slide>
      </Carousel>
    </FlexMinified>
  </Transition>
</FlexMinified>



</template>