<script setup lang="ts">
</script>

<template>
  <div>
      <Suspense suspensible>
        <RouterView/>
        <template #fallback>
          <SkeletonSchedules v-if="$route.fullPath.endsWith('schedule')"/>
          <SkeletonSchedulesExact v-else/>
        </template>
      </Suspense>
  </div>
</template>

<style scoped>

</style>