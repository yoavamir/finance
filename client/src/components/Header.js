import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TimeRange from "../components/TimeRange";

const Header = (props) => {
  return (
    <div className="ui secondary pointing menu">
      {/* <Link to="/" className="item">
        Finance
      </Link> */}
      <div className="item center menu">current file: {props.filename}</div>
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
