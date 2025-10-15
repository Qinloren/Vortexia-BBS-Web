import { MockMethod } from 'vite-plugin-mock'

const hotTopics = [
  {
    id: 0,
    name: "前端开发"
  },
  {
    id: 1,
    name: "JavaScript"
  },
  {
    id: 2,
    name: "Vue.js"
  },
  {
    id: 3,
    name: "求职面试"
  },
  {
    id: 4,
    name: "AI工具"
  },
  {
    id: 5,
    name: "工作心得"
  },
  {
    id: 6,
    name: "学习笔记"
  },
  {
    id: 7,
    name: "UI设计"
  },
  {
    id: 8,
    name: "React"
  },
  {
    id: 9,
    name: "职场经验"
  }
];

export default [
  {
    url: "/api/hotTopic/list",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "success",
        data: hotTopics,
      };
    },
  },
  {
    url: "/api/hotTopic/detail",
    method: "get",
    response: ({ query }) => {
      return {
        code: 200,
        message: "success",
        data: hotTopics.filter((post) => post.id === parseInt(query.id)),
      };
    },
  }
] as MockMethod[]
