<script setup lang="ts">
</script>
<template>
    <div class="fadeIn max-[300px]:mt-10 w-full grid max-[300px]:grid-cols-1  min-[301px]:grid-cols-2  justify-items-center justify-center items-center ">
      <FlexMinified :row="true" class="text-xs max-[300px]:hidden items-center" >
        <img src="../assets/logo2.svg" alt="Logo" class="inline max-sm:size-12 size-10">
        <FlexMinified :column="true" justify="center" class="align-middle text-sm text-center"><div>© 2025</div><div>{{$t('footer.p1')}}</div></FlexMinified>
      </FlexMinified>
      <FlexMinified class=" max-sm:text-sm " :column="true">
        <FlexMinified :column="true" justify="center" items="center" >
          <p class="text-center  font-semibold">{{$t('footer.p2')}}</p>
          <Links class=" brightness-150" />
        </FlexMinified>
      </FlexMinified>
    </div>
</template>

<style scoped>

</style>