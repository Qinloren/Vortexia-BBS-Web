import http from '@/utils/http.ts'

export const findStatics = async () => {
  return await http.get("/statics/list");
}

export const findStatic = async (id: number) => {
  return await http.get(`/statics/detail?id=${id}`);
}
