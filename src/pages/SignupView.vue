<script setup lang="ts">
import { useRouter } from 'vue-router'
import { goTo } from '@/router'

const router = useRouter()
</script>

<template>
  <div class="sign-up-page">
    <div class="sign-up-form-box-wrapper">
      <div class="sign-up-form-box space-x-8">
        <div class="sign-up-form-box-container">
          <div class="sign-up-form-box-title">
            <h2 class="sign-up-form-box-title-text">用户注册</h2>
            <p class="sign-up-form-box-title-subtitle">加入我们的社区论坛</p>
          </div>
          <form class="sign-up-form space-x-6 space-y-3">
            <div class="sign-up-form-item">
              <label class="sign-up-form-item-input-label" for="account">用户名</label>
              <div class="sign-up-form-item-input-box">
                <i class="i-tabler:user-filled sign-up-form-item-input-icon"></i>
                <input type="text" required id="account" name="account" placeholder="请输入用户名" class="sign-up-form-item-input">
              </div>
            </div>
            <div class="sign-up-form-item">
              <label class="sign-up-form-item-input-label" for="email">邮箱地址</label>
              <div class="sign-up-form-item-input-box">
                <i class="i-tabler:user-filled sign-up-form-item-input-icon"></i>
                <input type="text" required id="email" name="email" placeholder="请输入邮箱地址" class="sign-up-form-item-input">
              </div>
            </div>
            <div class="sign-up-form-item">
              <label class="sign-up-form-item-input-label" for="password">密码</label>
              <div class="sign-up-form-item-input-box">
                <i class="i-tabler:lock-filled sign-up-form-item-input-icon"></i>
                <input type="text" required id="password" name="password" placeholder="请输入密码" class="sign-up-form-item-input">
                <i class="i-tabler:eye sign-up-form-item-input-icon-end"></i>
              </div>
            </div>
            <div class="sign-up-form-item">
              <label class="sign-up-form-item-input-label" for="password">确认密码</label>
              <div class="sign-up-form-item-input-box">
                <i class="i-tabler:lock-filled sign-up-form-item-input-icon"></i>
                <input type="text" required id="password" name="password" placeholder="请再次输入密码" class="sign-up-form-item-input">
                <i class="i-tabler:eye sign-up-form-item-input-icon-end"></i>
              </div>
            </div>
            <div class="sign-up-form-item">
              <label for="agreement" class="sign-up-form-item-remember space-x-2">
                <span class="checkbox-wrapper">
                  <input type="checkbox" required name="agreement" id="agreement" class="sign-up-form-item-remember-input">
                  <span class="checkmark">
                    <i class="i-tabler:check checkbox-icon"></i>
                  </span>
                </span>
                <span class="sign-up-form-item-remember-text text-sm">
                  我已阅读并同意
                  <a href="#" class="user-agreement-text" @click.stop="goTo('user-agreement')">《用户协议》</a>
                  和
                  <a href="#" class="privacy-policy-text" @click.stop="goTo('privacy-policy')">《隐私政策》</a>
                </span>
              </label>
            </div>
            <div class="sign-up-form-item">
              <button class="btn sign-up-form-item-btn flex items-center justify-center" type="submit">
                <i class="i-tabler:sign-up-2"></i>
                <span class="sign-up-form-item-btn-text">登录</span>
              </button>
            </div>
            <div class="sign-up-form-item-divider">
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t-1 border-gray:50"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">或</span>
                </div>
              </div>
            </div>
            <div class="sign-up-form-item-social flex justify-center space-x-3">
              <button class="sign-up-form-item-social-btn qq-social-btn" type="button" title="QQ登录">
              </button>
              <button class="sign-up-form-item-social-btn wechat-social-btn" type="button" title="微信登录">
              </button>
              <button class="sign-up-form-item-social-btn google-social-btn" type="button" title="Google登录">
              </button>
              <button class="sign-up-form-item-social-btn github-social-btn" type="button" title="Github登录">
              </button>
            </div>
            <p class="sign-up-form-item-go-sign-in justify-center">
              已有账号？
              <a href="javascript:void(0)" @click="goTo('sign-in')">立即登录</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/pages/SignupView";
</style>
