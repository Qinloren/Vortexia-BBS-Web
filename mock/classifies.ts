import { MockMethod } from 'vite-plugin-mock'

const classifyList = [
  {
    id: 0,
    name: "全部",
    icon: "tabler:home-filled",
    size: 1200,
  },
  {
    id: 1,
    name: "技术讨论",
    icon: "tabler:code",
    size: 456,
  },
  {
    id: 2,
    name: "生活分享",
    icon: "tabler:heart-filled",
    size: 789,
  },
  {
    id: 3,
    name: "问答求助",
    icon: "tabler:zoom-question",
    size: 234,
  },
  {
    id: 4,
    name: "职场经验",
    icon: "tabler:briefcase",
    size: 234,
  },
  {
    id: 5,
    name: "学习笔记",
    icon: "tabler:book-2",
    size: 567,
  },
  {
    id: 6,
    name: "创意分享",
    icon: "tabler:bulb",
    size: 123,
  },
  {
    id: 7,
    name: "闲聊灌水",
    icon: "tabler:bubble-text",
    size: 890,
  }
]

export default [
  {
    url: "/api/classify/list",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "success",
        data: classifyList
      }
    }
  },
  {
    url: "/api/classify/detail",
    method: "get",
    response: ({ query }) => {
      return {
        code: 200,
        message: "success",
        data: classifyList.filter(item => item.id === parseInt(query.id))
      }
    }
  }
] as MockMethod[]
