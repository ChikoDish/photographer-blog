import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import Tags from "./Tags";
import { add } from "../utils/apis";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const saveBlog = (e) => {
    e.preventDefault();
    axios
      .post(add, {
        title,
        body,
        tags: ["javascript"],
        userId: "60276e11e9f7ed4048150edc",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleEditorChange = (content, editor) => {
    setBody(content);
  };

  return (
    <div className="add">
      <h1>Add Blog</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      ></input>
      {/* <Tags /> */}
      <Editor
        className="blog-editor"
        apiKey="lz670kty0rwllutn8ee24oc7t064sqxl948wrg7m1lb132c4"
        initialValue=""
        init={{
          height: 300,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify |bullist numlist outdent indent | removeformat | help",
        }}
        onEditorChange={handleEditorChange}
      />
      <button className="button" onClick={saveBlog}>
        Add
      </button>
    </div>
  );
};

export default AddBlog;
