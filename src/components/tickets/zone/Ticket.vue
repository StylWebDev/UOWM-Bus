<script setup lang="ts">
import {Icon} from "@iconify/vue";

defineProps<{
  ticket: any,
  index: number
}>()
</script>

<template>
  <FlexMinified justify="around" gap-y="4" class="font-semibold max-sm:flex-col max-sm:items-center text-center sm:gap-x-20 ">
    <div :class="(index===0) ? `text-sky-500` : `text-emerald-500`">
      <h5 class="text-2xl sm:text-lg font-semibold text-center mb-2.5 align-middle" :class="(index===0) ? `text-yellow-500` : `text-pink-500`">
        <Icon icon="mdi:ticket-confirmation" class="inline size-8"/>
        {{$t('ticket.type1')}}
      </h5>
      <img :src="ticket.category.norm.url" alt="ZoneA_Norm" class="block rounded max-sm:w-96">
      <hgroup class="mt-1.5 text-emerald-300">
        <h6 class="text-xl font-bold">
          <Icon icon="ic:baseline-price-change" class="inline size-8"/>
          {{$t('ticket.price')}}:
        </h6>
        <p>{{$t('ticket.auto')}}: <span class="text-yellow-300 font-light">{{ticket.category.norm.inside}}€</span></p>
        <p>{{$t('ticket.bus')}}: <span class="text-yellow-300 font-light">{{ticket.category.norm.outside}}€</span></p>
      </hgroup>
    </div>

    <div :class="(index===0) ? `text-sky-500` : `text-emerald-500`" class="max-sm:border-t max-sm:border-t-white/30 max-sm:pt-5">
      <h5 class="text-2xl sm:text-lg font-semibold text-center mb-2.5 align-middle" :class="(index ===0) ? `text-orange-500` : `text-sky-500`">
        <Icon icon="mdi:ticket-percent" class="inline size-8"/>
        {{$t('ticket.type2')}}
      </h5>
      <img :src="ticket.category.low.url" alt="ZoneA_Low" class="block w-72 rounded max-sm:w-96">
      <hgroup class="mt-1.5 text-emerald-300">
        <h6 class="text-xl font-bold">
          <Icon icon="ic:baseline-price-change" class="inline size-8"/>
          {{$t('ticket.price')}}:
        </h6>
        <p>{{$t('ticket.auto')}}: <span class="text-yellow-300 font-light">{{ticket.category.low.inside}}€</span></p>
        <p>{{$t('ticket.bus')}}: <span class="text-yellow-300 font-light">{{ticket.category.low.outside}}€</span></p>
      </hgroup>
    </div>
  </FlexMinified>
</template>