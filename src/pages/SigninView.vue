<script setup lang="ts">
import { goTo } from '@/router'
</script>

<template>
  <div class="sign-in-page">
    <div class="sign-in-form-box-wrapper">
      <div class="sign-in-form-box space-x-8">
      <div class="sign-in-form-box-container">
        <div class="sign-in-form-box-title">
          <h2 class="sign-in-form-box-title-text">用户登录</h2>
          <p class="sign-in-form-box-title-subtitle">欢迎回到社区论坛</p>
        </div>
        <form class="sign-in-form space-x-6 space-y-3">
          <div class="sign-in-form-item">
            <label class="sign-in-form-item-input-label" for="account">用户名或邮箱</label>
            <div class="sign-in-form-item-input-box">
              <i class="i-tabler:user-filled sign-in-form-item-input-icon"></i>
              <input type="text" required id="account" name="account" placeholder="请输入用户名或邮箱..." class="sign-in-form-item-input">
            </div>
          </div>
          <div class="sign-in-form-item">
            <label class="sign-in-form-item-input-label" for="password">密码</label>
            <div class="sign-in-form-item-input-box">
              <i class="i-tabler:lock-filled sign-in-form-item-input-icon"></i>
              <input type="text" required id="password" name="password" placeholder="请输入密码..." class="sign-in-form-item-input">
              <i class="i-tabler:eye sign-in-form-item-input-icon-end"></i>
            </div>
          </div>
          <div class="sign-in-form-item flex justify-between items-center">
            <label for="remember" class="sign-in-form-item-remember space-x-2">
              <span class="checkbox-wrapper">
                <input type="checkbox" name="remember" id="remember" class="sign-in-form-item-remember-input">
                <span class="checkmark">
                  <i class="i-tabler:check checkbox-icon"></i>
                </span>
              </span>
              <span class="sign-in-form-item-remember-text">记住我</span>
            </label>
            <a href="#" class="sign-in-form-item-forgot">忘记密码？</a>
          </div>
          <div class="sign-in-form-item">
            <label for="agreement" class="sign-in-form-item-remember space-x-2">
              <span class="checkbox-wrapper">
                <input type="checkbox" required name="agreement" id="agreement" class="sign-in-form-item-remember-input">
                <span class="checkmark">
                  <i class="i-tabler:check checkbox-icon"></i>
                </span>
              </span>
              <span class="sign-in-form-item-remember-text text-sm">
                我已阅读并同意
                <a href="javascript:void(0)" class="user-agreement-text" @click.stop="goTo('user-agreement')">《用户协议》</a>
                和
                <a href="javascript:void(0)" class="privacy-policy-text" @click.stop="goTo('privacy-policy')">《隐私政策》</a>
              </span>
            </label>
          </div>
          <div class="sign-in-form-item">
            <button class="btn sign-in-form-item-btn flex items-center justify-center" type="submit">
              <i class="i-tabler:sign-in-2"></i>
              <span class="sign-in-form-item-btn-text">登录</span>
            </button>
          </div>
          <div class="sign-in-form-item-divider">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t-1 border-gray:50"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">或</span>
              </div>
            </div>
          </div>
          <div class="sign-in-form-item-social flex justify-center space-x-3">
            <button class="sign-in-form-item-social-btn qq-social-btn" type="button" title="QQ登录">
            </button>
            <button class="sign-in-form-item-social-btn wechat-social-btn" type="button" title="微信登录">
            </button>
            <button class="sign-in-form-item-social-btn google-social-btn" type="button" title="Google登录">
            </button>
            <button class="sign-in-form-item-social-btn github-social-btn" type="button" title="Github登录">
            </button>
          </div>
          <p class="sign-in-form-item-go-sign-up justify-center">
            还没有账号？
            <a href="javascript:void(0)" @click.stop="goTo('sign-up')">立即注册</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/pages/SigninView";
</style>
