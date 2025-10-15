<script setup lang="ts">
import RecommendCard from '@/components/RecommendCard.vue'
import { onMounted, reactive } from 'vue'
import type { RecommendFollowType, StaticsType, TopicType } from '@/components/index.types.ts'
import TopicCard from '@/components/TopicCard.vue'
import { formatNumber, formatTimestamp } from '@/utils/format.ts'
import StatisticsCard from '@/components/StatisticsCard.vue'
import QuickActionCard from '@/components/QuickActionCard.vue'
import { findFollows } from '@/api/follow.ts'
import { findTopics } from '@/api/topics.ts'
import { findStatics } from '@/api/statics.ts'
const data = reactive({
  follows: [] as RecommendFollowType[],
  topics: [] as TopicType[],
  statics: [] as StaticsType[]
})
onMounted(async () => {
  const follows = await  findFollows();
  data.follows = follows.data;
  const topics = await findTopics();
  data.topics = topics.data;
  const statics = await findStatics();
  data.statics = statics.data;
})
</script>

<template>
  <div class="community-page">
    <div class="community-page-container">
      <div class="content-box">
        <div class="filter-box">
          <ul class="filter-list">
            <li class="filter-list-item active">全部话题</li>
            <li class="filter-list-item">热门话题</li>
            <li class="filter-list-item">最新话题</li>
            <li class="filter-list-item">我关注的</li>
          </ul>
        </div>
        <div class="topic-list">
          <TopicCard
            v-for="(item, index) in data.topics"
            :key="index"
            :title="item.title"
            :icon="item.icon"
            :classify="item.classify.name"
            :avatar="item.avatar"
            :postSize="formatNumber(item.postSize)"
            :memberSize="formatNumber(item.memberSize)"
            :onlineMemberSize="formatNumber(item.onlineMemberSize)"
            :latestPushTime="formatTimestamp(item.latestPushTime)"
          >
            {{ item.introduction }}
          </TopicCard>
        </div>
      </div>
      <div class="dash-box">
        <QuickActionCard />
        <StatisticsCard :statics="data.statics" />
        <RecommendCard :follows="data.follows" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/pages/CommunityView";
</style>
