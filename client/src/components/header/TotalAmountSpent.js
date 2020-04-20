import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTotalAmount } from "../../actions";

const TotalAmountSpent = ({ spent, getTotalAmount }) => {
  useEffect(() => {
    getTotalAmount();
  }, [getTotalAmount]);

  const renderAmount = () => {
    if (!spent) {
      return <div></div>;
    }
    return <div>Spent total of {Math.round(spent)} ₪</div>;
  };

  return <div>{renderAmount()}</div>;
};

const mapStateToProps = (state) => {
  return {
    spent: state.fileActions.spent,
  };
};

export default connect(mapStateToProps, { getTotalAmount })(TotalAmountSpent);
