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
  releveantShopsForMenu = null,
}) => {
  const [defaultValue, setDefaultValue] = useState([]);

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
    console.log(data);
    if (data.checked) {
      setDefaultValue(
        _.map(options, (item) => {
          return item.value;
        })
      );
    } else {
      setDefaultValue([]);
      cleanSelectedShops();
    }
  };

  return (
    <div>
      <Checkbox toggle onChange={handleToggleChange} />
      <Dropdown
        placeholder="Shops"
        fluid
        multiple
        selection
        search
        options={options}
        onChange={handleOnChange}
        value={defaultValue}
        clearable={true}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { shops: state.fileActions.shops };
};

export default connect(mapStateToProps, {
  setSelectedShops,
  cleanSelectedShops,
})(ShopsDropDown);
