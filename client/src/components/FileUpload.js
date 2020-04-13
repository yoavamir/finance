import React, { useState } from "react";
import { connect } from "react-redux";
import { uploadFile } from "../actions";
import { Link } from "react-router-dom";

const FileUpload = (props) => {
  const [file, setFile] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const sendToServer = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    props.uploadFile(formData);
  };

  return (
    <div>
      <i className="large middle icon upload"></i>
      <div className="ui input">
        <input type="file" className="icon upload" onChange={onChange} />
        <button className="ui button primary" onClick={sendToServer}>
          Upload file
        </button>
      </div>
    </div>
  );
};

export default connect(null, { uploadFile })(FileUpload);
