import http from '@/utils/http.ts'

export const findTopics = async () => {
  return await http.get("/topic/list");
}

export const findTopic = async (id: number) => {
  return await http.get(`/topic/detail?id=${id}`);
}
