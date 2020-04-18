import React from "react";
import { connect } from "react-redux";
import { initData } from "../actions";

const FetchDataButton = (props) => {
  console.log(props);

  return (
    <div
      className="ui primary button"
      onClick={() => {
        props.initData();
      }}
    >
      Click To Fetch Data
    </div>
  );
};

export default connect(null, { initData })(FetchDataButton);
