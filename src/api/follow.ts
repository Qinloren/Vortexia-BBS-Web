import http from '@/utils/http.ts'

export const findFollows = async () => {
  return await http.get("/follow/list");
}

export const findFollow = async (id: number) => {
  return await http.get(`/follow/detail?id=${id}`);
}
