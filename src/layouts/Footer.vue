<script setup lang="ts">
import Flex from "../components/FlexMinified.vue";
import Links from "../components/Links.vue";

</script>
<template>
    <div class="fadeIn max-[300px]:mt-10 w-full grid max-[300px]:grid-cols-1  min-[301px]:grid-cols-2  justify-items-center justify-center items-center ">
      <Flex :row="true" class="text-xs max-[300px]:hidden items-center" >
        <img src="../assets/logo2.svg" alt="Logo" class="inline max-sm:size-12 size-10">
        <Flex :column="true" justify="center" class="align-middle text-sm text-center"><div>© 2024</div><div>Στυλιανού Κωνσταντίνος</div></Flex>
      </Flex>
      <Flex class=" max-sm:text-sm " :column="true">
        <Flex :column="true" justify="center" :wrap="true" items="center"  class="space-x-10 max-md:space-x-6 max-[300px]:space-x-0">
          <p class="text-center inline align-center font-semibold">Επικοινωνία</p>
          <Links class="max-[300px]:pl-10 rainbow brightness-150" />
        </Flex>
      </Flex>

    </div>
</template>

<style scoped>

</style>