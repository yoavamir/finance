import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Finance
      </Link>
      <div className="item center menu">current file: {props.filename}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filename: state.fileActions.currentFile };
};

export default connect(mapStateToProps)(Header);
