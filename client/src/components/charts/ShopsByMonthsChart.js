import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import { getShopExpenseByMonth, setSelectedMonths } from "../../actions";
import { getColorsForChart } from "./colors";
import MonthsDropDown from "../dropdowns/MonthsDropDown";
import ShopsDropDown from "../dropdowns/ShopsDropDown";
import _ from "lodash";

const data = (months) => {
  return {
    labels: months,
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

const renderChart = (months) => {
  return (
    <Bar
      data={data(months)}
      width={100}
      height={50}
      options={{
        maintainAspectRatio: false,
      }}
    />
  );
};

const generateArray = (n) => [...Array(n)].map((_) => n);

const buildDataForShops = (selectedMonths, shop, months) => {
  const data = _.reduce(
    months,
    function (result, item) {
      result[item] = 0;
      return result;
    },
    {}
  );
  _.map(selectedMonths, (month) => {
    const filteredByMonth = _.filter(shop, (item) => {
      return item[0] === month;
    });
    if (filteredByMonth.length > 0) {
      data[filteredByMonth[0][0]] = filteredByMonth[0][2];
    }
  });
  const finalData = _.filter(data, (item, key) => {
    return _.includes(selectedMonths, key);
  });
  console.log(finalData);
};

const ShopsByMonthsChart = ({
  shopsByMonths,
  getShopExpenseByMonth,
  menus,
  months,
}) => {
  useEffect(() => {
    getShopExpenseByMonth();
  }, [getShopExpenseByMonth]);

  const renderBar = () => {
    if (!shopsByMonths) {
      return <div></div>;
    }

    const selectedShops = menus.selectedShops;
    const relevantShops = _.filter(shopsByMonths, (item) => {
      return selectedShops.includes(item[1]);
    });

    const groupedByShops = _.groupBy(relevantShops, (item) => {
      return item[1];
    });

    console.log(groupedByShops[menus.selectedShops[0]]);
    buildDataForShops(
      menus.selectedMonths,
      groupedByShops[menus.selectedShops],
      months
    );

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
        {renderChart(months)}
      </div>
    );
  };

  return <div>{renderBar()}</div>;
};

const mapStateToProps = (state) => {
  return {
    shopsByMonths: state.fileActions.shopsByMonths,
    months: state.fileActions.months,
    menus: state.menus,
  };
};

export default connect(mapStateToProps, { getShopExpenseByMonth })(
  ShopsByMonthsChart
);
