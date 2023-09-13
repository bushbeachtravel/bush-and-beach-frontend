'use client';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { FileInput, Label } from 'flowbite-react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useForm } from 'react-hook-form';
import { uploadPhotoAsync } from '../../app/gallerySlice';
import NavigationMenu from '../home-page/NavigationMenu';
import { Link } from 'react-router-dom';


const UploadPhoto = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.auth.loggedIn);
  const userId = JSON.parse(window.localStorage.getItem("userId"));

  const { register, handleSubmit, reset } = useForm();

  const sendDataToApi = (data) => {
    const formData = new FormData()
    const photo = { ...data, image: data.image[0] }
    formData.append('title', photo.title)
    formData.append('image', photo.image)
    dispatch(uploadPhotoAsync(formData))
    reset();
    navigate('/gallery');
  } 

  return (
    <>
      <NavigationMenu />
      {userId && isLogged ? (
        <section className="flex justify-center mt-20">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Upload a photo
            </Typography>
            <form
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
              onSubmit={handleSubmit(sendDataToApi)}
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  size="lg"
                  label="Image Caption"
                  name="title"
                  {...register('title')}
                  required
                />
                <div
                  className="max-w-md"
                  id="fileUpload"
                >
                  <div className="mb-2 block">
                    <Label
                      htmlFor="file"
                      value="Upload Image"
                    />
                  </div>
                  <FileInput
                    id="file"
                    name="image"
                    {...register('image')}
                    required
                    accept="image/*"
                  />
                </div>
              </div>
              <Button className="mt-6" fullWidth type="submit">
                Save
              </Button>
            </form>
          </Card>
        </section>
      ) : (
        <div className='flex flex-col items-center mt-20'>
          <div>
            <Typography variant="lead" className="font-poppins text-center mt-20">
              You are not authorized!!
            </Typography>
          </div>
          <div>
            <Button className="font-poppins">
              <Link to="/">Home</Link>
            </Button>
          </div>
        </div>
      )}

    </>
  );
}
export default UploadPhoto;
