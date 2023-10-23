import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import EditorJS from "@editorjs/editorjs";

import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

import { createBlogAsync } from "@state-management/blogSlice";
import { currentUserAsync } from "@state-management/authenticationSlice";
import { EDITOR_JS_TOOLS } from "../../../tools";
import NavigationMenu from "@home-page/NavigationMenu";
import Editor from "@blog/Editor";
import "@styling/Blog.css";

const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "",
        level: 1,
      },
    },
  ],
};

const BlogPage = () => {
  const [editor, setEditor] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const [data, setData] = useState(INITIAL_DATA);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(currentUserAsync());
  }, [dispatch, loggedIn])

  useEffect(() => {
    const newEditor = new EditorJS({
      holder: "editorjs-container",
      tools: EDITOR_JS_TOOLS,
    })

    setEditor(newEditor);
  }, []);

  const handleSave = async () => {
    if (editor) {
      const newData = await editor.save();
      const post = {
        body: {
          blocks: newData.blocks
        }
      }
      dispatch(createBlogAsync(post, user))
      navigate('/blog-list');
    }
  };
  return (
    <>
      <NavigationMenu />
      {loggedIn && (
        <div className="editor">
          <Editor
            data={data}
            onChange={setData}
            editorBlock="editorjs-container"
          />
          <Button
            type="submit"
            onClick={handleSave}
            className="savebtn font-poppins"
          >
            Save
          </Button>
        </div>
      )}

    </>
  )
}
export default BlogPage;


