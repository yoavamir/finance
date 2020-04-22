import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FetchDataButton from "../components/FetchDataButton";

const WelcomePage = ({ months }) => {
  const renderText = () => {
    if (!months.length > 0) {
      return (
        <div
          className="ui container"
          style={{
            // backgroundImage: "url(cool-background.png)",
            width: "100%",
            height: "50%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <h3 style={{ color: "white" }}>
            Welcome to Yoav and Daphna finance page
          </h3>
          <FetchDataButton></FetchDataButton>
        </div>
      );
    }

    return (
      <div style={{ margin: "10px" }}>
        <div className="ui containet">
          {/* <Link to="/amount_spent_bar_chart" className="ui button primary">
            Show amount spent bar chart
          </Link> */}
          <Link to="/shops_distribution" className="ui button primary">
            Show shops distribution
          </Link>
          {/* <Link to="/category_distribution" className="ui button primary">
            Show category distribution
          </Link> */}
          <Link to="/spent_by_month" className="ui button primary">
            Show Montly expenses
          </Link>
          <Link to="/shops_expenses_by_month" className="ui button primary">
            Show shops by months
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        display: "flex",
      }}
    >
      {renderText()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { months: state.fileActions.months };
};

export default connect(mapStateToProps)(WelcomePage);
