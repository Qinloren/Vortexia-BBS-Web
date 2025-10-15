<script setup lang="ts">
const props = defineProps({
  id: Number,
  authorName: String,
  avatar: String,
  pushTime: String,
  classifyName: String,
  title: String,
  likeSize: String,
  commentSize: String,
  classifies: Array<string>
})

const emit = defineEmits(["card-click"]);
const handlerClick = () => {
  emit("card-click", props.id);
}
</script>

<template>
<div class="content-card">
  <img class="card-avatar" :src="avatar" alt="AVATAR">
  <div class="card-content" @click.stop="handlerClick">
    <div class="card-author">
      <span class="card-author-name">{{ authorName }}</span>
      <span class="card-push-time">{{ pushTime }}</span>
      <span class="card-classify">{{ classifyName }}</span>
    </div>
    <a class="card-title" href="javascript:void(0);">
      <h3>{{ title }}</h3>
    </a>
    <p class="card-introduction">
      <slot></slot>
    </p>
    <div class="action-box">
      <div class="action-list">
        <button class="action-item">
          <i class="i-tabler:heart"></i>
          <span class="action-item-text">{{ likeSize }}</span>
        </button>
        <button class="action-item">
          <i class="i-tabler:message"></i>
          <span class="action-item-text">{{ commentSize }}</span>
        </button>
        <button class="action-item">
          <i class="i-tabler:share"></i>
          <span class="action-item-text">分享</span>
        </button>
      </div>
      <div class="classify-list">
        <span class="classify-list-item" v-for="(item, index) in classifies" :key="index">#{{ item }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
@use '@/assets/scss/components/PostCard';
</style>
