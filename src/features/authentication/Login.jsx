
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
          <Typography
            color="gray"
            className="mt-1 font-normal font-poppins text-center"
            variant="small"
          >
            Enter your details to log in.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmitForm}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Input
                type="password"
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <Button className="mt-6" fullWidth type="submit">
              Signin
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don&apos;t an account?{" "}
              <Link to="/signup">
                Sign Up
              </Link>
            </Typography>
          </form>
        </Card>
      </section>
    </>
  );
}

export default LoginForm;