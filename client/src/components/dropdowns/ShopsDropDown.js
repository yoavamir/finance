import React from "react";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import _ from "lodash";

import { setSelectedMonths } from "../../actions";

const MonthsDropDown = ({ months, setSelectedMonths }) => {
  const options = _.map(months, (item) => {
    return { key: item, text: item, value: item };
  });

  const handleOnChange = (e, data) => {
    e.preventDefault();
    console.log(data);
    setSelectedMonths(data.value);
  };

  return (
    <Dropdown
      placeholder="Months"
      fluid
      multiple
      selection
      options={options}
      onChange={handleOnChange}
    />
  );
};

const mapStateToProps = (state) => {
  return { months: state.fileActions.months };
};

export default connect(mapStateToProps, { setSelectedMonths })(MonthsDropDown);
