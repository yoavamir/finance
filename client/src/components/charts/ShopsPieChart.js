import React from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import { getShopsDistribution } from "../../actions";
import { getLabelsAndValuesForChart } from "./utils";
import { getDynamicColors, getFixedColors } from "./colors";

const getColorsForChart = (dataLength) => {
  return dataLength > getFixedColors().length
    ? getDynamicColors(dataLength)
    : getFixedColors();
};

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

const ShopsPieChart = (props) => {
  const renderPie = () => {
    if (
      !props.fileActions[props.filename] ||
      !props.fileActions[props.filename].shopsDistribution
    ) {
      return <div></div>;
    }
    const pieData = getLabelsAndValuesForChart(
      props.fileActions[props.filename].shopsDistribution
    );

    return (
      <div>
        <h2>Shops distribution</h2>
        <Pie data={renderDataForChart(pieData)} />
      </div>
    );
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    props.getShopsDistribution(props.filename);
  };

  return (
    <div>
      <button
        className="ui button primary"
        variant="contained"
        color="primary"
        onClick={handleOnClick}
      >
        Get shops distribution
      </button>
      {renderPie()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filename: state.fileActions.currentFile,
    fileActions: state.fileActions,
  };
};

export default connect(mapStateToProps, { getShopsDistribution })(
  ShopsPieChart
);
