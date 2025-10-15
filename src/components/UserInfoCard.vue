<script setup lang="ts">
defineProps({
  name: String,
  identifier: String,
  postSize: String,
  likeSize: String,
  followSize: String,
})
</script>

<template>
  <div class="info-box">
    <div class="user-info">
      <img src="https://api.horosama.com/random.php" alt="AVATAR" class="user-info-avatar">
      <h3 class="user-info-name">{{ name }}</h3>
      <p class="user-info-identifier">{{ identifier }}</p>
    </div>
    <div class="data-info">
      <div class="data-info-item">
        <div class="data-info-item-size">{{ postSize }}</div>
        <div class="data-info-item-title">帖子</div>
      </div>
      <div class="data-info-item">
        <div class="data-info-item-size">{{ likeSize }}</div>
        <div class="data-info-item-title">获赞</div>
      </div>
      <div class="data-info-item">
        <div class="data-info-item-size">{{ followSize }}</div>
        <div class="data-info-item-title">关注</div>
      </div>
    </div>
    <slot name="action"></slot>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/components/UserInfoCard";
</style>
