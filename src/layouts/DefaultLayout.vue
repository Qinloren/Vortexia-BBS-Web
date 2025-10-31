<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { MenuType } from '@/components/index.types.ts'
import { findMenus } from '@/api/menu.ts'

const data = reactive({
  isLogin: false,
  menus: [] as MenuType[],
  menuIndex: 0,
})

const router = useRouter()

onMounted(async () => {
  console.log()
  // const menus = await findMenus();
  // data.menus = menus.data;
  data.menus = findMenus()
  const fullPath = router.currentRoute.value.fullPath.slice(1)
  const route = data.menus.filter((item) => item.path === fullPath)
  if (route.length > 0 && route[0]?.id !== undefined) {
    data.menuIndex = route[0].id
  }
})

const switchMenu = (newId: number) => {
  data.menuIndex = newId
  console.log(data.menus, newId)
  const menu = data.menus.filter((item) => item.id === newId)
  if (menu.length > 0 && menu[0]) {
    router.push({
      name: menu[0].name,
    })
  }
}

const goSignIn = () => {
  router.push({
    name: 'sign-in',
  })
}

const goSignUp = () => {
  router.push({
    name: 'sign-up',
  })
}
</script>

<template>
  <div class="default-layout">
    <header class="layout-header">
      <div class="layout-header-container">
        <div class="layout-header-logo">
          <img src="/images/logo.png" alt="LOGO" />
        </div>
        <ul class="layout-header-menu">
          <li
            class="header-menu-item"
            v-for="(item, index) in data.menus"
            :key="index"
            :class="{ active: data.menuIndex === index }"
            @click="switchMenu(item.id)"
          >
            <a href="javascript:void(0);" class="header-menu-item-link">
              <span class="header-menu-item-text">{{ item.title }}</span>
            </a>
          </li>
        </ul>
        <div class="layout-header-search">
          <IconTablerSearch class="search-icon" />
          <form>
            <input tabindex="0" type="text" name="search" placeholder="搜索帖子、用户或话题" />
          </form>
        </div>
        <div class="layout-header-user">
          <template v-if="data.isLogin">
            <!--          TODO: 已经登录-->
          </template>
          <template v-else>
            <button class="btn sign-in-btn" @click.stop="goSignIn">登录</button>
            <button class="btn sign-up-btn" @click.stop="goSignUp">注册</button>
          </template>
        </div>
      </div>
    </header>
    <main class="layout-main">
      <div class="layout-main-content">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </main>
    <footer class="layout-footer"></footer>
  </div>
</template>

<style lang="scss">
@use '@/assets/scss/layouts/DefaultLayout';
</style>
