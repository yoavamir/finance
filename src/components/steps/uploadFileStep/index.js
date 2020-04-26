import React from "react";
import FilesList from "./FilesList";
import { Link } from "react-router-dom";
import { Grid, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { initExpenseData } from "../../../actions";

const UploadFileStep = ({ initExpenseData }) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <FilesList></FilesList>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Link to="/upload_file" className="ui button primary">
            Add a new file
          </Link>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Link to="/income_form">
            <Button primary size="huge" onClick={() => initExpenseData()}>
              Save all files!
            </Button>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default connect(null, { initExpenseData })(UploadFileStep);
