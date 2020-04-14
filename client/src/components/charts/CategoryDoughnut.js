import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import { getCategoryDistribution } from "../../actions";
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

const CategoryDoughnut = (props) => {
  useEffect(() => {
    if (props.filename) {
      props.getCategoryDistribution(props.filename);
    }
  }, [props.filename]);

  const renderDounghut = () => {
    if (
      !props.fileActions[props.filename] ||
      !props.fileActions[props.filename].categoryDistribution
    ) {
      return <div></div>;
    }
    const doughnutData = getLabelsAndValuesForChart(
      props.fileActions[props.filename].categoryDistribution
    );
    return (
      <div>
        <h2>Category Distribution</h2>
        <Doughnut data={renderDataForChart(doughnutData)} />
      </div>
    );
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    props.getCategoryDistribution(props.filename);
  };

  return (
    <div>
      {/* <button
        className="ui button primary"
        variant="contained"
        color="primary"
        onClick={handleOnClick}
      >
        Get category distribution
      </button> */}
      {renderDounghut()}
    </div>
  );
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
