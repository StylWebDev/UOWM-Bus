<script setup lang="ts">
</script>

<template>
  <RouterView v-slot="{Component}">
    <Suspense>
      <Component :is="Component"/>
      <template #fallback>
        <SkeletonStops/>
      </template>
    </Suspense>
  </RouterView>
</template>

<style scoped>

</style>