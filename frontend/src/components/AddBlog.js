import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const saveBlog = () => {};
  const handleEditorChange = (content, editor) => {
    setBody(content);
  };

  return (
    <div className="add">
      <form onSubmit={saveBlog}>
        <input
          type="text"
          onChange={(e) => e.target.value}
          placeholder="Title"
        ></input>
        <Editor
          apiKey="lz670kty0rwllutn8ee24oc7t064sqxl948wrg7m1lb132c4"
          initialValue=""
          init={{
            height: 500,
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
      </form>
    </div>
  );
};

export default AddBlog;
