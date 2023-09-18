import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import LoginForm from '../features/authentication/Login';
import Signup from '../features/authentication/Signup';
import { useState } from 'react';

const CommentModalWindow = ({ open, handleOpen, id, onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState('login');
  console.log(activeTab)

  // const handleTabChange = (value) => {
  //   setActiveTab(value);
  //   console.log(activeTab)
  // };

  const handleSignUpSuccess = () => {
    setActiveTab('login');
    console.log('second', activeTab);
    // handleOpen();
  }
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="flex justify-center font-poppins">
          You need to login or register to leave a comment!
        </DialogHeader>

        <DialogBody divider>

          <Tabs
            id="custom-animation"
            value={activeTab}
          >
            <TabsHeader>
              <Tab key="login" value="login">
                Login
              </Tab>
              <Tab key="register" value="register">
                Sign up
              </Tab>
            </TabsHeader>
            <TabsBody
              animate={{
                animate: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              <TabPanel key="login" value="login">
                <LoginForm route={`/blog-detail/${id}`} handleLoginSuccess={onLoginSuccess} />
              </TabPanel>
              <TabPanel key="register" value="register">
                <Signup onSignupSuccess={handleSignUpSuccess} />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span className="text-center font-poppins">Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

CommentModalWindow.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  onLoginSuccess: PropTypes.func.isRequired,
}
export default CommentModalWindow;
