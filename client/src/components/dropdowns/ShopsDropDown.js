import React from "react";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import _ from "lodash";

import { setSelectedShops } from "../../actions";

const ShopsDropDown = ({ shops, setSelectedShops }) => {
  const options = _.map(shops, (item) => {
    return { key: item, text: item, value: item };
  });

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
      options={options}
      onChange={handleOnChange}
    />
  );
};

const mapStateToProps = (state) => {
  return { shops: state.fileActions.shops };
};

export default connect(mapStateToProps, { setSelectedShops })(ShopsDropDown);
