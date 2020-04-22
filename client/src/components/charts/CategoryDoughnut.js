import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import { getCategoryDistribution } from "../../actions";
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

const CategoryDoughnut = ({
  filename,
  fileActions,
  getCategoryDistribution,
}) => {
  useEffect(() => {
    if (filename) {
      getCategoryDistribution(filename);
    }
  }, [filename, getCategoryDistribution]);

  const renderDounghut = () => {
    if (!fileActions[filename] || !fileActions[filename].categoryDistribution) {
      return <div></div>;
    }
    const doughnutData = getLabelsAndValuesForChart(
      fileActions[filename].categoryDistribution
    );
    return (
      <div>
        <h2>Category Distribution</h2>
        <Doughnut data={renderDataForChart(doughnutData)} />
      </div>
    );
  };

  return <div>{renderDounghut()}</div>;
};

const mapStateToProps = (state) => {
  return {
    filename: state.fileActions.currentFile,
    fileActions: state.fileActions,
  };
};

export default connect(mapStateToProps, { getCategoryDistribution })(
  CategoryDoughnut
);
