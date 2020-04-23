import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import { getLabelsAndValuesForChart } from "./utils";
import { getSpentByDay } from "../../actions";
import { getColorsForChart } from "./colors";

const renderDataForBar = ({ labels, values }) => {
  const colors = getColorsForChart(labels.length);
  return {
    labels: labels,
    datasets: [
      {
        label: "Total amount spent",
        backgroundColor: colors,
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: values,
      },
      {
        label: "Yoav",
        backgroundColor: "rgba(255,99,132,1)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: values,
      },
    ],
  };
};

const AmountSpentBarChart = ({ filename, fileActions, getSpentByDay }) => {
  useEffect(() => {
    if (filename) {
      getSpentByDay(filename);
    }
  }, [filename, getSpentByDay]);

  const renderBar = () => {
    if (!fileActions[filename] || !fileActions[filename].spentByDay) {
      return <div></div>;
    }
    const barData = getLabelsAndValuesForChart(
      fileActions[filename].spentByDay
    );

    return (
      <div>
        <h2>Day By Day</h2>
        <Bar
          data={renderDataForBar(barData)}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  };

  return <div>{renderBar()}</div>;
};

const mapStateToProps = (state) => {
  return {
    fileActions: state.fileActions,
    filename: state.fileActions.currentFile,
  };
};

export default connect(mapStateToProps, { getSpentByDay })(AmountSpentBarChart);
