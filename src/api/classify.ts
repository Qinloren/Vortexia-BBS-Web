import http from '@/utils/http.ts'

/**
 * 查询所有分类
 */
export const findClassifies = async () => {
  return await http.get("/api/sys/classify/search.do");
}
