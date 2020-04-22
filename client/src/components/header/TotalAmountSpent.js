import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTotalAmount } from "../../actions";

const TotalAmountSpent = ({ spent, getTotalAmount, dataFetched }) => {
  useEffect(() => {
    getTotalAmount();
  }, [getTotalAmount]);

  const renderAmount = () => {
    if (!dataFetched) {
      return <div></div>;
    }
    return <div>Spent total of {Math.round(spent)} ₪</div>;
  };

  return <div>{renderAmount()}</div>;
};

const mapStateToProps = (state) => {
  return {
    spent: state.data.spent,
    months: state.data.months,
    dataFetched: state.data.dataFetched,
  };
};

export default connect(mapStateToProps, { getTotalAmount })(TotalAmountSpent);
