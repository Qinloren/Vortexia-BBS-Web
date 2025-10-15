import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import Icons from "unplugin-icons/vite"
import Components from "unplugin-vue-components/vite";
import IconResolver from "unplugin-icons/resolver";
import { viteMockServe } from "vite-plugin-mock";
import UnoCSS from "unocss/vite";
import { presetAttributify, presetIcons, presetWind4 } from 'unocss'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {plugins: [
      UnoCSS({
        presets: [
          presetWind4(),
          presetAttributify(),
          presetIcons()
        ]
      }),
      vue(),
      vueJsx(),
      vueDevTools(),
      viteMockServe({
        mockPath: "mock",
        enable: command === "serve",
      }),
      Icons({
        compiler: "vue3",
        autoInstall: true
      }),
      Components({
        dirs: [
          "src/components",
          "src/layout",
          "src/pages"
        ],
        include: [
          /\.vue$/,
          /\.vue\?vue/,
          /\.md$/,
        ],
        resolvers: [
          IconResolver({
            prefix: "icon",
          })
        ]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    server: {
      host: "0.0.0.0",
      port: 5173,
      // proxy: {
      //   "api": {
      //     target: "http://localhost:5173",
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, "")
      //   }
      // }
    }
  }
})
