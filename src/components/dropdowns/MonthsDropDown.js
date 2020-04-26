import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dropdown, Checkbox } from "semantic-ui-react";
import _ from "lodash";
import { sortDates } from "../../components/charts/utils";

import { setSelectedMonths, cleanSelectedMonths } from "../../actions";
// import { Toggle } from "./Toggle";

const MonthsDropDown = ({
  months,
  setSelectedMonths,
  cleanSelectedMonths,
  selectedMonths,
  multiple = true,
}) => {
  const [defaultValue, setDefaultValue] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setSelectedMonths(defaultValue);
  }, [setSelectedMonths, defaultValue]);

  const handleToggleChange = (e, data) => {
    e.preventDefault();
    setToggle(data.checked);
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
    const val = multiple ? sortDates(data.value) : data.value;
    setSelectedMonths(val);
  };

  const setMenuValue = () => {
    return multiple ? (toggle ? defaultValue : selectedMonths) : undefined;
  };

  const renderToggle = () => {
    if (!multiple) {
      return (
        <div>
          <h4>toggle disabled</h4>
          <Checkbox toggle disabled onChange={handleToggleChange}></Checkbox>
        </div>
      );
    }
    return (
      <div>
        <h4>Select all</h4>
        <Checkbox toggle onChange={handleToggleChange}></Checkbox>
      </div>
    );
  };

  return (
    <div>
      {renderToggle()}
      <Dropdown
        placeholder="Months"
        fluid
        multiple={multiple}
        selection
        options={options}
        onChange={handleOnChange}
        value={setMenuValue()}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    months: state.data.months,
    selectedMonths: state.menus.selectedMonths,
  };
};

export default connect(mapStateToProps, {
  setSelectedMonths,
  cleanSelectedMonths,
})(MonthsDropDown);
