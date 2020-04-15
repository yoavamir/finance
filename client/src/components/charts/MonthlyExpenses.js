import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { getLabelsAndValuesForChart } from "./utils";
import { getMonthlyExpense } from "../../actions";

const renderDataForChart = ({ labels, values }) => {
  return {
    labels: labels,
    datasets: [
      {
        label: "Monthly expenses",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: values,
      },
    ],
  };
};

const MonthlyExpenses = ({ filename, fileActions, getMonthlyExpense }) => {
  useEffect(() => {
    if (filename) {
      getMonthlyExpense(filename);
    }
  }, [filename, getMonthlyExpense]);

  const renderChart = () => {
    if (!fileActions[filename] || !fileActions[filename].monthlyExpense) {
      return <div></div>;
    }

    const chartData = getLabelsAndValuesForChart(
      fileActions[filename].monthlyExpense
    );

    return (
      <div>
        <h2>Monthly expenses</h2>
        <Line data={renderDataForChart(chartData)}></Line>
      </div>
    );
  };

  return <div>{renderChart()}</div>;
};

const mapStateToProps = (state) => {
  return {
    filename: state.fileActions.currentFile,
    fileActions: state.fileActions,
  };
};

export default connect(mapStateToProps, { getMonthlyExpense })(MonthlyExpenses);
