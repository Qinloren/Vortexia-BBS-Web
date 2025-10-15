import { MockMethod } from 'vite-plugin-mock'

const topicList = [
  {
    id: 0,
    title: "开发技术交流",
    icon: "tabler:code",
    avatar: "https://api.horosama.com/random.php",
    classify: {
      id: 1,
      name: "技术讨论",
      icon: "tabler:code",
      size: 456,
    },
    postSize: 2100,
    memberSize: 15600,
    onlineMemberSize: 234,
    latestPushTime: 1760077658,
    introduction: "专注于前端、后端、移动端等各类技术讨论，分享最新的开发经验和技术趋势。"
  },
  {
    id: 1,
    title: "开发技术交流",
    icon: "tabler:code",
    avatar: "https://api.horosama.com/random.php",
    classify: {
      id: 1,
      name: "技术讨论",
      icon: "tabler:code",
      size: 456,
    },
    postSize: 2100,
    memberSize: 15600,
    onlineMemberSize: 234,
    latestPushTime: 1760077658,
    introduction: "专注于前端、后端、移动端等各类技术讨论，分享最新的开发经验和技术趋势。"
  },
  {
    id: 2,
    title: "开发技术交流",
    icon: "tabler:code",
    avatar: "https://api.horosama.com/random.php",
    classify: {
      id: 1,
      name: "技术讨论",
      icon: "tabler:code",
      size: 456,
    },
    postSize: 2100,
    memberSize: 15600,
    onlineMemberSize: 234,
    latestPushTime: 1760077658,
    introduction: "专注于前端、后端、移动端等各类技术讨论，分享最新的开发经验和技术趋势。"
  }
];

export default [
  {
    url: "/api/topic/list",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "success",
        data: topicList,
      };
    },
  },
  {
    url: "/api/topic/detail",
    method: "get",
    response: ({ query }) => {
      return {
        code: 200,
        message: "success",
        data: topicList.filter((post) => post.id === parseInt(query.id)),
      };
    },
  }
] as MockMethod[]
