import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const WelcomePage = (props) => {
  const renderText = () => {
    if (!props.filename) {
      return (
        <div style={{ margin: "10px" }}>
          <h3 style={style}>Welcome to Yoav and Daphna finance page</h3>
          <h4 style={style}>Upload file to start</h4>
        </div>
      );
    }

    return (
      <div style={{ margin: "10px" }}>
        <h3 style={style}>Welcome to Yoav and Daphna finance page</h3>
        <h4 style={style}>Click buttons to get information</h4>
      </div>
    );
  };

  return (
    <div style={{ margin: "20px" }}>
      {renderText()}
      <Link to="/upload_file" className="ui button primary">
        Upload finance file
      </Link>
      <Link to="/amount_spent_bar_chart" className="ui button primary">
        Show amount spent bar chart
      </Link>
      <Link to="/shops_distribution" className="ui button primary">
        Show shops distribution
      </Link>
      <Link to="/category_distribution" className="ui button primary">
        Show category distribution
      </Link>
      <Link to="/spent_by_month" className="ui button primary">
        Show Montly expenses
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filename: state.fileActions.currentFile };
};

export default connect(mapStateToProps)(WelcomePage);
