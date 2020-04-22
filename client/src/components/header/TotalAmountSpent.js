import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTotalAmount } from "../../actions";

const TotalAmountSpent = ({ spent, getTotalAmount, months }) => {
  useEffect(() => {
    getTotalAmount();
  }, [getTotalAmount]);

  const renderAmount = () => {
    if (months.length === 0) {
      return <div></div>;
    }
    return <div>Spent total of {Math.round(spent)} ₪</div>;
  };

  return <div>{renderAmount()}</div>;
};

const mapStateToProps = (state) => {
  return {
    spent: state.fileActions.spent,
    months: state.fileActions.months,
  };
};

export default connect(mapStateToProps, { getTotalAmount })(TotalAmountSpent);
