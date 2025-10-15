import http from '@/utils/http.ts'

export const findPosts = async () => {
  return await http.get("/post/list");
}

export const findPost = async (id: number) => {
  return await http.get(`/post/detail?id=${id}`);
}
