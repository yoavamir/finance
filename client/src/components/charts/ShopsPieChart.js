import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import { getShopsDistribution } from "../../actions";
import { getLabelsAndValuesForChart } from "./utils";
import { getColorsForChart } from "./colors";
import ShopsDropDown from "../dropdowns/ShopsDropDown";
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
  shopsDistribution,
  getShopsDistribution,
}) => {
  useEffect(() => {
    getShopsDistribution();
  }, [getShopsDistribution]);

  const renderPie = () => {
    if (!shopsDistribution) {
      return <div></div>;
    }
    const pieData = getLabelsAndValuesForChart(
      _.filter(shopsDistribution, (item) => _.includes(selectedShops, item[0]))
    );

    return (
      <div>
        filename
        <h2>Shops distribution</h2>
        <ShopsDropDown></ShopsDropDown>
        <Pie data={renderDataForChart(pieData)} options={options} />
      </div>
    );
  };

  return <div>{renderPie()}</div>;
};

const mapStateToProps = (state) => {
  return {
    shopsDistribution: state.fileActions.shopsDistribution,
    selectedShops: state.menus.selectedShops,
  };
};

export default connect(mapStateToProps, { getShopsDistribution })(
  ShopsPieChart
);
