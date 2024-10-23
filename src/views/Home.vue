<script setup lang="ts">
import {useConfigureStore} from "../stores/configure.ts";
import {storeToRefs} from "pinia";
import Header from "../layouts/Header.vue";

const {test} = storeToRefs(useConfigureStore());
</script>

<template>
Home
</template>

<style scoped>

</style>