import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTotalAmount } from "../../actions";

const TotalAmountSpent = ({ fileActions, filename, getTotalAmount }) => {
  useEffect(() => {
    if (filename) {
      getTotalAmount(filename);
    }
  }, [filename, getTotalAmount]);

  const renderAmount = () => {
    if (!fileActions[filename]) {
      return <div></div>;
    }
    return (
      <div>Spent total of {Math.round(fileActions[filename].spent)} ₪</div>
    );
  };

  return <div>{renderAmount()}</div>;
};

const mapStateToProps = (state) => {
  return {
    fileActions: state.fileActions,
    filename: state.fileActions.currentFile,
  };
};

export default connect(mapStateToProps, { getTotalAmount })(TotalAmountSpent);
