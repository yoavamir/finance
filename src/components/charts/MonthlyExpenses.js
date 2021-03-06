import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { getLabelsAndValuesForChart, MONTHLY_INCOME } from "./utils";
import { getMonthlyExpense, cleanSelectedMonths } from "../../actions";
import MonthsDropDown from "../dropdowns/MonthsDropDown";
import _ from "lodash";
import MyLoader from "../MyLoader";

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
        data: MONTHLY_INCOME,
      },
    ],
  };
};

const MonthlyExpenses = ({
  monthlyExpense,
  getMonthlyExpense,
  cleanSelectedMonths,
  selectedMonths,
}) => {
  useEffect(() => {
    getMonthlyExpense();

    return () => {
      cleanSelectedMonths();
    };
  }, [getMonthlyExpense, cleanSelectedMonths]);

  const renderChart = () => {
    if (!monthlyExpense) {
      return <MyLoader message="Loading monthly expense"></MyLoader>;
    }

    const chartData = getLabelsAndValuesForChart(
      _.filter(monthlyExpense, (item) => _.includes(selectedMonths, item[0]))
    );

    return (
      <div>
        <h2>Monthly expenses</h2>
        <MonthsDropDown></MonthsDropDown>
        <Line data={renderDataForChart(chartData)}></Line>
      </div>
    );
  };

  return <div className="ui container">{renderChart()}</div>;
};

const mapStateToProps = (state) => {
  return {
    monthlyExpense: state.data.monthlyExpense,
    selectedMonths: state.menus.selectedMonths,
  };
};

export default connect(mapStateToProps, {
  getMonthlyExpense,
  cleanSelectedMonths,
})(MonthlyExpenses);
