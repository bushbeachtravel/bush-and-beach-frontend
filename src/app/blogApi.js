import { axiosInstance } from "./authenticationApi";


// const userId = JSON.parse(window.localStorage.getItem("userId"));

export const createBlogPost = async ({data, userId}) => {
  return axiosInstance.post(`/api/v1/users/${userId}/posts`, { post: data });
};

export const fetchBlogPost = async (userId) => {
  return axiosInstance.get(`/api/v1/users/${userId}/posts`)
};

