import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "iconify-icon";
import "uno.css"
// import "virtual:uno.css"

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

// const customElements = ['iconify-icon']
// app.config.compilerOptions.isCustomElement = (tag) => tag === "iconify-icon"
// app.config.compilerOptions.isCustomElement = (tag) => {
//   return customElements.includes(tag)
// }

app.use(router)

app.mount('#app')
