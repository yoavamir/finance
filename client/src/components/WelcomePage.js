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
    </div>
  );
};

export default WelcomePage;
