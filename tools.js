
import Header from "@editorjs/header";
import List from "@editorjs/list";
import LinkTool from "@editorjs/link";
import Delimiter from "@editorjs/delimiter";
import CheckList from "@editorjs/checklist";
import SimpleImage from "@editorjs/simple-image";

export const EDITOR_JS_TOOLS = {
  checkList: CheckList,
  list: List,
  header: {
    class: Header,
    config: {
      placeholder: 'Write your amzazing blog here!!'
    }
  },
  delimiter: Delimiter,
  linkTool: {
    class: LinkTool,
    config: {
      endpoint: ''
    }
  },
  image: SimpleImage,
};