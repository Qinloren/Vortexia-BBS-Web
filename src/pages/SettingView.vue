<script setup lang="ts">
import { reactive } from 'vue'

const data = reactive({
  settingIndex: 0,
})

const switchTab = (index: number) => {
  data.settingIndex = index
}
</script>

<template>
  <div class="setting-page">
    <div class="setting-page-box-container">
      <div class="setting-page-box-title">
        <div>
          <h1 class="setting-page-box-title-text">账号设置</h1>
          <h1 class="setting-page-box-subtitle">管理您的账号信息、隐私设置和通知偏好</h1>
        </div>
        <button class="btn back-btn">
          <i class="i-tabler:arrow-narrow-left mr-2"></i>
          <span>返回首页</span>
        </button>
      </div>
      <div class="setting-page-box-content grid-cols-1 lg:grid-cols-5">
        <div class="lg:col-span-1">
          <div class="setting-menu-box">
            <div class="setting-menu">
              <div class="setting-menu-title">设置菜单</div>
              <nav class="space-y-2">
                <button class="setting-menu-item"
                        :class="{
                          active: data.settingIndex === 0
                        }"
                        @click.stop="switchTab(0)">
                  <i class="i-tabler:user-filled w-5 mr-3"></i>
                  基本信息
                </button>
                <button class="setting-menu-item"
                        :class="{
                          active: data.settingIndex === 1
                        }"
                        @click.stop="switchTab(1)">
                  <i class="i-tabler:lock-filled w-5 mr-3"></i>
                  密码修改
                </button>
                <button class="setting-menu-item"
                        :class="{
                          active: data.settingIndex === 2
                        }"
                        @click.stop="switchTab(2)">
                  <i class="i-tabler:shield-half-filled w-5 mr-3"></i>
                  隐私设置
                </button>
                <button class="setting-menu-item"
                        :class="{
                          active: data.settingIndex === 3
                        }"
                        @click.stop="switchTab(3)">
                  <i class="i-tabler:bell-filled w-5 mr-3"></i>
                  通知偏好
                </button>
                <button class="setting-menu-item"
                        :class="{
                          active: data.settingIndex === 4
                        }"
                        @click.stop="switchTab(4)">
                  <i class="i-tabler:database w-5 mr-3"></i>
                  数据管理
                </button>
                <button class="setting-menu-item"
                        :class="{
                          active: data.settingIndex === 5
                        }"
                        @click.stop="switchTab(5)">
                  <i class="i-tabler:shield-half-filled w-5 mr-3"></i>
                  安全验证
                </button>
                <button class="setting-menu-item"
                        :class="{
                          active: data.settingIndex === 6
                        }"
                        @click.stop="switchTab(6)">
                  <i class="i-tabler:alert-triangle-filled w-5 mr-3"></i>
                  账户注销
                </button>
              </nav>
            </div>
          </div>
        </div>
        <div class="lg:col-span-4">
          <div v-if="data.settingIndex === 0">
            <div class="setting-card">
              <div class="flex items-center mb-6">
                <i class="i-tabler:user-filled color-theme text-xl mr-3"></i>
                <h2 class="text-xl font-semibold text-gray-900">基本信息</h2>
              </div>
              <div class="mb-8">
                <label class="block text-sm font-medium text-gray-700 mb-4">头像</label>
                <div class="flex items-center space-x-6">
                  <img src="https://api.horosama.com/random.php" alt="AVATAR" class="w-20 h-20 rounded-full object-cover border-4 border-gray-100">
                  <div>
                    <button class="px-4 py-2 bg-theme text-white text-sm font-medium rounded-lg hover:bg-theme-dark transition-colors cursor-pointer whitespace-nowrap !rounded-button">
                      <i class="i-tabler:upload mr-2"></i>
                      上传新头像
                    </button>
                    <p class="text-xs text-gray-500 mt-2">
                      支持 JPG、PNG 格式，大小不超过2MB
                    </p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label>姓名</label>
                  <input type="text"
                         class="setting-input w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent text-sm outline-none">
                </div>
                <div>
                  <label>用户名</label>
                  <input type="text"
                         class="setting-input w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent text-sm outline-none">
                </div>
                <div>
                  <label>邮箱地址</label>
                  <input type="text"
                         class="setting-input w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent text-sm outline-none">
                </div>
                <div>
                  <label>手机号码</label>
                  <input type="text"
                         class="setting-input w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent text-sm outline-none">
                </div>
                <div>
                  <label>所在城市</label>
                  <input type="text"
                         class="setting-input w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent text-sm outline-none">
                </div>
                <div>
                  <label>个人网站</label>
                  <input type="text"
                         class="setting-input w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent text-sm outline-none">
                </div>
              </div>
              <div class="mt-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">个人简介</label>
                <textarea rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 setting-input focus:border-transparent text-sm resize-none outline-none" placeholder="介绍一下自己..."></textarea>
              </div>
              <div class="flex justify-end space-x-4 mt-8">
                <button class="btn reset-btn">重置</button>
                <button class="btn setting-save-btn">保存更改</button>
              </div>
            </div>
          </div>
          <div v-else-if="data.settingIndex === 1">
            <div class="setting-card">
              <div class="flex items-center mb-6">
                <i class="i-tabler:lock-filled text-green-500 text-xl mr-3"></i>
                <h2 class="text-xl font-semibold text-gray-900">密码修改</h2>
              </div>
              <div class="max-w-md space-y-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">当前密码</label>
                  <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 setting-input focus:border-transparent text-sm" placeholder="请输入当前密码">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">新密码</label>
                  <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 setting-input focus:border-transparent text-sm" placeholder="请输入新密码">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">确认新密码</label>
                  <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 setting-input focus:border-transparent text-sm" placeholder="请再次输入新密码">
                </div>
              </div>
              <div class="bg-theme-light-3 border border-theme rounded-lg p-4 mt-6">
                <div class="flex items-start">
                  <i class="i-tabler:info-circle color-theme mt-0.5 mr-3"></i>
                  <div class="text-sm color-theme">
                    <p class="font-medium mb-2">密码安全提示：</p>
                    <ul class="space-y-1 text-xs list-disc list-inside">
                      <li>密码长度至少8位</li>
                      <li>包含大小写字母、数字和特殊字符</li>
                      <li>避免使用常见密码或个人信息</li>
                      <li>定期更换密码以确保账户安全</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="flex justify-end mt-8">
                <button class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
                  <i class="i-tabler:key-filled mr-2"></i>
                  修改密码
                </button>
              </div>
            </div>
          </div>
          <div v-else-if="data.settingIndex === 2">
            <div class="setting-card">
              <div class="flex items-center mb-6">
                <i class="i-tabler:shield-half-filled text-purple-500 text-xl mr-3"></i>
                <h2 class="text-xl font-semibold text-gray-900">隐私设置</h2>
              </div>
              <div class="space-y-6">
                <div class="border-b border-gray-200 pb-6">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">个人资料可见性</h3>
                  <div class="space-y-3">
                    <label class="flex items-center cursor-pointer">
                      <input type="radio" name="profileVisibility" class="mr-3" value="public">
                      <span class="flex flex-col">
                        <span class="font-medium text-gray-900">公开</span>
                        <span class="text-sm text-gray-500">所有人都可以查看您的个人资料</span>
                      </span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                      <input type="radio" name="profileVisibility" class="mr-3" value="friends">
                      <span class="flex flex-col">
                        <span class="font-medium text-gray-900">仅好友</span>
                        <span class="text-sm text-gray-500">只有您的好友可以查看完整资料</span>
                      </span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                      <input type="radio" name="profileVisibility" class="mr-3" value="private">
                      <span class="flex flex-col">
                        <span class="font-medium text-gray-900">私密</span>
                        <span class="text-sm text-gray-500">只有您自己可以查看完整资料</span>
                      </span>
                    </label>
                  </div>
                </div>
                <div class="border-b border-gray-200 pb-6">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">搜索和发现</h3>
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-900">允许搜索发现</div>
                        <div class="text-sm text-gray-500">其他用户可以通过搜索找到您</div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <span class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F48020]"></span>
                      </label>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-900">显示在线状态</div>
                        <div class="text-sm text-gray-500">让其他用户看到您的在线状态</div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <span class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F48020]"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="border-b border-gray-200 pb-6">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">联系方式隐私</h3>
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-900">显示邮箱地址</div>
                        <div class="text-sm text-gray-500">在个人资料中显示邮箱地址</div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <span class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F48020]"></span>
                      </label>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-900">显示手机号码</div>
                        <div class="text-sm text-gray-500">在个人资料中显示手机号码</div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <span class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F48020]"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="border-b border-gray-200 pb-6">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">内容推荐</h3>
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-900">个性化推荐</div>
                        <div class="text-sm text-gray-500">基于您的活动为您推荐相关内容</div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <span class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F48020]"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-end mt-8">
                <button class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
                  <i class="i-tabler:file-database mr-2"></i>
                  保存隐私设置
                </button>
              </div>
            </div>
          </div>
          <div v-else-if="data.settingIndex === 3">
            <div class="setting-card">
              <div class="flex items-center mb-6">
                <i class="i-tabler:bell-filled text-orange-500 text-xl mr-3"></i>
                <h2 class="text-xl font-semibold text-gray-900">通知偏好</h2>
              </div>
              <div class="space-y-6">
                <div class="border-b border-gray-200 pb-6">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">邮件通知</h3>
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-900">新评论通知</div>
                        <div class="text-sm text-gray-500">有人评论您的帖子时发送邮件</div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <span class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F48020]"></span>
                      </label>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-900">点赞通知</div>
                        <div class="text-sm text-gray-500">有人点赞您的内容时发送邮件</div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <span class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F48020]"></span>
                      </label>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-900">关注通知</div>
                        <div class="text-sm text-gray-500">有新用户关注您时发送邮件</div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <span class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F48020]"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="border-b border-gray-200 pb-6">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">推送通知</h3>
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-900">即使消息</div>
                        <div class="text-sm text-gray-500">收到私信时立即推送通知</div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <span class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F48020]"></span>
                      </label>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-900">系统通知</div>
                        <div class="text-sm text-gray-500">重要系统消息和更新通知</div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <span class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F48020]"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="border-b border-gray-200 pb-6">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">营销邮件</h3>
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-900">产品更新</div>
                        <div class="text-sm text-gray-500">接受产品功能更新和改进通知</div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <span class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F48020]"></span>
                      </label>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-900">活动推广</div>
                        <div class="text-sm text-gray-500">接收平台活动和优惠信息</div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <span class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F48020]"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="border-b border-gray-200 pb-6">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">通知频率</h3>
                  <div class="space-y-3">
                  <label class="flex items-center cursor-pointer">
                    <input type="radio" name="profileVisibility" class="mr-3" value="public">
                    <span class="flex flex-col">
                        <span class="font-medium text-gray-900">即使通知</span>
                        <span class="text-sm text-gray-500">有新活动时立即发送通知</span>
                      </span>
                  </label>
                  <label class="flex items-center cursor-pointer">
                    <input type="radio" name="profileVisibility" class="mr-3" value="friends">
                    <span class="flex flex-col">
                        <span class="font-medium text-gray-900">每日摘要</span>
                        <span class="text-sm text-gray-500">每天汇总发送一次通知</span>
                      </span>
                  </label>
                  <label class="flex items-center cursor-pointer">
                    <input type="radio" name="profileVisibility" class="mr-3" value="private">
                    <span class="flex flex-col">
                        <span class="font-medium text-gray-900">每周摘要</span>
                        <span class="text-sm text-gray-500">每周汇总发送一次通知</span>
                      </span>
                  </label>
                </div>
                </div>
              </div>
              <div class="flex justify-end mt-8">
                <button class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
                  <i class="i-tabler:file-database mr-2"></i>
                  保存通知设置
                </button>
              </div>
            </div>
          </div>
          <div v-else-if="data.settingIndex === 4">
            <div class="setting-card">
              <div class="flex items-center mb-6">
                <i class="i-tabler:database text-indigo-500 text-xl mr-3"></i>
                <h2 class="text-xl font-semibold text-gray-900">数据管理</h2>
              </div>
              <div class="space-y-6">
                <div class="border-b border-gray-200 pb-6">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">数据导出</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 border border-gray-200 rounded-lg">
                      <div class="flex items-center justify-between mb-3">
                        <div>
                          <div class="font-medium text-gray-900">个人资料数据</div>
                          <div class="text-sm text-gray-500">基本信息、设置等</div>
                        </div>
                        <i class="i-tabler:user-filled color-theme"></i>
                      </div>
                      <button class="w-full px-4 py-2 bg-theme text-white text-sm rounded-lg hover:bg-theme-dark transition-colors cursor-pointer whitespace-nowrap !rounded-button">
                        <i class="i-tabler:download mr-2"></i>
                        导出资料
                      </button>
                    </div>
                    <div class="p-4 border border-gray-200 rounded-lg">
                      <div class="flex items-center justify-between mb-3">
                        <div>
                          <div class="font-medium text-gray-900">发布内容</div>
                          <div class="text-sm text-gray-500">帖子、评论</div>
                        </div>
                        <i class="i-tabler:user-filled text-green-500"></i>
                      </div>
                      <button class="w-full px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
                        <i class="i-tabler:download mr-2"></i>
                        导出内容
                      </button>
                    </div>
                    <div class="p-4 border border-gray-200 rounded-lg">
                      <div class="flex items-center justify-between mb-3">
                        <div>
                          <div class="font-medium text-gray-900">活动记录</div>
                          <div class="text-sm text-gray-500">登录、操作历史</div>
                        </div>
                        <i class="i-tabler:user-filled text-purple-500"></i>
                      </div>
                      <button class="w-full px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
                        <i class="i-tabler:download mr-2"></i>
                        导出记录
                      </button>
                    </div>
                    <div class="p-4 border border-gray-200 rounded-lg">
                      <div class="flex items-center justify-between mb-3">
                        <div>
                          <div class="font-medium text-gray-900">完整数据包</div>
                          <div class="text-sm text-gray-500">所有数据的压缩包</div>
                        </div>
                        <i class="i-tabler:user-filled text-orange-500"></i>
                      </div>
                      <button class="w-full px-4 py-2 bg-orange-600 text-white text-sm rounded-lg hover:bg-orange-700 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
                        <i class="i-tabler:download mr-2"></i>
                        导出全部
                      </button>
                    </div>
                  </div>
                </div>
                <div class="border-b border-gray-200 pb-6">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">缓存清理</h3>
                  <div class="space-y-4">
                    <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div class="font-medium text-gray-900">浏览器缓存</div>
                        <div class="text-sm text-gray-500">清理本地存储的临时数据</div>
                      </div>
                      <button>
                        <i class="i-tabler:trash-filled mr-2"></i>
                        清理缓存
                      </button>
                    </div>
                    <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div class="font-medium text-gray-900">搜索历史</div>
                        <div class="text-sm text-gray-500">清除所有搜索记录</div>
                      </div>
                      <button>
                        <i class="i-tabler:trash-filled mr-2"></i>
                        清理历史
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900 mb-4">数据统计</h3>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="text-center p-4 bg-theme-light-3 rounded-lg">
                      <div class="text-2xl font-bold color-theme">156</div>
                      <div class="text-sm color-theme">发布帖子</div>
                    </div>
                    <div class="text-center p-4 bg-green-50 rounded-lg">
                      <div class="text-2xl font-bold text-green-600">2,340</div>
                      <div class="text-sm text-green-700">获得点赞</div>
                    </div>
                    <div class="text-center p-4 bg-purple-50 rounded-lg">
                      <div class="text-2xl font-bold text-purple-600">89</div>
                      <div class="text-sm text-purple-700">关注用户</div>
                    </div>
                    <div class="text-center p-4 bg-orange-50 rounded-lg">
                      <div class="text-2xl font-bold color-orange-600">567</div>
                      <div class="text-sm text-orange-700">粉丝数量</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="data.settingIndex === 5">
            <div class="setting-card">
              <div class="flex items-center mb-6">
                <i class="i-tabler:shield-half-filled text-red-500 text-xl mr-3"></i>
                <h2 class="text-xl font-semibold text-gray-900">安全验证</h2>
              </div>
              <div class="space-y-6">
                <div class="border-b border-gray-200 pb-6">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">两步验证</h3>
                  <div class="space-y-4">
                    <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <div class="font-medium text-gray-900">启用两步验证</div>
                        <div class="text-sm text-gray-500">为您的账户添加额外的安全保护</div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <span class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F48020]"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="border-b border-gray-200 pb-6">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">登录设备管理</h3>
                  <div class="space-y-4">
                    <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div class="flex items-center space-x-4">
                        <div class="w-10 h-10 bg-theme-light-3 rounded-full flex items-center justify-center">
                          <i class="i-tabler:device-laptop color-theme"></i>
                        </div>
                        <div>
                          <div class="font-medium text-gray-900">MacBook Pro</div>
                          <div class="text-sm text-gray-500">XXX·当前活动</div>
                        </div>
                      </div>
                      <div class="flex items-center space-x-2">
                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">当前设备</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div class="flex items-center space-x-4">
                        <div class="w-10 h-10 bg-theme-light-3 rounded-full flex items-center justify-center">
                          <i class="i-tabler:device-mobile color-theme"></i>
                        </div>
                        <div>
                          <div class="font-medium text-gray-900">iPhone 16 Pro Max</div>
                          <div class="text-sm text-gray-500">XXX·2小时前</div>
                        </div>
                      </div>
                      <div class="flex items-center space-x-2">
                        <button class="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-lg hover:bg-red-200 transition-colors cursor-pointer whitespace-nowrap !rounded-button">移除</button>
                      </div>
                    </div>
                    <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div class="flex items-center space-x-4">
                        <div class="w-10 h-10 bg-theme-light-3 rounded-full flex items-center justify-center">
                          <i class="i-tabler:device-mobile color-theme"></i>
                        </div>
                        <div>
                          <div class="font-medium text-gray-900">Chrome Windows</div>
                          <div class="text-sm text-gray-500">XXX·3小时前</div>
                        </div>
                      </div>
                      <div class="flex items-center space-x-2">
                        <button class="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-lg hover:bg-red-200 transition-colors cursor-pointer whitespace-nowrap !rounded-button">移除</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-b border-gray-200 pb-6">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">可疑活动监控</h3>
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-900">异常登录提醒</div>
                        <div class="text-sm text-gray-500">检测到异常登录时发送警告</div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <span class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F48020]"></span>
                      </label>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-900">登陆位置跟踪</div>
                        <div class="text-sm text-gray-500">记录和监控登录地理位置</div>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <span class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F48020]"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="data.settingIndex === 6">
            <div class="setting-card">
              <div class="flex items-center mb-6">
                <i class="i-tabler:alert-triangle-filled text-red-500 text-xl mr-3"></i>
                <h2 class="text-xl font-semibold text-gray-900">账户注销</h2>
              </div>
              <div class="bg-red-50 border-red-200 rounded-lg mb-6">
                <div class="flex items-start">
                  <i class="i-tabler:alert-triangle-filled text-red-500 mt-0.5 mr-3"></i>
                  <div class="text-sm text-red-700">
                    <p class="font-medium mb-2">注意：账户注销是不可逆的操作</p>
                    <p class="font-medium mb-2">注销账户后，以下数据将被永久删除：</p>
                    <ul class="space-y-1 text-xs ml-4 list-disc list-inside">
                      <li>个人资料和账户信息</li>
                      <li>所有发布的帖子和评论</li>
                      <li>关注关系和社交连接</li>
                      <li>私信和聊天记录</li>
                      <li>个人设置和偏好</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="space-y-6">
                <div>
                  <h3 class="text-lg font-medium text-gray-900 mb-4">数据保留选项</h3>
                  <div class="space-y-3">
                    <label class="flex items-start cursor-pointer">
                      <input type="checkbox" class="mt-1 mr-3">
                      <span class="flex flex-col">
                        <span class="font-medium text-gray-900">保留发布内容</span>
                        <span class="font-medium text-gray-900">将您的帖子转为匿名，但保留内容供其他用户参考</span>
                      </span>
                    </label>
                    <label class="flex items-start cursor-pointer">
                      <input type="checkbox" class="mt-1 mr-3">
                      <span class="flex flex-col">
                        <span class="font-medium text-gray-900">导出个人数据</span>
                        <span class="font-medium text-gray-900">在注销前自动导出您的个人数据副本</span>
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900 mb-4">注销原因（可选）</h3>
                  <div class="space-y-2">
                    <label class="flex items-center cursor-pointer">
                      <input type="radio" name="deleteReason" value="privacy">
                      <span class="text-sm text-gray-700">隐私考虑</span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                      <input type="radio" name="deleteReason" value="inactive">
                      <span class="text-sm text-gray-700">不再使用</span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                      <input type="radio" name="deleteReason" value="dissatisfied">
                      <span class="text-sm text-gray-700">对服务不满意</span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                      <input type="radio" name="deleteReason" value="other">
                      <span class="text-sm text-gray-700">其他原因</span>
                    </label>
                  </div>
                  <div class="mt-3">
                    <textarea rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 setting-input focus:border-transparent text-sm resize-none" placeholder="请说明其他原因..."></textarea>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900 mb-4">身份验证</h3>
                  <div class="max-w-md">
                    <label for="password">请输入当前密码以确认身份</label>
                    <input type="password" name="password" id="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 setting-input focus:border-transparent text-sm" placeholder="请输入当前密码">
                  </div>
                </div>
                <div>
                  <label class="flex items-start cursor-pointer">
                    <input type="checkbox" class="mt-1 mr-3">
                    <span class="text-sm text-gray-700">我确认理解账户注销的后果，并同意永久删除我的账户和所有相关数据。</span>
                  </label>
                </div>
              </div>
              <div class="flex justify-end space-x-4 mt-8">
                <button class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap !rounded-button">取消</button>
                <button class="bg-gray-300 text-gray-500 cursor-not-allowed px-6 py-2 rounded-lg transition-colors whitespace-nowrap !rounded-button">
                  <i class="i-tabler:trash-filled mr-2"></i>
                  永久注销账户
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/pages/SettingView";
</style>
