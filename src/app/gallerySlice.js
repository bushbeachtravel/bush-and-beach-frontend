import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uploadPhoto, fetchPhotos } from "./galleryApi";

export const uploadPhotoAsync = createAsyncThunk(
  'photo/upoloadPhoto',
  async (data) => {
    const response = await uploadPhoto(data);
    return response.data;
  }
);

export const fetchPhotosAsync = createAsyncThunk(
  'photos/fetchAllPhotos',
  async () => {
    const response = await fetchPhotos();
    return response.data;
  }
);

const gallerySlice = createSlice({
  name: 'photos',
  initialState: {
    photos: [],
    uploadStatus: 'idle',
    fetchStatus: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Uploading photos
      .addCase(uploadPhotoAsync.pending, (state) => {
        state.uploadStatus = 'loading';
      })
      .addCase(uploadPhotoAsync.fulfilled, (state, action) => ({
        ...state,
        photos: action.payload,
        uploadStatus: 'success',
      })
      )
      .addCase(uploadPhotoAsync.rejected, (state, action) => {
        state.uploadStatus = 'rejected';
        state.error = action.error;
      })

      // Fetching photos
      .addCase(fetchPhotosAsync.pending, (state) => {
        state.fetchStatus = 'loading';
      })
      .addCase(fetchPhotosAsync.fulfilled, (state, action) => ({
        ...state,
        photos: action.payload,
        fetchStatus: 'success',
      }))
      .addCase(fetchPhotosAsync.rejected, (state, action) => {
        state.fetchStatus = 'rejected';
        state.error = action.error;
      })
  }
})
export default gallerySlice.reducer;