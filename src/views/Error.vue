<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>

    <Transition appear  enter-from-class="-translate-y-full opacity-0"  appear-active-class="transition-all duration-1000 ease-linear">
      <FlexMinified :column="true" items="center" justify="center" class="text-center max-sm:h-full" gap-y="2" >
        <FlexMinified justify="center" gap-x="4" items="center" class="max-sm:flex-col">
          <img class="max-sm:w-48 w-48 animate-pulse" src="../assets/robot.webp" alt="404RobotImg"/>
          <hgroup>
            <h3 class=" align-middle text-8xl font-bold">4<span><Icon class="inline text-blue-500" icon="line-md:cog-off-filled-loop"/></span>4: </h3>
            <p class="text-pink-500 text-6xl font-semibold">Page Not Found</p>
          </hgroup>

        </FlexMinified>
        <p class="max-sm:hidden text-xl font-semibold rainbow">{{$t('notFound.p')}}</p>
        <RouterLink class="capitalize text-white block mt-8 w-fit px-4 py-1 bg-black font-semibold rounded-full text-lg  hover:bg-white hover:text-black transition-all duration-500 ease-linear" to="/" >
          {{$t('notFound.btn')}}
        </RouterLink>

      </FlexMinified>
    </Transition>
</template>

<style scoped>

</style>