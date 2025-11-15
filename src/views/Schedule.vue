<script setup lang="ts">
</script>

<template>
  <div>
    <RouterView v-slot="{Component, route}">
      <Suspense>
        <Component :is="Component"/>
        <template #fallback>
          <SkeletonSchedules v-if="route.fullPath.endsWith('schedule')"/>
          <SkeletonSchedulesExact v-else/>
        </template>
      </Suspense>
    </RouterView>
  </div>
</template>

<style scoped>

</style>