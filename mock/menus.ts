import { MockMethod } from 'vite-plugin-mock'

const menuList = [
  {
    id: 0,
    name: "home",
    path: "home",
    title: "首页"
  },
  {
    id: 1,
    name: "community",
    path: "community",
    title: "社区"
  },
  // {
  //   id: 2,
  //   name: "discover",
  //   path: "discover",
  //   title: "发现"
  // },
  // {
  //   id: 3,
  //   name: "message",
  //   path: "message",
  //   title: "消息"
  // }
];

export default [
  {
    url: "/api/menu/list",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "success",
        data: menuList,
      };
    },
  },
  {
    url: "/api/menu/detail",
    method: "get",
    response: ({ query }) => {
      return {
        code: 200,
        message: "success",
        data: menuList.filter((menu) => menu.id === parseInt(query.id)),
      };
    },
  }
] as MockMethod[]
