import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { logoutUserAsync } from "@state-management/authenticationSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = window.localStorage.getItem('authToken');
    if (authToken) {
      try {
        const decodedToken = jwtDecode(authToken);
        const currentTimestamp = Math.floor(Date.now() / 1000);

        if (decodedToken.exp < currentTimestamp) {
          window.localStorage.clear();
          dispatch(logoutUserAsync());
          navigate('/admin')
        }
      } catch (error) {
        console.log('Error decoding token', error);
      }
    }
  }, [dispatch]);
}
export default Logout;
