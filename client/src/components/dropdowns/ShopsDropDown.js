import React from "react";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import _ from "lodash";

import { setSelectedShops } from "../../actions";

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
  releveantShopsForMenu = null,
}) => {
  const options = getShopsForMenu(shops, releveantShopsForMenu);

  const handleOnChange = (e, data) => {
    e.preventDefault();
    setSelectedShops(data.value);
  };

  return (
    <Dropdown
      placeholder="Shops"
      fluid
      multiple
      selection
      search
      options={options}
      onChange={handleOnChange}
    />
  );
};

const mapStateToProps = (state) => {
  return { shops: state.fileActions.shops };
};

export default connect(mapStateToProps, { setSelectedShops })(ShopsDropDown);
