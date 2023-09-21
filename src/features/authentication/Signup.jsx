import {
  Card,
  Typography,
} from "@material-tailwind/react";
import { Button,Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { registerUserAsync } from "../../app/authenticationSlice";


const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const handleSubmitForm = (data) => {
    dispatch(registerUserAsync(data))
    navigate('/login');
    reset();
  }
  return (
    <>
      <section className="flex justify-center mt-10">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray" className="text-center font-poppins">
            Sign Up
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit(handleSubmitForm)}
          >
            <div>
              <div className="mb-2 block w-full">
                <Label
                  htmlFor="base"
                  value="Full Name"
                  className="font-poppins"
                />
              </div>
              <TextInput
                id="base"
                sizing="md"
                type="text"
                required
                className="font-poppins"
                {...register("name", { required: true, maxLength: 100})}
                name="name"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email2"
                  value="Your email"
                  className="font-poppins"
                />
              </div>
              <TextInput
                id="email2"
                placeholder="name@flowbite.com"
                className="font-poppins"
                required
                shadow
                type="email"
                {...register("email", { required: true})}
                name="email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  value="Your password"
                  className="font-poppins"
                />
              </div>
              <TextInput
                id="password"
                className="font-poppins"
                required
                shadow
                type="password"
                {...register("password", { required: true})}
                name="password"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="repeat-password"
                  value="Repeat password"
                  className="font-poppins"
                />
              </div>
              <TextInput
                id="repeat-password"
                className="font-poppins"
                required
                shadow
                type="password"
                {...register("password_confirmation", { required: true})}
                name="password_confirmation"
              />
            </div>
            <Button className="mt-6 font-poppins" type="submit">
              Register
            </Button>
            <Typography color="gray" className="mt-4 font-normal">
              Already have an account?{" "}
              <Link to="/login">
                Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </section>
    </>

  );
}
export default Signup;
