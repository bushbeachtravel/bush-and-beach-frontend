import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserAsync } from "../../app/authenticationSlice";
import AdminNavBar from "./AdminNav";

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
    dispatch(loginUserAsync(formData))
      .then(() => {
        setFormData({
          email: '',
          password: '',
        })
        navigate('/admin')
      })
      .catch((error) => {
        console.log('Login failed', error)
      })
  }
  return (
    <>
    <AdminNavBar />
      <section>
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Login
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to log in.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmitForm}>
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Input
                type="password"
                size="lg"
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  Remember me
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
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