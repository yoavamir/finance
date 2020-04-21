import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dropdown, Checkbox } from "semantic-ui-react";
import _ from "lodash";
import { sortDates } from "../../components/charts/utils";

import { setSelectedMonths, cleanSelectedMonths } from "../../actions";

const MonthsDropDown = ({ months, setSelectedMonths, cleanSelectedMonths }) => {
  const [defaultValue, setDefaultValue] = useState([]);

  useEffect(() => {
    setSelectedMonths(defaultValue);
  }, [setSelectedMonths, defaultValue]);

  const handleToggleChange = (e, data) => {
    e.preventDefault();
    console.log(data);
    if (data.checked) {
      setDefaultValue(
        _.map(options, (item) => {
          return item.value;
        })
      );
    } else {
      setDefaultValue([]);
      cleanSelectedMonths();
    }
  };

  const options = _.map(months, (item) => {
    return { key: item, text: item, value: item };
  });

  const handleOnChange = (e, data) => {
    e.preventDefault();
    console.log(sortDates(data.value));
    setSelectedMonths(data.value);
  };

  return (
    <div>
      <Checkbox toggle onChange={handleToggleChange} />
      <Dropdown
        placeholder="Months"
        fluid
        multiple
        selection
        options={options}
        onChange={handleOnChange}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { months: state.fileActions.months };
};

export default connect(mapStateToProps, {
  setSelectedMonths,
  cleanSelectedMonths,
})(MonthsDropDown);
