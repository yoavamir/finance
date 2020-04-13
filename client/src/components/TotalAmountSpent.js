import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTotalAmount } from "../actions";
import BarChart from "react-bar-chart";

const TotalAmountSpent = (props) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    props.getTotalAmount(props.filename);
  };

  const BuildDataForBarChart = () => {
    let newData = [];
    props.totalAmount[props.filename].dateAndAmount.map((date) => {
      newData.push({ text: date[0], value: date[1] });
    });
    return newData;
  };

  const renderAmount = () => {
    if (!props.totalAmount[props.filename]) {
      return <div>Loading..</div>;
    }
    return (
      <div className="ui divider">
        <div>spent {props.totalAmount[props.filename].spent} NIS</div>
        <div className="ui celled list"></div>
      </div>
    );
  };

  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  const renderBarGraph = () => {
    if (!props.totalAmount[props.filename]) {
      return <div></div>;
    }
    return (
      <div>
        <BarChart
          ylabel="amount spent"
          height={500}
          data={BuildDataForBarChart()}
          width={1000}
          margin={margin}
        />
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
      <br></br>
      {renderBarGraph()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalAmount: state.totalAmount,
    filename: state.file.file_name,
  };
};

export default connect(mapStateToProps, { getTotalAmount })(TotalAmountSpent);
