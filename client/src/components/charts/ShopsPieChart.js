import React from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import { getShopsDistribution } from "../../actions";
import { getLabelsAndValuesForChart } from "./utils";
import { colors } from "./colorsPallete";

const renderDataForChart = ({ labels, values }) => {
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
    if (!props.fileActions[props.filename]) {
      return <div>ShopsPieChart</div>;
    }
    const pieData = getLabelsAndValuesForChart(
      props.fileActions[props.filename].shopsDistribution
    );

    return (
      <div>
        <h2>Pie Example</h2>
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
