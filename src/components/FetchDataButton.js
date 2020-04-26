import React from "react";
import { connect } from "react-redux";
import { initData } from "../actions";
import { Icon, Button } from "semantic-ui-react";

const FetchDataButton = ({ message, initData }) => {
  return (
    <Button
      primary
      size="huge"
      onClick={() => {
        initData();
      }}
    >
      {message}
      <Icon name="right arrow" />
    </Button>
  );
};

export default connect(null, { initData })(FetchDataButton);
