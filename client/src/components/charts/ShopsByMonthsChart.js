import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import { getLabelsAndValuesForChart } from "./utils";
import { getShopExpenseByMonth } from "../../actions";
import { getColorsForChart } from "./colors";
import MonthsDropDown from "../dropdowns/MonthsDropDown";
import ShopsDropDown from "../dropdowns/ShopsDropDown";
import _ from "lodash";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: "2",
      backgroundColor: "rgba(35,99,56,0.2)",
      borderColor: "rgba(35,99,56,0.2)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [4, 359, 65, 85, 546, 55, 40],
    },
  ],
};

const ShopsByMonthsChart = ({
  filename,
  fileActions,
  getShopExpenseByMonth,
  menus,
}) => {
  useEffect(() => {
    if (filename) {
      getShopExpenseByMonth(filename);
    }
  }, [filename, getShopExpenseByMonth]);

  const buildDataChart = (datasets) => {
    return {
      labels: menus.selectedMonths,

      datasets,
    };
  };

  const renderBar = () => {
    if (!fileActions[filename] || !fileActions[filename].shopsByMonths) {
      return <div></div>;
    }

    const labels = menus.selectedMonths;
    const relevantValues = _.filter(
      fileActions[filename].shopsByMonths,
      (item) => {
        return labels.includes(item[0]);
      }
    );

    const renderChart = (datasets) => {
      return (
        <Bar
          data={buildDataChart(datasets[0])}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
          }}
        />
      );
    };

    const groupedByMonths = _.groupBy(relevantValues, (item) => {
      return item[0];
    });

    const baseDataSet = {
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
    };

    let datasets = _.map(groupedByMonths, (values, month) => {
      return _.map(groupedByMonths[month], (item) => {
        return { ...baseDataSet, ["label"]: item[1], ["data"]: [item[2]] };
      });
    });

    // let a = {};
    // if (datasets[0] === undefined) {
    //   a = { ...baseDataSet, ["label"]: "1", ["data"]: 2 };
    // } else {
    //   a = Array(datasets[0][0]);
    // }

    // if (datasets[0] !== undefined) {
    //   datasets = Array(datasets[0][0]);
    // }

    return (
      <div>
        <h2>Shop expenses by month</h2>
        <div className="ui grid">
          <div className="eight wide column">
            <MonthsDropDown></MonthsDropDown>
          </div>
          <div className="eight wide column">
            <ShopsDropDown></ShopsDropDown>
          </div>
        </div>
        {renderChart(datasets)}
      </div>
    );
  };

  return <div>{renderBar()}</div>;
};

const mapStateToProps = (state) => {
  return {
    fileActions: state.fileActions,
    filename: state.fileActions.currentFile,
    menus: state.menus,
  };
};

export default connect(mapStateToProps, { getShopExpenseByMonth })(
  ShopsByMonthsChart
);
