<link rel="stylesheet" href="../assets/scss/pages/ProfileView.scss">
<script setup lang="ts">
import { reactive } from 'vue'

const data = reactive({
  dataInfoTabIndex: 0,
})

const switchTab = (index: number) => {
  data.dataInfoTabIndex = index
}
</script>

<template>
  <div class="profile-page">
    <div class="profile-page-box-container">
      <div class="profile-page-box-title">
        <div>
          <h1 class="profile-page-box-title-text">个人资料</h1>
          <p class="profile-page-box-subtitle">查看您的个人信息和活动记录</p>
        </div>
        <button class="btn back-btn">
          <i class="i-tabler:arrow-narrow-left mr-2"></i>
          <span>返回首页</span>
        </button>
      </div>
      <div class="profile-page-box-content grid-cols-1 lg:grid-cols-4">
        <div class="profile-page-box-content-item lg:col-span-1">
          <div class="user-info-card">
            <div class="user-info-card-content">
              <div class="user-info-avatar">
                <img src="https://api.horosama.com/random.php" alt="AVATAR">
              </div>
              <h3 class="user-info-name">用户昵称</h3>
              <p class="user-info-signature">前端开发工程师</p>
              <div class="user-info-enumerate space-y-2">
                <div class="user-info-enumerate-item">
                  <i class="i-tabler:calendar-week mr-2"></i>
                  <span class="user-info-enumerate-item-text">加入与 2025年10月15日</span>
                </div>
                <div class="user-info-enumerate-item">
                  <i class="i-tabler:map-pin-filled mr-2"></i>
                  <span class="user-info-enumerate-item-text">XXXXXX</span>
                </div>
              </div>
            </div>
            <div class="user-info-card-statics">
              <div class="user-info-statics">
                <div class="user-info-statics-item">
                  <div class="user-info-statics-item-size text-blue-600">156</div>
                  <div class="user-info-statics-item-title">发布帖子</div>
                </div>
                <div class="user-info-statics-item">
                  <div class="user-info-statics-item-size text-red-600">2.34k</div>
                  <div class="user-info-statics-item-title">点赞数</div>
                </div>
                <div class="user-info-statics-item">
                  <div class="user-info-statics-item-size text-green-600">89</div>
                  <div class="user-info-statics-item-title">关注数</div>
                </div>
                <div class="user-info-statics-item">
                  <div class="user-info-statics-item-size text-purple-600">567</div>
                  <div class="user-info-statics-item-title">粉丝数</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="profile-page-box-content-item lg:col-span-3 space-y-6">
          <div class="info-card basics-info-card">
            <div class="info-card-title">
              <i class="i-tabler:user-filled"></i>
              <h2>基本信息</h2>
            </div>
            <div class="info-card-content grid-cols-1 md:grid-cols-2 ">
              <div class="space-y-4">
                <div>
                  <label class="basic-info-key">姓名</label>
                  <div class="basic-info-value">用户昵称</div>
                </div>
                <div>
                  <label class="basic-info-key">用户昵称</label>
                  <div class="basic-info-value">pig</div>
                </div>
                <div>
                  <label class="basic-info-key">邮箱地址</label>
                  <div class="basic-info-value">pig@admin.com</div>
                </div>
              </div>
              <div class="space-y-4">
                <div>
                  <label class="basic-info-key">手机号码</label>
                  <div class="basic-info-value">138****888</div>
                </div>
                <div>
                  <label class="basic-info-key">所在城市</label>
                  <div class="basic-info-value">XXXXXX</div>
                </div>
                <div>
                  <label class="basic-info-key">个人网站</label>
                  <div class="basic-info-value">https://pig.com</div>
                </div>
              </div>
            </div>
            <div class="info-card-signature mt-6">
              <label class="basic-info-key">个人简介</label>
              <div class="basic-info-value">热爱技术，喜欢分享，专注于前端开发和用户体验设计。在这里记录我的学习成长和技术思考，希望能与大家一起进步。</div>
            </div>
          </div>
          <div class="info-card account-info-card">
            <div class="info-card-title">
              <i class="i-tabler:user-filled text-green-600"></i>
              <h2>账户信息</h2>
            </div>
            <div class="info-card-content grid-cols-1 md:grid-cols-2">
              <div class="p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-600">账户状态</div>
                    <div class="text-sm text-gray-600">当前账户状态</div>
                  </div>
                  <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">正常</span>
                </div>
              </div>
              <div class="p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-600">注册时间</div>
                    <div class="text-sm text-gray-600">2025年10月15日</div>
                  </div>
                  <i class="i-tabler:calendar-week text-gray-400"></i>
                </div>
              </div>
              <div class="p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-600">最后登录</div>
                    <div class="text-sm text-gray-600">2025年10月15日 17:10</div>
                  </div>
                  <i class="i-tabler:clock-hour-4-filled text-gray-400"></i>
                </div>
              </div>
              <div class="p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-600">账户等级</div>
                    <div class="text-sm text-gray-600">普通会员</div>
                  </div>
                  <i class="i-tabler:star-filled text-yellow-500"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="info-card data-info-card">
            <div class="data-info-card-tabs-box">
              <nav class="data-info-card-tabs space-x-8">
                <button class="data-info-card-tab"
                        :class="{active: data.dataInfoTabIndex === 0}"
                        @click.stop="switchTab(0)">
                  <i class="i-tabler:edit mr-2"></i>
                  <span>我的帖子</span>
                  <span class="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">156</span>
                </button>
                <button class="data-info-card-tab"
                        :class="{active: data.dataInfoTabIndex === 1}"
                        @click.stop="switchTab(1)">
                  <i class="i-tabler:user-plus mr-2"></i>
                  <span>我的关注</span>
                  <span class="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">89</span>
                </button>
                <button class="data-info-card-tab"
                        :class="{active: data.dataInfoTabIndex === 2}"
                        @click.stop="switchTab(2)">
                  <i class="i-tabler:users-group mr-2"></i>
                  <span>我的粉丝</span>
                  <span class="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">567</span>
                </button>
                <button class="data-info-card-tab"
                        :class="{active: data.dataInfoTabIndex === 3}"
                        @click.stop="switchTab(3)">
                  <i class="i-tabler:heart-filled mr-2"></i>
                  <span>我的点赞</span>
                  <span class="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">2.34k</span>
                </button>
                <button class="data-info-card-tab"
                        :class="{active: data.dataInfoTabIndex === 4}"
                        @click.stop="switchTab(4)">
                  <i class="i-tabler:history mr-2"></i>
                  <span>最近活动</span>
                  <span class="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">28</span>
                </button>
              </nav>
            </div>
            <div class="data-info-card-content p-6">
              <div class="data-info-card-content-container relative">
                <div v-if="data.dataInfoTabIndex === 0" key="0">
                  <div class="post-list space-y-4">
                    <div class="post-list-item">
                      <div class="post-card">
                        <img src="https://api.horosama.com/random.php" class="post-card-cover" alt="COVER">
                        <div class="post-card-content">
                          <h3 class="post-title">Vue 3 Composition API深度解析与最佳实践</h3>
                          <p class="post-desc">
                            本文详细介绍了Vue 3 Composition API 的核心概念和使用技巧，帮助开发者更好地理解和应用这一强大的特效...
                          </p>
                          <div class="post-data-info space-x-4">
                            <span class="post-data-info-item">
                              <i class="i-tabler:eye-filled mr-1"></i>
                              1.52k
                            </span>
                            <span class="post-data-info-item">
                              <i class="i-tabler:heart-filled mr-1"></i>
                              245
                            </span>
                            <span class="post-data-info-item">
                              <i class="i-tabler:message-circle-filled mr-1"></i>
                              68
                            </span>
                            <span class="post-data-info-item">
                              <i class="i-tabler:clock-hour-4-filled mr-1"></i>
                              2天前
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else-if="data.dataInfoTabIndex === 1" key="1">
                  <div class="user-list grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="user-list-item">
                      <div class="user-list-item-card">
                        <img src="https://api.horosama.com/random.php" class="user-card-avatar" alt="AVATAR">
                        <h3 class="user-card-title">用户昵称</h3>
                        <div class="user-card-data-info space-x-4">
                          <div class="user-card-data-info-item">
                            <div class="user-card-data-info-item-size">1.2k</div>
                            <div class="user-card-data-info-item-text">粉丝</div>
                          </div>
                          <div class="w-px h-8 bg-gray-200"></div>
                          <div class="user-card-data-info-item">
                            <div class="user-card-data-info-item-title">关注于</div>
                            <div class="user-card-data-info-item-text">2025年10月14日</div>
                          </div>
                        </div>
                        <button class="user-card-btn">
                          <i class="i-tabler:user-check mr-2"></i>
                          已关注
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else-if="data.dataInfoTabIndex === 2" key="2">
                  <div class="user-list grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="user-list-item">
                      <div class="user-list-item-card">
                        <img src="https://api.horosama.com/random.php" class="user-card-avatar" alt="AVATAR">
                        <h3 class="user-card-title">用户昵称</h3>
                        <div class="user-card-data-info space-x-4">
                          <div class="user-card-data-info-item">
                            <div class="user-card-data-info-item-size">1.2k</div>
                            <div class="user-card-data-info-item-text">粉丝</div>
                          </div>
                          <div class="w-px h-8 bg-gray-200"></div>
                          <div class="user-card-data-info-item">
                            <div class="user-card-data-info-item-title">关注于</div>
                            <div class="user-card-data-info-item-text">2025年10月14日</div>
                          </div>
                        </div>
                        <button class="user-card-btn">
                          <i class="i-tabler:user-check mr-2"></i>
                          已关注
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else-if="data.dataInfoTabIndex === 3" key="3">
                  <div class="like-post-list space-y-4">
                    <div class="like-post-list-item flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <img src="https://api.horosama.com/random.php" class="like-post-list-item-avatar w-10 h-10 rounded-full object-cover" alt="AVATAR">
                      <div class="like-post-content flex-1">
                        <div class="flex items-center space-x-2 mb-2">
                          <span class="font-medium text-gray-900">李四</span>
                          <span class="text-sm text-gray-500">的帖子</span>
                        </div>
                        <h2 class="text-gray-900 font-medium mb-1">
                          JavaScript 异步编程的演进过程
                        </h2>
                        <p class="text-gray-600 text-sm mb-2 line-clamp-1">
                          从回调函数到 Promise 再到 async/await，JavaScript 异步编程经历了怎样的发展...
                        </p>
                        <div class="text-xs text-gray-500">
                          点赞时间：2小时前
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else-if="data.dataInfoTabIndex === 4" key="4">
                  <div class="activities-list space-y-4">
                    <div class="activities-list-item flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div class="activities-list-item-icon bg-theme-light-3 w-10 h-10 rounded-full flex items-center justify-center">
                        <i class="i-tabler:edit color-theme"></i>
                      </div>
                      <div class="flex-1">
                        <div class="text-gray-900 mb-1">
                          发布了新帖子
                        </div>
                        <div class="text-sm text-gray-500">
                          2小时前
                        </div>
                        <div class="text-sm text-gray-600 mt-2 p-2 bg-gray-50 rounded-lg">
                          Vue 3 Composition API 深度解析与最佳实践
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/pages/ProfileView";
</style>
