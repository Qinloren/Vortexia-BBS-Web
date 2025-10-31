export interface RecommendFollowType {
  id: number;
  name: string;
  avatar: string;
  description: string;
  isFollow: boolean;
}

export interface HotTopicType {
  id: number;
  name: string;
}

export interface UserType {
  id: number;
  username: string;
  nickname: string;
  avatar: string;
  signature: string;
}

export interface PostType {
  id: number;
  title: string;
  content: string;
  introduction: string;
  author: UserType;
  createTime: number;
  updateTime: number;
  classify: string;
  likeSize: number;
  commentSize: number;
  classifies: string[];
}

export interface StaticsType {
  id: number;
  title: string;
  number: number;
  color: string;
}

export interface ClassifyType {
  id: number,
  name: string,
  icon: string,
  postSize: number,
  status: number,
  createTime: number,
}

export interface TopicType {
  id: number;
  title: string;
  icon: string;
  avatar: string;
  classify: ClassifyType;
  postSize: number;
  memberSize: number;
  onlineMemberSize: number;
  latestPushTime: number;
  introduction: string;
}


export interface MenuType {
  id: number;
  name: string;
  title: string;
  path: string;
}
