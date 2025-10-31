import http from '@/utils/http.ts'

export const findMenus = ():  {
  id: number;
  name: string;
  path: string;
  title: string;
}[] => {
  return [
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
}

export const findMenu = async (id: number) => {
  return await http.get(`/menu/detail?id=${id}`);
}
