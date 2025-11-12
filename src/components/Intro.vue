<script setup lang="ts">
import {Carousel, Slide} from "vue3-carousel";
const {slides} = useConfigureStore()

const carouselConfig = {
  itemsToShow: 1,
  autoplay: 5000,
  wrapAround: true,
  mouseDrag: true
}

</script>

<template>
  <FlexMinified items="center" justify="between" class=" max-xl:justify-center max-xl:flex-col xl:flex-row">
    <Transition appear enter-from-class="-translate-x-full opacity-0" appear-active-class="transition-all duration-1000 ease-in">
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


      </FlexMinified>
    </Transition>

    <Transition appear enter-from-class="translate-x-full opacity-0" appear-active-class="transition-all duration-1000 ease-linear">
      <FlexMinified justify="end" class="w-full h-auto  px-10 max-xl:hidden  ">
        <Carousel v-bind="carouselConfig" >
          <Slide v-for="slide in slides" :key="slide.id">
            <img class="card object-cover opacity-90 rounded-4xl size-[33vw]"  :src="slide.src" :alt="slide.alt + slide.id">
          </Slide>
        </Carousel>
      </FlexMinified>
    </Transition>
  </FlexMinified>
</template>

<style scoped>

</style>