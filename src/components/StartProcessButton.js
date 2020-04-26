import React from "react";
import { connect } from "react-redux";
import { setRegirsritaion } from "../actions";
import { Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const StartProcessButton = (props) => {
  return (
    <Link to="/files">
      <Button
        primary
        size="huge"
        onClick={() => {
          props.setRegirsritaion();
        }}
      >
        Get Started with real data
        <Icon name="right arrow" />
      </Button>
    </Link>
    // <div
    //   className="ui primary button huge"
    //   onClick={() => {
    //     props.setRegirsritaion();
    //   }}
    // >
    //   Get Started
    //   <Icon name="right arrow" />
    // </div>
  );
};

export default connect(null, { setRegirsritaion })(StartProcessButton);
