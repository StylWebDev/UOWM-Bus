<script setup lang="ts">
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view')
      return ;
    }
    entry.target.classList.remove('in-view');
  })
})

onMounted(() => {
  const arrOfElemns = Array.from(document.querySelectorAll('.timeline, .timeline2')) as HTMLOListElement[];
  if (arrOfElemns.length > 0) {
    arrOfElemns.forEach((el: HTMLOListElement) => {
      observer.observe(el);
    });
  }
})
</script>

<template>
  <FlexMinified column gap-y="4" class="mt-10" items="center">
      <FlexMinified  :column="true" items="center" class="w-full timeline2">
        <div class="h-0.5 max-sm:w-[92vw] w-[70vw] text-center rounded-full bg-rainbow"/>
        <h3 class="flex justify-center gap-x-1 items-center text-center font-bold text-3xl rainbow">
          <Icon icon="material-symbols:alarm" class="inline size-12 " />
          <span class="block uppercase">{{($i18n.locale==='el') ? 'Ιστορικό' : 'History'}}</span>
        </h3>
        <div class="h-0.5 max-sm:w-[92vw] w-[70vw] text-center rounded-full bg-rainbow"/>
      </FlexMinified>

    <ol class="relative border-s overflow bg-eggplant-950/80 border-default ml-2 md:ml-5 max-sm:w-[92vw] w-[80vw] pr-5 rounded-r-2xl pb-1">
      <li class="ms-6 overflow-hidden" v-for="index in 5" :key="index">
        <span class="absolute  flex items-center timeline2 justify-center w-6 h-6 bg-brand-softer rounded-full -start-3 bg-blue-600">
          <Icon icon="uim:schedule"/>
        </span>
        <time class="bg-blue-500 border timeline2 border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">{{$t(`home.timeline.t${index-1}.time`)}}</time>
        <hgroup class="timeline">
          <h3 class="flex  items-center mb-1 text-lg font-semibold text-heading my-2 rainbow">
            {{$t(`home.timeline.t${index-1}.title`)}}
          </h3>
          <p class="mb-4 text-sm text-body capitalize ">
            {{$t(`home.timeline.t${index-1}.description`)}}
          </p>
        </hgroup>
      </li>
    </ol>
  </FlexMinified>

</template>

<style scoped>

.timeline {
    opacity: 0;
    transform: translateX(100%);
    transition: all 1.5s ease-out;
}
.timeline2 {
  opacity: 0;
  transition: all 1.5s ease-out;
}

.in-view {
  opacity: 1;
  transform: translateX(0);
}

</style>