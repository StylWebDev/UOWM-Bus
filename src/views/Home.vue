<script setup lang="ts">
import {useConfigureStore} from "../stores/configure.ts";
import {storeToRefs} from "pinia";

const {test} = storeToRefs(useConfigureStore());
</script>

<template>
Hello From Home
{{test}}
</template>

<style scoped>

</style>