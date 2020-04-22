import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import { getShopExpenseByMonth, cleanSelectedShops } from "../../actions";
import { getLabelsAndValuesForChart } from "./utils";
import { getColorsForChart } from "./colors";
import ShopsDropDown from "../dropdowns/ShopsDropDown";
import MonthsDropDown from "../dropdowns/MonthsDropDown";
import _ from "lodash";

const renderDataForChart = ({ labels, values }) => {
  const colors = getColorsForChart(labels.length);
  return {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };
};

const options = {
  legend: {
    display: true,
  },
};

const ShopsPieChart = ({
  selectedShops,
  shopsByMonths,
  getShopExpenseByMonth,
  cleanSelectedShops,
  selectedMonths,
}) => {
  useEffect(() => {
    getShopExpenseByMonth();

    return () => {
      cleanSelectedShops();
    };
  }, [getShopExpenseByMonth, cleanSelectedShops]);

  const renderPie = () => {
    if (!shopsByMonths) {
      return <div></div>;
    }

    const monthShops = _.filter(shopsByMonths, (item) => {
      return item[0] === selectedMonths;
    });

    const shopsAndAmount = _.map(monthShops, (item) => {
      return [item[1], item[2]];
    });

    const relevantShops = _.map(shopsAndAmount, (item) => {
      return item[0];
    });

    const dataForPieChart = _.filter(shopsAndAmount, (item) => {
      return _.includes(selectedShops, item[0]);
    });

    const pieData = getLabelsAndValuesForChart(dataForPieChart);

    return (
      <div>
        <h2>Shops distribution</h2>
        <div className="ui grid">
          <div className="eight wide column">
            <MonthsDropDown multiple={false}></MonthsDropDown>
          </div>
          <div className="eight wide column">
            <ShopsDropDown
              releveantShopsForMenu={relevantShops}
            ></ShopsDropDown>
          </div>
        </div>
        <Pie data={renderDataForChart(pieData)} options={options} />
      </div>
    );
  };

  return <div className="ui container">{renderPie()}</div>;
};

const mapStateToProps = (state) => {
  return {
    shopsByMonths: state.fileActions.shopsByMonths,
    selectedShops: state.menus.selectedShops,
    selectedMonths: state.menus.selectedMonths,
  };
};

export default connect(mapStateToProps, {
  getShopExpenseByMonth,
  cleanSelectedShops,
})(ShopsPieChart);
