<script setup lang="ts">
import type { HotTopicType } from '@/components/index.types.ts'

defineProps({
  title: {
    type: String,
    default: "推荐话题"
  },
  topics: Array<HotTopicType>
})
const emit = defineEmits(['hotTopicClick'])

const onClickHotTopic = (itemId: number) => {
  emit('hotTopicClick', itemId)
}
</script>

<template>
  <div class="hot-topic-box">
    <h3 class="hot-topic-box-title">推荐话题</h3>
    <div class="hot-topic-box-list">
            <span class="hot-topic-box-list-item"
                  v-for="(item, index) in topics"
                  :key="index"
                  @click="onClickHotTopic(item.id)">
                 #{{ item.name }}
            </span>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/components/HotTopic";
</style>
