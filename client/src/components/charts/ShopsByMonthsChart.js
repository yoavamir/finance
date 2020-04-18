import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
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

const buildDataChart = (selectedMonths, datasets) => {
  return {
    labels: selectedMonths,

    datasets,
  };
};

const baseDataSet = {
  backgroundColor: "rgba(255,99,132,0.2)",
  borderColor: "rgba(255,99,132,1)",
  borderWidth: 1,
  hoverBackgroundColor: "rgba(255,99,132,0.4)",
  hoverBorderColor: "rgba(255,99,132,1)",
};

const renderChart = (selectedMonths, datasets) => {
  return (
    <Bar
      data={buildDataChart(selectedMonths, datasets)}
      width={100}
      height={50}
      options={{
        maintainAspectRatio: false,
      }}
    />
  );
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

    console.log(relevantValues);

    const groupedByMonths = _.groupBy(relevantValues, (item) => {
      return item[0];
    });

    // TODO
    const groupedByShops = _.groupBy(relevantValues, (item) => {
      return item[1];
    });

    const datasets = _.map(groupedByMonths, (values, month) => {
      return _.map(groupedByMonths[month], (item) => {
        return { ...baseDataSet, ["label"]: item[1], ["data"]: [item[2]] };
      });
    });

    const filtered_datasets = _.filter(datasets[0], (item) => {
      return menus.selectedShops.includes(item.label);
    });

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
        {renderChart(menus.selectedMonths, filtered_datasets)}
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
