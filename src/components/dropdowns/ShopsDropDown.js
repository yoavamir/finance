import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dropdown, Checkbox } from "semantic-ui-react";
import _ from "lodash";

import { setSelectedShops, cleanSelectedShops } from "../../actions";

const getShopsForMenu = (shops, releveantShopsForMenu) => {
  if (!releveantShopsForMenu) {
    return _.map(shops, (item) => {
      return { key: item, text: item, value: item };
    });
  } else {
    return _.map(releveantShopsForMenu, (item) => {
      return { key: item, text: item, value: item };
    });
  }
};

const ShopsDropDown = ({
  shops,
  setSelectedShops,
  cleanSelectedShops,
  selectedShops,
  releveantShopsForMenu = null,
  multiple = true,
}) => {
  const [defaultValue, setDefaultValue] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setSelectedShops(defaultValue);
  }, [setSelectedShops, defaultValue]);

  const options = getShopsForMenu(shops, releveantShopsForMenu);

  const handleOnChange = (e, data) => {
    e.preventDefault();
    setSelectedShops(data.value);
  };

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
      setDefaultValue(selectedShops);
      cleanSelectedShops();
    }
  };

  const setMenuValue = () => {
    return toggle ? defaultValue : selectedShops;
  };

  const renderToggle = (multiple) => {
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
      {renderToggle(multiple)}
      <Dropdown
        placeholder="Shops"
        fluid
        multiple
        selection
        search
        options={options}
        onChange={handleOnChange}
        value={setMenuValue()}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shops: state.data.shops,
    selectedShops: state.menus.selectedShops,
  };
};

export default connect(mapStateToProps, {
  setSelectedShops,
  cleanSelectedShops,
})(ShopsDropDown);
