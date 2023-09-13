import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import EditorJS from "@editorjs/editorjs";

import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

import { createBlogAsync } from "../../app/blogSlice";
import { currentUserAsync } from "../../app/authenticationSlice";
import { EDITOR_JS_TOOLS } from "../../../tools";
import NavigationMenu from "../home-page/NavigationMenu";
import Editor from "./Editor";
import "../../assets/styles/Blog.css";

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
  const userId = JSON.parse(window.localStorage.getItem("userId"));
  const [data, setData] = useState(INITIAL_DATA);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(currentUserAsync());
  }, [])

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
      dispatch(createBlogAsync(post, userId))
      navigate('/blog-list');
    }
  };
  return (
    <>
      <NavigationMenu />
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
    </>
  )
}
export default BlogPage;


