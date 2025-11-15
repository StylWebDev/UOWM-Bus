<script setup lang="ts">

</script>

<template>
    <Suspense>
      <RouterView/>
      <template #fallback>
        <SkeletonStops/>
      </template>
    </Suspense>
</template>

<style scoped>

</style>