import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TimeRange from "../components/TimeRange";
import TotalAmountSpent from "../components/TotalAmountSpent";

const Header = (props) => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item header ">
        <a className="ui blue sub header">Finance</a>
      </Link>
      <div className="item center menu">current file: {props.filename}</div>
      <div className="item center menu">
        <TotalAmountSpent></TotalAmountSpent>
      </div>
      <div className="item right menu">
        <TimeRange></TimeRange>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filename: state.fileActions.currentFile };
};

export default connect(mapStateToProps)(Header);
