import React from "react";
import { Editor } from "@tinymce/tinymce-react";
// import tinymce from "tinymce";

const TinyMce = () => {
  const handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };

  return (
    <Editor
      init={{
        height: 200,
        body_class: "tiny-mce",
        width: "100%",
        textColor: "fff000",
        content_css: "../helpAndSupport.css",
        content_style:
          "body{background :#000 ; color : #ffffff} ,element.style{background : #000}",
        // content_style:
        //   ".tox .tox-collection--list .tox-collection__group:first-child{background : #000}",
        menubar: false,

        plugins: [
          "advlist autolink lists link image",
          "charmap print preview anchor help",
          "searchreplace visualblocks code",
          "insertdatetime media table paste wordcount",
          "code",
          "Image",
          "media",
        ],
        toolbar:
          "undo redo | formatselect | bold italic | alignleft aligncenter alignright |bullist numlist outdent indent | help |  code |  link |  media |image ",
      }}
      onChange={handleEditorChange}
    />
  );
};
// tinymce.init({
//   selector: "#mytextarea",
// });
// const TinyMce = () => {
//   return <textarea id="mytextarea">Hello</textarea>;
// };

export default TinyMce;
