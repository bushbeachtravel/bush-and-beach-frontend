import { axiosInstance } from "./authenticationApi";

const user = JSON.parse(window.localStorage.getItem("user"));
export const uploadPhoto = (data) => {
  return axiosInstance.post(`api/v1/users/${user.id}/photos/`, data);
}

export const fetchPhotos = () => {
  return axiosInstance.get('api/v1/photos/')
}
