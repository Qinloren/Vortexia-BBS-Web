<script setup lang="ts">
const emit = defineEmits([
  "create-topic-click",
  "push-post-click",
  "search-topic-click"
])

const createTopicClick = () => {
  emit("create-topic-click")
}

const pushPostClick = () => {
  emit("push-post-click")
}

const searchTopicClick = () => {
  emit("search-topic-click")
}
</script>

<template>
  <div class="quick-action-box">
    <h3 class="quick-action-title">快速操作</h3>
    <div class="action-list">
      <button class="btn create-topic-btn" @click="createTopicClick">
<!--        <IconTablerPlus />-->
        <i class="i-tabler:plus"></i>
        <span>创建话题</span>
      </button>
      <button class="btn push-post-btn" @click="pushPostClick">
<!--        <IconTablerEdit />-->
        <i class="i-tabler:edit"></i>
        <span>发布帖子</span>
      </button>
      <button class="btn search-topic-btn" @click="searchTopicClick">
<!--        <IconTablerSearch />-->
        <i class="i-tabler:search"></i>
        <span>搜索话题</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/components/QuickActionCard";
</style>
