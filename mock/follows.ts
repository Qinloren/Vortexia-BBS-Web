import { MockMethod } from 'vite-plugin-mock'

const followList = [
  {
    id: 0,
    avatar: "https://api.horosama.com/random.php",
    name: "技术大牛",
    description: "10年+全站开发经验",
    isFollow: true
  },
  {
    id: 1,
    avatar: "https://api.horosama.com/random.php",
    name: "设计师小王",
    description: "UI/UX 设计专家",
    isFollow: false
  },
  {
    id: 2,
    avatar: "https://api.horosama.com/random.php",
    name: "产品新星",
    description: "互联网产品经理",
    isFollow: false
  }
];

export default [
  {
    url: "/api/follow/list",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "success",
        data: followList,
      };
    },
  },
  {
    url: "/api/follow/detail",
    method: "get",
    response: ({ query }) => {
      return {
        code: 200,
        message: "success",
        data: followList.filter((post) => post.id === parseInt(query.id)),
      };
    },
  }
] as MockMethod[]
