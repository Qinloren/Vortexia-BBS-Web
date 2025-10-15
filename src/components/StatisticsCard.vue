<script setup lang="ts">
import type { StaticsType } from '@/components/index.types.ts'
import { formatNumber } from '@/utils/format.ts'

defineProps({
  statics: {
    type: Array<StaticsType>,
  }
})
</script>

<template>
  <div class="community-statistics-card">
    <h3 class="community-statistics-title">社区统计</h3>
    <ul class="community-statistics-list">
      <li class="community-statistics-item" v-for="(item, index) in statics" :key="index">
        <span class="community-statistics-label">{{ item.title }}</span>
        <span :style="{
          'color': item.color
        }" class="community-statistics-value">{{ formatNumber(item.number) }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/components/StatisticsCard";
</style>
