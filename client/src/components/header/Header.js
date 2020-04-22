import React from "react";
import { Link } from "react-router-dom";
import TimeRange from "./TimeRange";
import TotalAmountSpent from "./TotalAmountSpent";

const Header = (props) => {
  return (
    <div className="ui segment secondary pointing menu">
      <Link to="/" className="item header ">
        <div className="ui blue sub header">Finance</div>
      </Link>
      <div className="item center menu">
        <div className="ui sub header">
          <TotalAmountSpent></TotalAmountSpent>
        </div>
      </div>
    </div>
  );
};

export default Header;
