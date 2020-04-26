import React, { useState } from "react";
import { connect } from "react-redux";
import { uploadFile } from "../../../actions";
import { Button, Form, Select } from "semantic-ui-react";

const FileUpload = ({ uploadFile }) => {
  const [file, setFile] = useState("");
  const [fileType, setFileType] = useState("");

  const onFileChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const onTypeChange = (e, data) => {
    e.preventDefault();
    console.log(data.value);
    setFileType(data.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    formData.append("type", fileType);
    uploadFile(formData);
  };

  const fileTypeOptions = () => {
    return [
      { key: "a", value: "Max", text: "Max" },
      { key: "b", value: "Max", text: "Cal" },
      { key: "c", value: "Max", text: "General" },
    ];
  };

  return (
    <Form>
      <Form.Field>
        <label>Choose file type</label>
        <Select
          placeholder="Select your file type"
          options={fileTypeOptions()}
          onChange={onTypeChange}
        ></Select>
      </Form.Field>

      <Form.Field>
        <input placeholder="Upload file" type="file" onChange={onFileChange} />
      </Form.Field>

      <Button primary type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default connect(null, { uploadFile })(FileUpload);
