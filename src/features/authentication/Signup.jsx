import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUserAsync } from "../../app/authenticationSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(registerUserAsync(formData))
  }
  return (
    <>
      <section className="flex justify-center">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray" className="text-center font-poppins">
            Sign Up
          </Typography>
          <Typography
            color="gray"
            className="mt-1 font-normal text-center font-poppins"
            variant="small"
          >
            Enter your details to register.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmitForm}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                size="lg"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Input
                type="password"
                size="lg"
                name="password"
                label="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <Input
                type="password"
                size="lg"
                name="password_confirmation"
                label="Confirm passowrd"
                value={formData.password_confirmation}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button className="mt-6 font-poppins" fullWidth type="submit">
              Register
            </Button>
          </form>
        </Card>
      </section>
    </>

  );
}
export default Signup;