import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { getLabelsAndValuesForChart } from "./utils";
import { getMonthlyExpense } from "../../actions";
import MonthsDropDown from "../dropdowns/MonthsDropDown";
import _ from "lodash";

const generateArray = (n) => [...Array(n)].map((_) => n);

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
      {
        label: "Monthly income",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#00adff",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#00adff",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#00adff",
        pointHoverBorderColor: "#00adff",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: generateArray(19000),
      },
    ],
  };
};

const MonthlyExpenses = ({
  filename,
  fileActions,
  getMonthlyExpense,
  selectedMonths,
}) => {
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
      _.filter(fileActions[filename].monthlyExpense, (item) =>
        _.includes(selectedMonths, item[0])
      )
    );

    return (
      <div>
        <h2>Monthly expenses</h2>
        <MonthsDropDown></MonthsDropDown>
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
    selectedMonths: state.menus.selectedMonths,
  };
};

export default connect(mapStateToProps, { getMonthlyExpense })(MonthlyExpenses);
