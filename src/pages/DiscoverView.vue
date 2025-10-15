<script setup lang="ts">
import StatisticsCard from '@/components/StatisticsCard.vue'
import { onMounted, reactive } from 'vue'
import type { StaticsType } from '@/components/index.types.ts'
import { findStatics } from '@/api/statics.ts'

const data = reactive({
  statics: [] as StaticsType[],
})

onMounted(async () => {
  const statics = await findStatics();
  data.statics = statics.data;
})
</script>

<template>
  <div class="discover-page">
    <div class="discover-page-container">
      <div class="content-box">404</div>
      <div class="dash-box">
        <StatisticsCard :statics="data.statics" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
