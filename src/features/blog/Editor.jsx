import { memo, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
// import Editor from '@stfy/react-editor.js'
import PropTypes from 'prop-types';
import { EDITOR_JS_TOOLS } from "../../../tools";

const Editor = ({ data, onChange, editorBlock }) => {
  const ref = useRef(EditorJS);
  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: editorBlock,
        tools: EDITOR_JS_TOOLS,
        data: data,
        async onChange(api) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);
  return <div id={editorBlock} />;
};

Editor.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.object.isRequired,
  editorBlock: PropTypes.string.isRequired,
}
export default memo(Editor);


 