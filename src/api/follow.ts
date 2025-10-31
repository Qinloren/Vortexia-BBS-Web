import http from '@/utils/http.ts'

/**
 * 查询关注列表
 * @param frid 用户id
 */
export const findFollows = async (frid?: number) => {
  const params: { followerId?: number, page: number, size: number} = {
    page: 1,
    size: 10
  }
  if (frid != null) {
    params.followerId = frid;
  }
  return await http.get("/sys/follow/search.do", {
    params
  });
}


/**
 * 查询关注详情
 * @param id 关注id
 */
export const findFollowDetail = async (id: number) => {
  return await http.get(`/sys/follow/detail.do`, {
    params: {
      id
    }
  });
}
