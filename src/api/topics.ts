import http from '@/utils/http.ts'

/**
 * 查询所有主题
 */
export const findTopics = async () => {
  return await http.get("/sys/topic/list.do");
}

/**
 * 获取主题详情
 */
export const findTopicDetailBySlug = async (slug: string) => {
  return await http.get("/sys/topic/detailBySlug.do", {
    params: {
      slug
    }
  });
}

/**
 * 获取主题详情
 */
export const findTopicDetailById = async (id: number) => {
  return await http.get("/sys/topic/detailBySlug.do", {
    params: {
      id
    }
  });
}
