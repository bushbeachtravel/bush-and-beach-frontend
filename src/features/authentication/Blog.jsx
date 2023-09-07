import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EditorJS from "@editorjs/editorjs";
import { useNavigate } from "react-router-dom";
import { createBlogAsync } from "../../app/blogSlice";
import { currentUserAsync } from "../../app/authenticationSlice";
import { EDITOR_JS_TOOLS } from "../../../tools";

const BlogPage = () => {
  const [editor, setEditor] = useState(null);
  const userId = JSON.parse(window.localStorage.getItem("userId"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(currentUserAsync());
  }, [])

  useEffect(() => {
    const editorInstance = new EditorJS({
      holder: 'editorjs',
      tools: EDITOR_JS_TOOLS,
    });
    setEditor(editorInstance);

    return () => {
      if (editorInstance) {
        editorInstance.destroy();
      }
    };
  }, []);

  const handleSave = async () => {
    if (editor) {
      const newData = await editor.save();

      const post = {
        body: {
          blocks: newData.blocks
        }
      }
      console.log("Slow pace", post, userId);
      dispatch(createBlogAsync(post, userId))
      navigate('/blog-list');
    }
  };
  return (
    <div>
      <div id="editorjs"></div>
      <button onClick={handleSave}>Save</button>
    </div>
  )
}
export default BlogPage;


