import React from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import { getLabelsAndValuesForChart } from "./utils";

const renderDataForBar = ({ labels, values }) => {
  return {
    labels: labels,
    datasets: [
      {
        label: "Total amount spent",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: values,
      },
    ],
  };
};

const AmountSpentBarChart = (props) => {
  if (!props.fileActions[props.filename]) {
    return <div></div>;
  }

  const barData = getLabelsAndValuesForChart(
    props.fileActions[props.filename].dateAndAmount
  );

  return (
    <div>
      <h2>Amount spent daily</h2>
      <Bar
        data={renderDataForBar(barData)}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fileActions: state.fileActions,
    filename: state.fileActions.currentFile,
  };
};

export default connect(mapStateToProps)(AmountSpentBarChart);
