import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFileTimeRange } from "../../actions";

const TimeRange = ({ filename, fileActions, getFileTimeRange }) => {
  useEffect(() => {
    if (filename) {
      getFileTimeRange(filename);
    }
  }, [filename, getFileTimeRange]);

  if (!fileActions[filename] || !fileActions[filename].startDate) {
    return <div></div>;
  }
  return (
    <div className="ui sub header">
      <div>Start Date: {fileActions[filename].startDate}</div>
      <div>End date: {fileActions[filename].endDate}</div>
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
