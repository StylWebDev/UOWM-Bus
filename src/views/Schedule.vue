<script setup lang="ts">
</script>

<template>
  <RouterView v-slot="{Component, route}">
    <Suspense>
      <Component :is="Component"/>
      <template #fallback>

        <SkeletonSchedules v-if="route.fullPath.endsWith('schedule')"/>
        <SkeletonSchedulesExact v-else/>

      </template>
    </Suspense>
  </RouterView>
</template>

<style scoped>

</style>