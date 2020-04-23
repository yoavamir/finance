import React from "react";
import { connect } from "react-redux";
import { initData } from "../actions";
import { Icon } from "semantic-ui-react";

const FetchDataButton = (props) => {
  return (
    <div
      className="ui primary button huge"
      onClick={() => {
        props.initData();
      }}
    >
      Get Started
      <Icon name="right arrow" />
    </div>
  );
};

export default connect(null, { initData })(FetchDataButton);
