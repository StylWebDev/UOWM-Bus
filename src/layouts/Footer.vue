<script setup lang="ts">
import Flex from "../components/FlexMinified.vue";
import Links from "../components/Links.vue";

</script>
<template>
    <div class="fadeIn max-[300px]:mt-10 w-full grid max-[300px]:grid-cols-1  min-[301px]:grid-cols-2  justify-items-center justify-center items-center ">
      <Flex :row="true" class="text-xs max-[300px]:hidden items-center" >
        <img src="../assets/logo2.svg" alt="Logo" class="inline max-sm:size-12 size-10">
        <Flex :column="true" justify="center" class="align-middle text-sm text-center"><div>© 2025</div><div>{{$t('footer.p1')}}</div></Flex>
      </Flex>
      <Flex class=" max-sm:text-sm " :column="true">
        <Flex :column="true" justify="center" items="center" >
          <p class="text-center  font-semibold">{{$t('footer.p2')}}</p>
          <Links class=" brightness-150" />
        </Flex>
      </Flex>

    </div>
</template>

<style scoped>

</style>