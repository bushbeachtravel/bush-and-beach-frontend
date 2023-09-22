import { axiosInstance } from "./authenticationApi";

export const createBlogPost = async ({data, user}) => {
  return axiosInstance.post(`/api/v1/users/${user.id}/posts`, { post: data });
};

export const fetchBlogPost = async () => {
  return axiosInstance.get('/api/v1/posts');
};

export const updateBlogPost = async (data) => {
  const { post, user, id } = data; 
  return axiosInstance.patch(`/api/v1/users/${user.id}/posts/${id}`, { post: post } )
}

export const deleteBlogPost = async (data) => {
  const { user_id, post_id } = data;
  return axiosInstance.delete(`/api/v1/users/${user_id}/posts/${post_id}/`)
}