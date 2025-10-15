<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import PostCard from '@/components/PostCard.vue'
import RecommendCard from '@/components/RecommendCard.vue'
import type { ClassifyType, HotTopicType, PostType, RecommendFollowType } from '@/components/index.types.ts'
import HotTopic from '@/components/HotTopic.vue'
import UserInfoCard from '@/components/UserInfoCard.vue'
import { formatNumber, formatTimestamp } from '@/utils/format.ts'
import { findClassifies } from '@/api/classify.ts'
import { findPosts } from '@/api/post.ts'
import { useRouter } from 'vue-router'
import { findHotTopics } from '@/api/hotTopic.ts'
import { findFollows } from '@/api/follow.ts'

const router = useRouter();

const data = reactive({
  classifies: [] as ClassifyType[],
  classifyIndex: 0,
  postSize: 123,
  likeSize: 1200,
  followSize: 256,
  hotTopic: [] as HotTopicType[],
  follows: [] as RecommendFollowType[],
  posts: [] as PostType[]
})

onMounted(async () => {
  // 获取数据
  const classifies = await findClassifies()
  data.classifies = classifies.data;
  const posts = await findPosts()
  data.posts = posts.data;
  const hotTopics = await findHotTopics()
  data.hotTopic = hotTopics.data;
  const follows = await findFollows();
  data.follows = follows.data;
})

/**
 * 点击帖子卡片
 * @param itemId 帖子ID
 */
const onCardClick = (itemId: number) => {
  router.push({
    name: "article",
    params: {
      id: itemId
    }
  })
}

const onClickHotTopic = (itemId: number) => {
  console.log(itemId);
}

const onApplyFilter = (type: string) => {
  console.log(type);
}

</script>

<template>
  <div class="home-page">
    <div class="home-page-container">
      <div class="classify-box">
        <h3 class="classify-box-title">分类导航</h3>
        <ul class="classify-box-list">
          <li class="classify-list-item"
              v-for="(item, index) in data.classifies"
              :class="{
                'active': data.classifyIndex === index
              }"
              :key="index">
            <a href="javascript:void(0);">
<!--              <i class="classify-list-item-icon" :class="`i-${item.icon}`"></i>-->
              <span class="classify-list-item-title">{{ item.name }}</span>
              <span class="classify-list-item-size">{{ formatNumber(item.size) }}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="content-box">
        <div class="filter-box">
          <ul class="filter-list">
            <li class="filter-list-item active" @click="onApplyFilter('newest')">最新</li>
            <li class="filter-list-item" @click="onApplyFilter('hot')">热门</li>
            <li class="filter-list-item" @click="onApplyFilter('follow')">关注</li>
            <li class="filter-list-item" @click="onApplyFilter('recommend')">推荐</li>
          </ul>
        </div>
        <div class="content-box">
            <PostCard
                v-for="(item, index) in data.posts"
                :key="index"
                :avatar="item.author.avatar"
                :id="item.id"
                :author-name="item.author.nickname"
                :push-time="formatTimestamp(item.updateTime)"
                :classify-name="item.classify"
                :title="item.title"
                :like-size="formatNumber(item.likeSize)"
                :comment-size="formatNumber(item.commentSize)"
                :classifies="item.classifies"
                @card-click="onCardClick(item.id)"
                >{{ item.introduction }}</PostCard>
        </div>
      </div>
      <div class="dash-box">
        <UserInfoCard
            name="用户昵称"
            identifier="活跃用户"
            :post-size="formatNumber(data.postSize)"
            :like-size="formatNumber(data.likeSize)"
            :follow-size="formatNumber(data.followSize)"
        >
          <template #action>
            <button class="btn quickly-push-btn">
              <i class="i-tabler:edit"></i>
              <span>快速发帖</span>
            </button>
          </template>
        </UserInfoCard>
        <HotTopic :topics="data.hotTopic" @hot-topic-click="onClickHotTopic"/>
        <RecommendCard :follows="data.follows" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/pages/HomeView";
</style>
