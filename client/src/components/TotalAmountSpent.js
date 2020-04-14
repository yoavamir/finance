import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTotalAmount } from "../actions";

const TotalAmountSpent = (props) => {
  useEffect(() => {
    if (props.filename) {
      props.getTotalAmount(props.filename);
    }
  }, [props.filename]);

  const handleOnClick = (e) => {
    e.preventDefault();
    props.getTotalAmount(props.filename);
  };

  const renderAmount = () => {
    if (!props.fileActions[props.filename]) {
      return <div></div>;
    }
    return (
      <div>
        Spent total of {Math.round(props.fileActions[props.filename].spent)} NIS
      </div>
      // <div className="ui divider">
      //   <div>
      //     spent total of {Math.round(props.fileActions[props.filename].spent)}
      //     NIS
      //   </div>
      //   <div className="ui celled list"></div>
      // </div>
    );
  };

  return (
    <div>
      {/* <button
        className="ui button primary"
        variant="contained"
        color="primary"
        onClick={handleOnClick}
      >
        Get Total Amount
      </button> */}
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
