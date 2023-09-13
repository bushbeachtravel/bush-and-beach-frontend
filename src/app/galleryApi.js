import { axiosInstance } from "./authenticationApi";

const userId = JSON.parse(window.localStorage.getItem("userId"));
export const uploadPhoto = (data) => {
  return axiosInstance.post(`api/v1/users/${userId}/photos/`, data);
}

export const fetchPhotos = () => {
  return axiosInstance.get('api/v1/photos/')
}
