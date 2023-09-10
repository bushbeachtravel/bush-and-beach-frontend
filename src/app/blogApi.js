import { axiosInstance } from "./authenticationApi";

export const createBlogPost = async ({data, userId}) => {
  return axiosInstance.post(`/api/v1/users/${userId}/posts`, { post: data });
};

export const fetchBlogPost = async (userId) => {
  return axiosInstance.get(`/api/v1/users/${userId}/posts`)
};

export const updateBlogPost = async (data) => {
  const { post, userId, id } = data; 
  return axiosInstance.patch(`/api/v1/users/${userId}/posts/${id}`, { post: post } )
}

export const deleteBlogPost = async (data) => {
  const { user_id, post_id } = data;
  return axiosInstance.delete(`/api/v1/users/${user_id}/posts/${post_id}/`)
}