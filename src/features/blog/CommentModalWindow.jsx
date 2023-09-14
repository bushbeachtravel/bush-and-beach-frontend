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
import LoginForm from '../authentication/Login';
import Signup from '../authentication/Signup';

const CommentModalWindow = ({ open, handleOpen, id, onLoginSuccess }) => {
  const pages = [
    {
      label: "Login",
      value: "login",
      desc: <LoginForm route={`/blog-detail/${id}`} handleLoginSuccess={onLoginSuccess} />,
    },
    {
      label: "Sign up",
      value: "register",
      desc: <Signup />,
    }
  ]
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

          <Tabs id="custom-animation" value="login">
            <TabsHeader>
              {pages.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                animate: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {pages.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
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
