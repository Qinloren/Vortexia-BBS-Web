import { MockMethod } from 'vite-plugin-mock'

const postList = [
  {
    id: 0,
    author: {
      id: 0,
      username: "",
      nickname: "技术大牛",
      avatar: "https://api.horosama.com/random.php",
      signature: "",
    },
    createTime: 1760077658,
    updateTime: 1760077658,
    classify: "技术讨论",
    title: "Vue 3 Composition API最佳实践分享",
    likeSize: 128,
    commentSize: 45,
    classifies: ["Vue3", "前端开发", "最佳实践"],
    introduction: "最近在项目中深度使用了Vue 3 的 Composition API， 宗总结了一些最佳时间和踩坑经验。包括响应式数据管理、组件间通信、性能优化等方面的心得体会，希望对大家有帮助。",
    content: "<p>最近在项目中深度使用了Vue 3 的 Composition API， 宗总结了一些最佳时间和踩坑经验。包括响应式数据管理、组件间通信、性能优化等方面的心得体会，希望对大家有帮助。</p>"
  },
  {
    id: 1,
    author: {
      id: 0,
      username: "",
      nickname: "技术大牛",
      avatar: "https://api.horosama.com/random.php",
      signature: "",
    },
    createTime: 1760077658,
    updateTime: 1760077658,
    classify: "技术讨论",
    title: "Vue 3 Composition API最佳实践分享",
    likeSize: 128,
    commentSize: 45,
    classifies: ["Vue3", "前端开发", "最佳实践"],
    introduction: "最近在项目中深度使用了Vue 3 的 Composition API， 宗总结了一些最佳时间和踩坑经验。包括响应式数据管理、组件间通信、性能优化等方面的心得体会，希望对大家有帮助。",
    content: "<p>最近在项目中深度使用了Vue 3 的 Composition API， 宗总结了一些最佳时间和踩坑经验。包括响应式数据管理、组件间通信、性能优化等方面的心得体会，希望对大家有帮助。</p>"
  },
  {
    id: 2,
    author: {
      id: 0,
      username: "",
      nickname: "技术大牛",
      avatar: "https://api.horosama.com/random.php",
      signature: "",
    },
    createTime: 1760077658,
    updateTime: 1760077658,
    classify: "技术讨论",
    title: "Vue 3 Composition API最佳实践分享",
    likeSize: 128,
    commentSize: 45,
    classifies: ["Vue3", "前端开发", "最佳实践"],
    introduction: "最近在项目中深度使用了Vue 3 的 Composition API， 宗总结了一些最佳时间和踩坑经验。包括响应式数据管理、组件间通信、性能优化等方面的心得体会，希望对大家有帮助。",
    content: "<p>最近在项目中深度使用了Vue 3 的 Composition API， 宗总结了一些最佳时间和踩坑经验。包括响应式数据管理、组件间通信、性能优化等方面的心得体会，希望对大家有帮助。</p>"
  },
  {
    id: 3,
    author: {
      id: 0,
      username: "",
      nickname: "技术大牛",
      avatar: "https://api.horosama.com/random.php",
      signature: "",
    },
    createTime: 1760077658,
    updateTime: 1760077658,
    classify: "技术讨论",
    title: "Vue 3 Composition API最佳实践分享",
    likeSize: 128,
    commentSize: 45,
    classifies: ["Vue3", "前端开发", "最佳实践"],
    introduction: "最近在项目中深度使用了Vue 3 的 Composition API， 宗总结了一些最佳时间和踩坑经验。包括响应式数据管理、组件间通信、性能优化等方面的心得体会，希望对大家有帮助。",
    content: "<p>最近在项目中深度使用了Vue 3 的 Composition API， 宗总结了一些最佳时间和踩坑经验。包括响应式数据管理、组件间通信、性能优化等方面的心得体会，希望对大家有帮助。</p>"
  },
  {
    id: 4,
    author: {
      id: 0,
      username: "",
      nickname: "技术大牛",
      avatar: "https://api.horosama.com/random.php",
      signature: "",
    },
    createTime: 1760077658,
    updateTime: 1760077658,
    classify: "技术讨论",
    title: "Vue 3 Composition API最佳实践分享",
    likeSize: 128,
    commentSize: 45,
    classifies: ["Vue3", "前端开发", "最佳实践"],
    introduction: "最近在项目中深度使用了Vue 3 的 Composition API， 宗总结了一些最佳时间和踩坑经验。包括响应式数据管理、组件间通信、性能优化等方面的心得体会，希望对大家有帮助。",
    content: "<p>最近在项目中深度使用了Vue 3 的 Composition API， 宗总结了一些最佳时间和踩坑经验。包括响应式数据管理、组件间通信、性能优化等方面的心得体会，希望对大家有帮助。</p>"
  },
  {
    id: 5,
    author: {
      id: 0,
      username: "",
      nickname: "技术大牛",
      avatar: "https://api.horosama.com/random.php",
      signature: "",
    },
    createTime: 1760077658,
    updateTime: 1760077658,
    classify: "技术讨论",
    title: "Vue 3 Composition API最佳实践分享",
    likeSize: 128,
    commentSize: 45,
    classifies: ["Vue3", "前端开发", "最佳实践"],
    introduction: "最近在项目中深度使用了Vue 3 的 Composition API， 宗总结了一些最佳时间和踩坑经验。包括响应式数据管理、组件间通信、性能优化等方面的心得体会，希望对大家有帮助。",
    content: "<p>最近在项目中深度使用了Vue 3 的 Composition API， 宗总结了一些最佳时间和踩坑经验。包括响应式数据管理、组件间通信、性能优化等方面的心得体会，希望对大家有帮助。</p>"
  },
  {
    id: 6,
    author: {
      id: 0,
      username: "",
      nickname: "技术大牛",
      avatar: "https://api.horosama.com/random.php",
      signature: "",
    },
    createTime: "2023-07-01 10:30:00",
    updateTime: "2023-07-01 10:35:00",
    classify: "技术讨论",
    title: "Vue 3 Composition API最佳实践分享",
    likeSize: 128,
    commentSize: 45,
    classifies: ["Vue3", "前端开发", "最佳实践"],
    introduction: "最近在项目中深度使用了Vue 3 的 Composition API， 宗总结了一些最佳时间和踩坑经验。包括响应式数据管理、组件间通信、性能优化等方面的心得体会，希望对大家有帮助。",
    content: "<p>最近在项目中深度使用了Vue 3 的 Composition API， 宗总结了一些最佳时间和踩坑经验。包括响应式数据管理、组件间通信、性能优化等方面的心得体会，希望对大家有帮助。</p>"
  }
];

export default [
  {
    url: "/api/post/list",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "success",
        data: postList,
      };
    },
  },
  {
    url: "/api/post/detail",
    method: "get",
    response: ({ query }) => {
      return {
        code: 200,
        message: "success",
        data: postList.filter((post) => post.id === parseInt(query.id)),
      };
    },
  }
] as MockMethod[]
