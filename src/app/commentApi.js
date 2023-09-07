import { axiosInstance } from "./authenticationApi";

export const createComment = async (data) => {
  const { post_id, user_id, text } = data
  return axiosInstance.post(
    `api/v1/users/${user_id}/posts/${post_id}/comments`, {
      comment: {text}
    }
  );
};

export const fetchAllComments = async (data) => {
  const { user_id, post_id } = data;
  return axiosInstance.get(`api/v1/users/${user_id}/posts/${post_id}/comments`)
}
export const deleteComment = async (data) => {
  const { user_id, post_id, comment_id } = data
  return axiosInstance.delete(`api/v1/users/${user_id}/posts/${post_id}/comments/${comment_id}`)
}