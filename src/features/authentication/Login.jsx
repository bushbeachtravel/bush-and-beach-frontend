
import {
  Card,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Button, Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserAsync } from "../../app/authenticationSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(loginUserAsync(formData));
    navigate('/admin')
  }
  return (
    <>
      <section className="flex justify-center mt-10">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray" className="font-poppins text-center">
            Login
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmitForm}
          >
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
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password2"
                  value="Your password"
                  className="font-poppins"
                />
              </div>
              <TextInput
                id="password2"
                className="font-poppins"
                required
                shadow
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <Button className="mt-6 font-poppins" type="submit">
                Signin
              </Button>
              <Typography color="gray" className="mt-4 font-normal">
                Don&apos;t an account?{" "}
                <Link to="/signup">
                  Sign Up
                </Link>
              </Typography>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}

export default LoginForm;