<script setup lang="ts">
import type { RecommendFollowType } from '@/components/index.types.ts'

defineProps({
  follows: Array<RecommendFollowType>
})
</script>

<template>
  <div class="recommend-follow-box">
    <h3 class="recommend-follow-box-title">推荐关注</h3>
    <ul class="recommend-follow-box-list">
      <li class="recommend-follow-box-list-item"
          v-for="(item, index) in follows"
          :key="index">
        <img class="recommend-follow-box-list-item-avatar" src="https://api.horosama.com/random.php" alt="AVATAR">
        <div class="recommend-follow-box-list-item-info">
          <div class="recommend-follow-box-list-item-name">{{ item.name }}</div>
          <div class="recommend-follow-box-list-item-description">{{ item.description }}</div>
        </div>
        <button class="btn recommend-follow-box-follow-btn"
                :class="{
                        'btn-followed': item.isFollow
                      }">{{item.isFollow ? '已关注' : '关注'}}</button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/components/RecommendCard";
</style>
