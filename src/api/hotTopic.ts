import http from '@/utils/http.ts'

export const findHotTopics = async () => {
  return await http.get("/mock/api/hotTopic/list");
}

export const findHotTopic = async (id: number) => {
  return await http.get(`/mock/api/hotTopic/detail?id=${id}`);
}
