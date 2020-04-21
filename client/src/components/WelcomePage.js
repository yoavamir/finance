import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FetchDataButton from "../components/FetchDataButton";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const WelcomePage = ({ months }) => {
  const renderText = () => {
    if (!months.length > 0) {
      return (
        <div className="ui grid">
          <div className="eight wide column">
            <h3>Welcome to Yoav and Daphna finance page</h3>
          </div>
          <div className="eight wide column">
            <FetchDataButton></FetchDataButton>
          </div>
        </div>
      );
    }

    return (
      <div style={{ margin: "10px" }}>
        <h3 style={style}>Welcome to Yoav and Daphna finance page</h3>
      </div>
    );
  };

  return (
    <div>
      {renderText()}
      <div className="ui grid">
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
        <Link to="/shops_expenses_by_month" className="ui button primary">
          Show shops by months
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { months: state.fileActions.months };
};

export default connect(mapStateToProps)(WelcomePage);
