import http from '@/utils/http.ts'

export const findMenus = async () => {
  return await http.get("/menu/list");
}

export const findMenu = async (id: number) => {
  return await http.get(`/menu/detail?id=${id}`);
}
