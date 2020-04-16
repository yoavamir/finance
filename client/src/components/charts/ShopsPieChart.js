import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import { getShopsDistribution } from "../../actions";
import { getLabelsAndValuesForChart } from "./utils";
import { getColorsForChart } from "./colors";

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
    display: false,
  },
};

const ShopsPieChart = ({ filename, fileActions, getShopsDistribution }) => {
  useEffect(() => {
    if (filename) {
      getShopsDistribution(filename);
    }
  }, [filename, getShopsDistribution]);

  const renderPie = () => {
    if (!fileActions[filename] || !fileActions[filename].shopsDistribution) {
      return <div></div>;
    }
    const pieData = getLabelsAndValuesForChart(
      fileActions[filename].shopsDistribution
    );

    return (
      <div>
        <h2>Shops distribution</h2>
        <Pie data={renderDataForChart(pieData)} options={options} />
      </div>
    );
  };

  return <div>{renderPie()}</div>;
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
