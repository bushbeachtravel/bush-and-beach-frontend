import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { currentUserAsync, logoutUserAsync } from "@state-management/authenticationSlice";
import LoginForm from "@authentication/Login";
import AdminNavBar from "@authentication/AdminNav";
import Footer from "@home-page/Footer";


const AdminDashBoard = () => {
  const [open, setOpen] = React.useState(0);
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(currentUserAsync())
  }, [dispatch, loggedIn])

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleLogout = () => {
    dispatch(logoutUserAsync());
    navigate('/admin');
  }

  return (
    <>
      <AdminNavBar />
      {loggedIn && user.admin ? (
        <>
          <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
              <Typography variant="h5" color="blue-gray" className="font-poppins">
                Actions
              </Typography>
            </div>
            <List>
              <Accordion
                open={open === 1}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 1}>
                  <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                    <ListItemPrefix>
                      <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-auto font-normal font-poppins">
                      {user.name}
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      <Link to="/blog" className="font-poppins">Create Blog Post</Link>
                    </ListItem>
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      <Link to="/photo-upload" className="font-poppins">Upload Photos To Gallery</Link>
                      
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <ListItem className="font-poppins">
                <ListItemPrefix>
                  <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
              </ListItem>
              <ListItem className="font-poppins" onClick={handleLogout} >
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5"/>
                </ListItemPrefix>
                Log Out
              </ListItem>
            </List>
          </Card>
        </>
      ) : (
        <LoginForm />
      )}
      <Footer />
    </>
  );
}
export default AdminDashBoard;

