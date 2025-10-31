import http from '@/utils/http.ts'

/**
 * 查询帖子
 * @param page 页码
 * @param size 每页数量
 * @param topicId 分类Id
 */
export const findPosts = async (page: number, size: number, topicId?: number) => {
  const params: { topicId?: number, page: number, size: number } = {
    page: page,
    size: size
  }
  if (topicId != null) {
    params.topicId = topicId;
  }
  return await http.get("/api/sys/post/search.do", {
    params
  });
}

/**
 * 查询帖子详情
 * @param id 帖子Id
 */
export const findPostById = async (id: number) => {
  return await http.get('/api/sys/post/detailById.do', {
    params: {
      id
    }
  });
}


/**
 * 查询帖子详情
 * @param title 帖子标题
 */
export const findPostByTitle = async (title: string) => {
  return await http.get('/sys/post/detailByTitle.do', {
    params: {
      title
    }
  });
}
