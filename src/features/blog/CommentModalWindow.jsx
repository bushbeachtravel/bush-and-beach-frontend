import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import LoginForm from '../authentication/Login';

const CommentModalWindow = ({ open, handleOpen, id, onLoginSuccess }) => {
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
        <DialogHeader>
          <Typography variant="lead" className="text-center font-poppins font-bold">
            Login to leave a comment
          </Typography>
        </DialogHeader>
        <DialogBody divider>
          <LoginForm
            route={`/blog-detail/${id}`}
            handleLoginSuccess={onLoginSuccess}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
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
