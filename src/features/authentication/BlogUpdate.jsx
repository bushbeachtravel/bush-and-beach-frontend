import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import EditorJS from "@editorjs/editorjs";

import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";

import { updateBlogPostAsync, fetchBlogPostAsync } from "../../app/blogSlice";
import { currentUserAsync } from "../../app/authenticationSlice";
import { EDITOR_JS_TOOLS } from "../../../tools";
import NavigationMenu from "../home-page/NavigationMenu";
import Editor from "./Editor";
import "../../assets/styles/Blog.css";


const UpdateBlogPost = () => {
  const [editor, setEditor] = useState(null);
  const userId = JSON.parse(window.localStorage.getItem("userId"));
  const { id } = useParams();
  const post = useSelector((state) => state.post.posts.find((blog) => blog.id === parseInt(id, 10)));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(currentUserAsync());
  }, []);

  useEffect(() => {
    dispatch(fetchBlogPostAsync(userId))
  }, [dispatch, userId]);

  useEffect(() => {
    const editorInstance = new EditorJS({
      holder: "editorjs-container",
      tools: EDITOR_JS_TOOLS,
      data: post ? post.body : null,
    });

    setEditor(editorInstance);
  }, []);

  const handleBlogUpdate = async () => {
    if (editor) {
      const newData = await editor.save();
      const post = {
        body: {
          blocks: newData.blocks
        }
      }
      dispatch(updateBlogPostAsync({post, userId, id}))
      navigate(`/blog-detail/${id}`);
    }
  };

  return (
    <>
      <NavigationMenu />
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
    </>
  )
}
export default UpdateBlogPost;