<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <FlexMinified :column="true" gap-y="4" class="lg:gap-y-7">
    <Transition appear enter-from-class="opacity-0 -translate-y-full" appear-active-class="transition-all duration-700 ease-linear">
      <FlexMinified  :column="true" items="center">
        <h3 class="flex justify-center gap-x-1 items-center text-center font-bold text-3xl rainbow">
          <Icon icon="line-md:compass-twotone-loop" class="inline size-12 " />
          <span class="block uppercase">{{$t('info.h3')}}</span>
        </h3>
        <div class="h-0.5 max-sm:w-[80%] w-[70vw] text-center rounded-full bg-rainbow"/>
      </FlexMinified>
    </Transition>

    <Transition appear enter-from-class="opacity-0 scale-50" appear-active-class="transition-all duration-700 ease-linear">
      <div>
        <p class="max-[400px]:text-base text-center text-xl font-semibold text-emerald-500 capitalize px-1">{{$t('info.p1')}}</p>
        <p class="max-[400px]:text-sm text-center text-white text-lg semi px-1 mt-2.5">
          {{$t('info.p2_1')}} <strong class="text-yellow-500">{{$t('info.uni')}}</strong>{{$t('info.p2_4')}} <strong class="text-pink-500">Developer</strong> {{$t('info.p2_2')}} <strong class="text-blue-400">{{$t('info.tab2')}}</strong>{{$t('info.p2_3')}}</p>
      </div>
    </Transition>

    <Sections class="max-sm:px-2 z-10"/>
  </FlexMinified>

</template>

<style scoped>

</style>