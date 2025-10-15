import { MockMethod } from 'vite-plugin-mock'

const staticsList = [
  {
    id: 0,
    title: "总帖数",
    number: 8900,
    color: "#F48020"
  },
  {
    id: 1,
    title: "今日新帖",
    number: 156,
    color: "#16A34A"
  },
  {
    id: 2,
    title: "总话题数",
    number: 24,
    color: "#FBBD26"
  },
  {
    id: 3,
    title: "在线人数",
    number: 2100,
    color: "#DC2626"
  }
];

export default [
  {
    url: "/api/statics/list",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "success",
        data: staticsList,
      };
    },
  },
  {
    url: "/api/statics/detail",
    method: "get",
    response: ({ query }) => {
      return {
        code: 200,
        message: "success",
        data: staticsList.filter((post) => post.id === parseInt(query.id)),
      };
    },
  }
] as MockMethod[]
