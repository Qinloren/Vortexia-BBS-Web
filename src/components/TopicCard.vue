<script setup lang="ts">
const props =defineProps({
  title: String,
  icon: String,
  avatar: String,
  classify: String,
  postSize: String,
  memberSize: String,
  onlineMemberSize: String,
  latestPushTime: String,
})

const emit = defineEmits(["joinTopicClick", "likeTopicClick"]);

const onJoinTopic = () => {
  emit("joinTopicClick", props.title)
}

const onLikeTopic = () => {
  emit("likeTopicClick", props.title)
}
</script>

<template>
  <div class="topic-card">
    <div class="card-info">
      <div class="card-avatar">
        <img :src="avatar" alt="AVATAR">
      </div>
      <div class="card-title">
        <h3 class="card-title-text">{{ title }}</h3>
        <div class="card-title-desc">
          <i class="classify-list-item-icon" :class="`i-${icon}`"></i>
<!--          <iconify-icon class="classify-list-item-icon"-->
<!--                        :icon="icon"-->
<!--                        width="24"-->
<!--                        height="24"></iconify-icon>-->
          <span class="card-title-desc-text">{{ classify }}</span>
        </div>
      </div>
    </div>
    <p class="card-introduction">
      <slot></slot>
    </p>
    <div class="card-data-info">
      <div class="card-data-item">
        <div class="card-data-item-size">{{ postSize }}</div>
        <div class="card-data-item-text">帖子数</div>
      </div>
      <div class="card-data-item">
        <div class="card-data-item-size">{{ memberSize }}</div>
        <div class="card-data-item-text">成员数</div>
      </div>
      <div class="card-data-item">
        <div class="card-data-item-size">{{ onlineMemberSize }}</div>
        <div class="card-data-item-text">在线</div>
      </div>
    </div>
    <div class="card-tips">
      <div>最新活动：{{ latestPushTime }}</div>
      <div></div>
    </div>
    <div class="action-box">
      <button class="btn join-topic-btn" @click="onJoinTopic">
<!--        <IconTablerLogin2 class="join-topic-btn-icon" />-->
        <i class="i-tabler:login-2 join-topic-btn-icon"></i>
        <span>进入话题</span>
      </button>
      <button class="btn like-btn" @click="onLikeTopic">
<!--        <IconTablerHeart />-->
        <i class="i-tabler:heart"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/components/TopicCard";
</style>
