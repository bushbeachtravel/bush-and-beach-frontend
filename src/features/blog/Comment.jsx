import { Textarea, Button, IconButton } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import PropTypes from 'prop-types';
import { createCommentAsync } from "../../app/commentSlice";

const Comment = ({ postId }) => {
  const userId = JSON.parse(window.localStorage.getItem("userId"));
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch()
  const [commentText, setCommentText] = useState('');


  const handleInputChange = (event) => {
    setCommentText(event.target.value);
  }
  const handleSaveComment = (event) => {
    event.preventDefault();
    if (userId && loggedIn) {
      const formData = {
        post_id: postId,
        user_id: userId,
        text: commentText
      }
      dispatch(createCommentAsync(formData));
      setCommentText('')
    } else {
      alert('You need to login in before commenting')
    }
  }

  return (
    <div className="relative">
      <form onSubmit={handleSaveComment}>
        <Textarea
          variant="static"
          placeholder="Your Comment"
          rows={8} className="font-poppins"
          value={commentText}
          onChange={handleInputChange}
        />
        <div className="flex w-full justify-between py-1.5">
          <IconButton variant="text" color="blue-gray" size="sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </IconButton>
          <div className="flex gap-2">
            <Button size="sm" color="red" variant="text" className="rounded-md">
              Cancel
            </Button>
            <Button
              size="sm"
              className="rounded-md"
              type="submit"
            >
              Post Comment
            </Button>
          </div>
        </div>
      </form>
    </div >
  );
}
Comment.propTypes = {
  postId: PropTypes.number.isRequired,
}
export default Comment;