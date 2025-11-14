<script setup lang="ts">
import {Carousel, Slide} from "vue3-carousel";
import {exists} from "../../types.ts";
import {onUnmounted} from "vue";

const {slides} = useConfigureStore()

const carouselConfig = {
  itemsToShow: 1,
  autoplay: 5000,
  wrapAround: true,
  mouseDrag: true
}

const update = () => {
  const a = document.getElementById('a') as HTMLDivElement;
  const b = document.getElementById('b') as HTMLDivElement;

  if (window.screen.width < 1280) {
    if (exists(b) && exists(a)) {
      b.style.height = `${a.offsetHeight + 10}px`;
    }
  }
  else {
    if (exists(b) && exists(a)) {
      b.style.height = `33vw`;
    }
  }
}

onMounted( () => {
  window.addEventListener("resize", update);
})

onUnmounted(() => window.removeEventListener("resize", update));

</script>

<template>
  <FlexMinified items="center" justify="between" class=" relative max-xl:justify-center max-xl:flex-col xl:flex-row">
    <Transition appear enter-from-class="xl:-translate-x-full opacity-0" appear-active-class="transition-all duration-1000 ease-in">
      <FlexMinified :column="true" class="z-30 w-full sm:pl-8 max-xl:items-center mt-2" gap-y="4">
        <FlexMinified :column="true"
                      id="a"
                      items="center"
                      class="max-[411px]:text-2xl xl:flex-row text-5xl min-[2000px]:text-7xl sm:self-start font-bold w-full rainbow max-xl:text-center">
          <img src="../../../public/logo.webp" alt="logo" class="max-[406px]:size-16 max-md:size-24 size-40 xl:size-16 mr-4">
          <span class="align-middle">Kastorian Bus</span>
        </FlexMinified>

        <p class="max-[411px]:text-base max-sm:text-xl text-xl  max-xl:text-center font-light min-[2000px]:text-2xl">
          {{$t('home.p1_1')}} {{$t('home.p1_2')}}.
          <span class="max-sm:hidden">{{$t('home.p2')}}</span><br>
          <br class="xl:hidden">
          <span class="max-md:hidden"> {{$t('home.p3')}}</span>
          <span class="max-md:hidden">
        <br><br>
          {{$t('home.p4')}}
      </span>
        </p>


      </FlexMinified>
    </Transition>

    <Transition appear enter-from-class="xl:translate-x-full opacity-0" appear-active-class="transition-all duration-1000 ease-linear">
      <FlexMinified justify="end" id="b" class="z-20 w-full xl:h-auto  px-10  max-xl:absolute top-0 ">
        <Carousel v-bind="carouselConfig" class=" max-xl:bg-black max-xl:rounded-xl max-xl:overflow-hidden ">
          <Slide v-for="slide in slides" :key="slide.id" class="cursor-pointer">
            <img class="card object-cover opacity-90 xl:rounded-4xl xl:size-[33vw] w-full h-full max-xl:opacity-50"  :src="slide.src" :alt="slide.alt + slide.id">
          </Slide>
        </Carousel>
      </FlexMinified>
    </Transition>
  </FlexMinified>
</template>

<style scoped>

</style>