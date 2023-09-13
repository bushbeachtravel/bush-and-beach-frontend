import PropTypes from 'prop-types';
import { Typography, Button } from '@material-tailwind/react';

const ConfirmDeleteModal = ({handleCancelDelete, handleConfirmDelete}) => (
  <>
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <Typography variant="h5" className="font-poppins font-bold">
          Confirm Deletion
        </Typography>
        <Typography className="font-poppins mt-3">
          Are you sure you want to delete this comment?
        </Typography>
        <div className="flex justify-end mt-5">
          <Button
            color="red"
            onClick={handleConfirmDelete}
            className="mr-2"
          >
            Confirm
          </Button>
          <Button onClick={handleCancelDelete}  color="green">Cancel</Button>
        </div>
      </div>
    </div>
  </>
);
ConfirmDeleteModal.propTypes = {
  handleCancelDelete: PropTypes.func.isRequired,
  handleConfirmDelete: PropTypes.func.isRequired,
};
export default ConfirmDeleteModal;