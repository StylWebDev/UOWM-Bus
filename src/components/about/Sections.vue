<script setup lang="ts">
</script>

<template>
  <Transition appear enter-from-class=" opacity-0 scale-50" appear-active-class="transition-all duration-700 ease-linear">
    <FlexMinified :column="true" justify="center" items="center" class="gap-y-4 ">
      <a
          v-for="(section,index) 
          in [
                {name: $t('info.tab1'), logo: `https://pub-a65a191fa4d14606aec83a6b14268769.r2.dev/uowm-logo.webp`, icon1: `basil:university-solid`, icon2: `uil:university`, url: `https://www.uowm.gr/`, color: `bg-teal-600 text-yellow-500`},
                {name:  $t('info.tab2'), logo: `https://pub-a65a191fa4d14606aec83a6b14268769.r2.dev/astikaKast.webp`, icon1: `material-symbols:info-rounded`, icon2: `mingcute:binance-usd-busd-fill`, url: `https://astikoktelkastorias.gr/`, color: `bg-neutral-800 text-blue-500 hover:shadow-blue-500`},
                {name:  $t('info.tab3'), logo: `https://pub-a65a191fa4d14606aec83a6b14268769.r2.dev/logo.svg`, icon1: `line-md:phone-call-twotone-loop`, icon2: `line-md:coffee-half-empty-twotone-loop`, url: `https://styls.pages.dev`, color:`bg-eggplant-950 text-violet-500 hover:shadow-violet-600`}
            ]"
          target="_blank"
          :key="index+1"
          :href="section.url"
          :class="[section.color]"
          class="  font-bold relative overflow-hidden max-sm:w-full w-[90vw] xl:w-[70vw]  py-7 rounded-xl
                  hover:scale-110 hover:shadow-full  transition-all duration-300 ease-in  ">

        <Icon class="absolute max-xl:size-20 xl:size-24 -rotate-12 -left-7 -top-4 z-10 " :icon="section.icon1"/>
          <div class="sm:flex gap-x-4 sm:justify-center max-sm:flex-col max-sm:justify-items-center items-center w-full">
            <img :src="section.logo" :alt="section.name + `_logo`" class=" block  size-14 "
                 :class="{'size-14': index===1}">
            <span class="align-middle max-sm:block max-sm:mt-2 brightness-150 text-center"> {{section.name}}</span>
          </div>
        <Icon class="absolute size-24 -right-12 max-[350px]:top-24 z-10  top-6 max-sm:top-16" :icon="section.icon2"/>
      </a>
    </FlexMinified>

  </Transition>
</template>

<style scoped>

</style>