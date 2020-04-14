import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import { getLabelsAndValuesForChart } from "./utils";
import { getSpentByDay } from "../../actions";

const renderDataForBar = ({ labels, values }) => {
  return {
    labels: labels,
    datasets: [
      {
        label: "Total amount spent",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: values,
      },
    ],
  };
};

const AmountSpentBarChart = (props) => {
  useEffect(() => {
    if (props.filename) {
      props.getSpentByDay(props.filename);
    }
  }, [props.filename]);

  const renderBar = () => {
    if (
      !props.fileActions[props.filename] ||
      !props.fileActions[props.filename].spentByDay
    ) {
      return <div></div>;
    }
    const barData = getLabelsAndValuesForChart(
      props.fileActions[props.filename].spentByDay
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

  const handleOnClick = (e) => {
    e.preventDefault();
    props.getSpentByDay(props.filename);
  };

  return (
    <div>
      {/* <button
        className="ui button primary"
        variant="contained"
        color="primary"
        onClick={handleOnClick}
      >
        Get spent by day bar chart
      </button> */}
      {renderBar()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fileActions: state.fileActions,
    filename: state.fileActions.currentFile,
  };
};

export default connect(mapStateToProps, { getSpentByDay })(AmountSpentBarChart);
