import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import {
  getShopExpenseByMonth,
  cleanSelectedMonths,
  cleanSelectedShops,
} from "../../actions";
import { dynamicColors } from "./colors";
import MonthsDropDown from "../dropdowns/MonthsDropDown";
import ShopsDropDown from "../dropdowns/ShopsDropDown";
import _ from "lodash";
import MyLoader from "../MyLoader";

const buildDataChart = (selectedMonths, newDatasets) => {
  const datasetsToShow = newDatasets === undefined ? [] : newDatasets;

  return {
    labels: selectedMonths,
    datasets: datasetsToShow,
  };
};

const baseDataSet = (color, data, shopName) => {
  return {
    label: shopName,
    backgroundColor: color,
    borderColor: color,
    borderWidth: 1,
    hoverBackgroundColor: color,
    hoverBorderColor: color,
    data,
  };
};

const buildDatasetForShop = (selectedMonths, shop, months) => {
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

  if (shop !== undefined) {
    const color = dynamicColors();
    return baseDataSet(color, finalData, shop[0][1]);
  }
};

const renderMenus = (releveantShopsForMenu) => {
  return (
    <div className="ui grid">
      <div className="eight wide column">
        <MonthsDropDown></MonthsDropDown>
      </div>
      <div className="eight wide column">
        <ShopsDropDown
          releveantShopsForMenu={releveantShopsForMenu}
        ></ShopsDropDown>
      </div>
    </div>
  );
};

const renderChart = (menus, datasets) => {
  return (
    <Bar
      data={buildDataChart(menus.selectedMonths, datasets)}
      width={100}
      height={50}
      options={{
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
      }}
    />
  );
};

const buildDatasets = (menus, months, shopsByMonths) => {
  const selectedShops = menus.selectedShops;
  const relevantShops = _.filter(shopsByMonths, (item) => {
    return selectedShops.includes(item[1]);
  });

  const groupedByShops = _.groupBy(relevantShops, (item) => {
    return item[1];
  });

  const datasets = _.map(menus.selectedShops, (shop) => {
    return buildDatasetForShop(
      menus.selectedMonths,
      groupedByShops[shop],
      months
    );
  });

  return datasets;
};

const renderBar = (menus, months, shopsByMonths) => {
  const datasets = buildDatasets(menus, months, shopsByMonths);

  const releveantShopsForMenu = _.uniq(
    _.map(
      _.filter(shopsByMonths, (item) => {
        return menus.selectedMonths.includes(item[0]);
      }),
      (filtered) => {
        return filtered[1];
      }
    )
  );

  return (
    <div>
      <h2>Shop expenses by month</h2>
      {renderMenus(releveantShopsForMenu)}
      {renderChart(menus, datasets)}
    </div>
  );
};

const ShopsByMonthsChart = ({
  shopsByMonths,
  getShopExpenseByMonth,
  cleanSelectedMonths,
  cleanSelectedShops,
  menus,
  months,
}) => {
  useEffect(() => {
    getShopExpenseByMonth();

    return () => {
      cleanSelectedMonths();
      cleanSelectedShops();
    };
  }, [getShopExpenseByMonth, cleanSelectedMonths, cleanSelectedShops]);

  if (!shopsByMonths || !menus.selectedShops || !menus.selectedMonths) {
    return <MyLoader message="Loading shops and months"></MyLoader>;
  }

  return (
    <div className="ui container">
      {renderBar(menus, months, shopsByMonths)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shopsByMonths: state.data.shopsByMonths,
    months: state.data.months,
    menus: state.menus,
  };
};

export default connect(mapStateToProps, {
  getShopExpenseByMonth,
  cleanSelectedMonths,
  cleanSelectedShops,
})(ShopsByMonthsChart);
