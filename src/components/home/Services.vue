<script setup lang="ts">
 const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.classList.add('bern');
       return;
     }
     entry.target.classList.remove('bern');
   })
 })

 const exists: (type: unknown) => type is NonNullable<typeof type> = (type: unknown) => {
   return type!== null && type!==undefined
 }

 onMounted(() => {
   VanillaTilt.init(document.querySelectorAll(".card") as unknown as HTMLElement, {max: 1.1, glare: true, "max-glare": 0.1} )

   if (exists(document.querySelectorAll('.in-view, .in-view2, .in-view3'))) {
     Array.from(document.querySelectorAll('.in-view, .in-view2, .in-view3')).forEach((el) => {
       if (exists(el)) observer.observe(el)
     })
   }
 })

 const data = ref([
   {
     src: 'https://img.freepik.com/free-photo/from-pins-map_23-2147793520.jpg?semt=ais_hybrid&w=740&q=80',
     alt: 'Schedules',
     to: '/schedule',
   },
   {
     src: 'https://localipswichnews.com.au/wp-content/uploads/2022/07/sheltered-bus-stops.jpg',
     alt: 'Bus_Stops',
     to: '/busstops',
   },
   {
     src: 'https://astikoktelkastorias.gr/wp-content/uploads/2023/10/DSC_0151_thumb-570x379-1.jpg',
     alt: 'BusStation2',
     to: '/tickets'
   }
 ])

</script>

<template>
  <div class="sm:px-5 mt-5" >
    <Transition enter-from-class="opacity-0 scale-0" enter-active-class="transition-all duration-1000 ease" appear>
      <FlexMinified  :column="true" items="center" class="w-full">
        <div class="h-0.5 max-sm:w-[92vw] w-[70vw] text-center rounded-full bg-rainbow"/>
        <h3 class="flex justify-center gap-x-1 items-center text-center font-bold text-3xl rainbow">
          <Icon icon="eos-icons:service-instance" class="inline size-12 " />
          <span class="block uppercase">{{($i18n.locale==='el') ? 'Υπηρεσιες' : 'Services'}}</span>
        </h3>
        <div class="h-0.5 max-sm:w-[92vw] w-[70vw] text-center rounded-full bg-rainbow"/>
      </FlexMinified>
    </Transition>

    <FlexMinified
        v-for="(section,index) in data"
        :key="index" justify="between"
        :class="(index%2 === 1) ? `flex-row-reverse` : `flex-row`"
        class=" h-[30vh] w-full mt-10 in-view bg-eggplant-950/70 overflow-hidden md:rounded-xl card shadow-2xl shadow-neutral-800 " id="troll"
    >
      <FlexMinified
          column
          class="w-full   "
          :class="(index%2 === 1) ? 'in-view3 mask-l-from-80%' : 'in-view2 mask-r-from-80%'"
      >
        <img class="w-full  opacity-80 h-full object-cover " :src="section.src" :alt="section.alt"/>
      </FlexMinified>

      <FlexMinified
          column justify="between"
          class="w-[80%]  py-2 md:py-10 font-bold"
          :class="(index%2 === 1) ? 'items-start pl-2 md:pl-10 in-view2' : 'items-end pr-2 md:pr-10 in-view3 '"
      >
        <hgroup :class="(index%2 === 1) ? `text-start` : `text-end`" class=" md:w-[75%] xl:w-[50%] capitalize max-md:text-xl">
          <h2 class="sm:text-3xl rainbow">{{$t('header.route'+(index+2))}}</h2>
          <p class="max-sm:text-sm hyphens-auto break-words">{{$t('header.desc'+(index+2))}}</p>
        </hgroup>
        <router-link :to="section.to"
                     class="max-md:px-1 max-md:py-1 w-28  px-4 py-1 md:text-lg  rounded-md text-center hover:bg-white hover:text-black bg-blue-500 transition-all duration-500 ease">
          {{($i18n.locale==='el') ? 'Περισσότερα': 'More'}}</router-link>
      </FlexMinified>
    </FlexMinified>
  </div>
</template>

<style scoped>
.in-view {
  opacity: 0;
  scale: 0;
  transition: all 0.5s ease;
}

.in-view2 {
  transform: translateX(-100%);
  transition: transform 1.5s ease;
}

.in-view3 {
  transform: translateX(100%);
  transition: transform 1.5s ease;
}


.bern {
  opacity: 1;
  scale: 1;
  transform: translateX(0);

}
</style>