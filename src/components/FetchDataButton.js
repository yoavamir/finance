import React from "react";
import { connect } from "react-redux";
import { initData } from "../actions";
import { Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const FetchDataButton = ({ message, initData }) => {
  return (
    <Link to="/home">
      <Button
        primary
        size="huge"
        // onClick={() => {
        //   initData();
        // }}
      >
        {message}
        <Icon name="right arrow" />
      </Button>
    </Link>
  );
};

export default connect(null, { initData })(FetchDataButton);
