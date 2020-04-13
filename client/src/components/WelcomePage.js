import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="ui container">
      <h3>Welcome to Yoav and Daphna finance page</h3>
      <Link to="/upload_file" className="ui button primary">
        Upload finance file
      </Link>
      <Link to="/amount" className="ui button primary">
        Get amount data
      </Link>
      <Link to="/amount_spent_bar_chart" className="ui button primary">
        Show amount spent bar chart
      </Link>
      <Link to="/shops_distribution" className="ui button primary">
        Show shops dist
      </Link>
    </div>
  );
};

export default WelcomePage;
