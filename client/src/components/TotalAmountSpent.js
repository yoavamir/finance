import React from "react";
import { connect } from "react-redux";
import { getTotalAmount } from "../actions";

const TotalAmountSpent = (props) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    props.getTotalAmount(props.filename);
  };

  const renderAmount = () => {
    if (!props.fileActions[props.filename]) {
      return <div>Loading..</div>;
    }
    return (
      <div className="ui divider">
        <div>
          spent {Math.round(props.fileActions[props.filename].spent)} NIS
        </div>
        <div className="ui celled list"></div>
      </div>
    );
  };

  return (
    <div>
      <button
        className="ui button primary"
        variant="contained"
        color="primary"
        onClick={handleOnClick}
      >
        Get Total Amount
      </button>
      {renderAmount()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fileActions: state.fileActions,
    filename: state.fileActions.currentFile,
  };
};

export default connect(mapStateToProps, { getTotalAmount })(TotalAmountSpent);
