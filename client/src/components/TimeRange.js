import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFileTimeRange } from "../actions";

const TimeRange = (props) => {
  useEffect(() => {
    if (props.filename) {
      props.getFileTimeRange(props.filename);
    }
  }, [props.filename]);

  if (
    !props.fileActions[props.filename] ||
    !props.fileActions[props.filename].startDate
  ) {
    return <div></div>;
  }

  return (
    <div>
      <div>Start Date: {props.fileActions[props.filename].startDate}</div>
      <div>End date: {props.fileActions[props.filename].endDate}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filename: state.fileActions.currentFile,
    fileActions: state.fileActions,
  };
};

export default connect(mapStateToProps, { getFileTimeRange })(TimeRange);
