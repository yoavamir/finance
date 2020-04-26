import React, { useEffect } from "react";
import { Button, List, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { setActiveStep } from "../../../actions";
import _ from "lodash";

const FilesList = ({ files_list, setActiveStep }) => {
  useEffect(() => {
    setActiveStep(1);
  }, [setActiveStep]);

  const renderList = () => {
    return _.map(files_list, (file) => {
      return (
        <List.Item key={file} textAlign="center">
          <List.Content>
            <Button negative floated="right">
              Delete
            </Button>
          </List.Content>
          <List.Content>
            <h3>{file}</h3>
          </List.Content>
        </List.Item>
      );
    });
  };

  return (
    <div>
      <Header as="h2" textAlign="center">
        <Header.Content>Uploaded Files </Header.Content>
      </Header>
      <List celled>{renderList()}</List>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { files_list: state.data.files };
};

export default connect(mapStateToProps, { setActiveStep })(FilesList);
