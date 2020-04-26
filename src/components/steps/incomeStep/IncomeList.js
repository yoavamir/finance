import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import MonthIncomeForm from "./MonthIncomeForm";
import _ from "lodash";

const IncomeList = ({ months }) => {
  const renderList = () => {
    return _.map(months, (month) => {
      return (
        <Grid.Column width={4} key>
          <MonthIncomeForm month={month}></MonthIncomeForm>
        </Grid.Column>
      );
    });
  };
  return renderList();
};

const mapStateToProps = (state) => {
  return { months: state.registration.months };
};

export default connect(mapStateToProps)(IncomeList);
