import React from "react";
import { Link } from "react-router-dom";
import TimeRange from "./TimeRange";
import TotalAmountSpent from "./TotalAmountSpent";
import Steps from "../../components/steps/Steps";
import { connect } from "react-redux";

const Header = ({ dataFetched, inRegistration }) => {
  if (dataFetched) {
    return (
      <div className="ui segment secondary pointing menu">
        <Link to="/home" className="item header ">
          <div className="ui blue sub header">Finance</div>
        </Link>
        <div className="item center menu">
          <div className="ui sub header">
            <TotalAmountSpent></TotalAmountSpent>
          </div>
        </div>
      </div>
    );
  } else if (inRegistration) {
    return <Steps></Steps>;
  }
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    dataFetched: state.data.dataFetched,
    inRegistration: state.registration.inRegistration,
  };
};

export default connect(mapStateToProps)(Header);
