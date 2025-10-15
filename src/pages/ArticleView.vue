<script setup lang="ts">
import { useRoute } from 'vue-router'
import { findPost } from '@/api/post.ts'
import UserInfoCard from '@/components/UserInfoCard.vue'
import { formatNumber } from '@/utils/format.ts'

const route = useRoute();
let articleId = -1;
if(route.params.id) {
  articleId = parseInt(String(route.params.id));
}
findPost(articleId)
</script>

<template>
  <div class="article-page">
    <div class="article-page-container">
      <div class="content-box">
        <div class="article-description">
          <h1 class="article-title">Vue 3 Composition API 最佳实践分享</h1>
          <div class="article-desc">
            <div class="article-author">
              <img class="article-avatar" src="https://api.horosama.com/random.php" alt="AVATAR">
              <div class="article-author-box">
                <div class="article-author-info">
                  <span class="article-name">前端小王</span>
                  <span class="article-classify">技术讨论</span>
                </div>
                <div class="article-push-time">2小时前发布</div>
              </div>
            </div>
            <div class="article-data-list">
              <div class="article-data-list-item">
                <i class="article-data-list-item-icon i-tabler:heart"></i>
                <span class="article-data-list-item-size">128</span>
              </div>
              <div class="article-data-list-item">
                <i class="article-data-list-item-icon i-tabler:message-circle"></i>
                <span class="article-data-list-item-size">45</span>
              </div>
              <div class="article-data-list-item">
                <i class="article-data-list-item-icon i-tabler:eye"></i>
                <span class="article-data-list-item-size">128</span>
              </div>
            </div>
          </div>
          <div class="article-action">
            <button class="article-action-btn article-action-like-btn">
              <i class="i-tabler:heart"></i>
              <span>点赞（128）</span>
            </button>
            <button class="article-action-btn article-action-comment-btn">
              <i class="i-tabler:message-circle"></i>
              <span>评论</span>
            </button>
            <button class="article-action-btn article-action-share-btn">
              <i class="i-tabler:share-3"></i>
              <span>分享</span>
            </button>
            <button class="article-action-btn article-action-follow-btn">
              <i class="i-tabler:bookmark"></i>
              <span>收藏</span>
            </button>
          </div>
        </div>
        <div class="article-content-box">
          <div class="article-content"></div>
          <div class="article-desc">
            <span>话题标签:</span>
            <span class="px-3 py-1 bg-theme-light-2 color-theme-dark-2 text-sm rounded-full cursor-pointer hover:bg-theme-light transition-colors">#Vue3</span>
            <span class="px-3 py-1 bg-theme-light-2 color-theme-dark-2 text-sm rounded-full cursor-pointer hover:bg-theme-light transition-colors">#Vue3</span>
          </div>
        </div>
        <div class="article-comment-push-box">
          <h3 class="article-comment-push-box-title">发表评论</h3>
          <div class="article-comment-push-box-content-container">
            <img src="https://api.horosama.com/random.php" alt="AVATAR" class="article-comment-push-box-avatar">
            <div class="article-comment-push-box-content">
              <textarea placeholder="写下你的评论..." maxlength="1000" name="comment" id="comment" rows="4" class="article-comment-push-box-content-input"></textarea>
              <div class="article-comment-push-box-action">
                <div class="article-comment-push-box-action-content">
                  <button class="btn article-comment-push-box-action-content-btn">
                    <i class="i-tabler:photo-filled"></i>
                    <span>图片</span>
                  </button>
                  <button class="btn article-comment-push-box-action-content-btn">
                    <i class="i-tabler:mood-smile-filled"></i>
                    <span>表情</span>
                  </button>
                </div>
                <div class="article-comment-push-box-action-push">
                  <span class="article-comment-push-box-word-limit">0/1000</span>
                  <button class="btn article-comment-push-box-action-push-btn">
                    发表评论
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dash-box">
        <UserInfoCard
          name="前端小王"
          identifier="资深前端开发工程师"
          :postSize="formatNumber(89)"
          :likeSize="formatNumber(2100)"
          :followSize="formatNumber(456)"
        >
          <template #action>
              <button class="btn follow-author-btn">
                <i class="i-tabler:plus"></i>
                <span>关注作者</span>
              </button>
          </template>
        </UserInfoCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/pages/ArticleView";
</style>
