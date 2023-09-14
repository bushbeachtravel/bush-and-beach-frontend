
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { loginUserAsync } from "../../app/authenticationSlice";

const LoginForm = ({ route, handleLoginSuccess }) => {
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
    handleLoginSuccess();
    navigate(`/${route}`)
  }
  return (
    <>
      <section className="flex justify-center">
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
            <Button className="mt-6 font-poppins" fullWidth type="submit">
              Signin
            </Button>
          </form>
        </Card>
      </section>
    </>
  );
}
LoginForm.propTypes = {
  route: PropTypes.string.isRequired,
  handleLoginSuccess: PropTypes.func.isRequired,
}
export default LoginForm;