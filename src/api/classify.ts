import http from '@/utils/http.ts'

export const findClassifies = async () => {
  return await http.get("/classify/list");
}
