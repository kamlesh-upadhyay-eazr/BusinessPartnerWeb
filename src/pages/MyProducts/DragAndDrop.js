import React from "react";
import { useDropzone } from "react-dropzone";

function DragAndDrop(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to Choose files</p>
      </div>
      <aside className="my-4">
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default DragAndDrop;
