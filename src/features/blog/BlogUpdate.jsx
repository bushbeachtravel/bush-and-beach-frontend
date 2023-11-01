import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import EditorJS from "@editorjs/editorjs";

import { useNavigate, useParams } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";

import { updateBlogPostAsync, fetchBlogPostAsync } from "@state-management/blogSlice";
import { currentUserAsync } from "@state-management/authenticationSlice";
import { EDITOR_JS_TOOLS } from "../../../tools";
import NavigationMenu from "@home-page/NavigationMenu";
import Editor from "./Editor";
import "@styling/Blog.css";


const UpdateBlogPost = () => {
  const [editor, setEditor] = useState(null);
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const { id } = useParams();
  const post = useSelector((state) => state.post.posts.find((blog) => blog.id === parseInt(id, 10)));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(currentUserAsync());
  }, [dispatch, loggedIn]);

  useEffect(() => {
    dispatch(fetchBlogPostAsync(user))
  }, [dispatch, user]);

  useEffect(() => {
    const editorInstance = new EditorJS({
      holder: "editorjs-container",
      tools: EDITOR_JS_TOOLS,
      data: post ? post.body : null,
    });

    setEditor(editorInstance);
  }, [post]);

  const handleBlogUpdate = async () => {
    if (editor) {
      const newData = await editor.save();
      const post = {
        body: {
          blocks: newData.blocks
        }
      }
      dispatch(updateBlogPostAsync({post, user, id}))
      navigate(`/blog-detail/${id}`);
    }
  };

  return (
    <>
      <NavigationMenu />
      {loggedIn || user.admin ? (
        <div className="editor">
        <Editor
          data={post ? post.body : null}
          onChange={() => { }}
          editorBlock="editorjs-container"
        />
        <Button
          type="submit"
          onClick={handleBlogUpdate}
          className="updatebtn"
        >
          Update
        </Button>
      </div>
      ) : (
        <div className="mt-20 flex justify-center">
          <Typography variant="paragraph" className="font-poppins">
            You need to log in before this operation
          </Typography>
        </div>
      )}
      
    </>
  )
}
export default UpdateBlogPost;