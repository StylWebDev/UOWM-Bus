<script setup lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";

</script>

<template>
<Card
class="bg-eggplant-950 w-[17vw]"
>
  <template #header>
    <img src="https://astikoktelkastorias.gr/wp-content/uploads/2023/10/mesopotamia-2.png"
         class="rounded-t-sm bg-red-500"
         alt="mesopotamia image">
  </template>
  <template #title>
    Μεσοποταμία
  </template>
  <template #subtitle>
    Ζώνη Β
  </template>
  <template #content>
    <p class="m-0">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
      quas!
    </p>
  </template>
  <template #footer>
    <div class="flex gap-4 mt-1">
      <Button label="Cancel" severity="secondary" outlined class="w-full" />
      <Button label="Save" class="w-full" />
    </div>
  </template>
</Card>
</template>

<style scoped>

</style>