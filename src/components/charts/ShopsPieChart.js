import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import { getShopExpenseByMonth, cleanSelectedShops } from "../../actions";
import { getLabelsAndValuesForChart } from "./utils";
import { getColorsForChart } from "./colors";
import ShopsDropDown from "../dropdowns/ShopsDropDown";
import MonthsDropDown from "../dropdowns/MonthsDropDown";
import _ from "lodash";
import { Header, Grid } from "semantic-ui-react";

const renderDataForChart = ({ labels, values }) => {
  const colors = getColorsForChart(labels.length);
  return {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };
};

const options = {
  legend: {
    display: true,
    position: "left",
  },
};

const render = (relevantShops, pieData) => {
  return (
    <Grid textAlign="center">
      <Grid.Row>
        <Grid.Column width={16}>
          <Header>
            <Header.Content>Show shops distribution</Header.Content>
            <Header.Subheader>
              Choose 1 month, and any number of shops to show the disribution
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8}>
          <div>
            <MonthsDropDown multiple={false}></MonthsDropDown>
          </div>
        </Grid.Column>
        <Grid.Column width={8}>
          <div>
            <ShopsDropDown
              releveantShopsForMenu={relevantShops}
            ></ShopsDropDown>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Pie data={renderDataForChart(pieData)} options={options} />
      </Grid.Row>
    </Grid>
  );
};

const ShopsPieChart = ({
  selectedShops,
  shopsByMonths,
  getShopExpenseByMonth,
  cleanSelectedShops,
  selectedMonths,
}) => {
  useEffect(() => {
    getShopExpenseByMonth();

    return () => {
      cleanSelectedShops();
    };
  }, [getShopExpenseByMonth, cleanSelectedShops]);

  const renderPie = () => {
    if (!shopsByMonths) {
      return <div></div>;
    }

    const monthShops = _.filter(shopsByMonths, (item) => {
      return item[0] === selectedMonths;
    });

    const shopsAndAmount = _.map(monthShops, (item) => {
      return [item[1], item[2]];
    });

    const relevantShops = _.map(shopsAndAmount, (item) => {
      return item[0];
    });

    const dataForPieChart = _.filter(shopsAndAmount, (item) => {
      return _.includes(selectedShops, item[0]);
    });

    const pieData = getLabelsAndValuesForChart(dataForPieChart);

    return render(relevantShops, pieData);
  };

  return <div className="ui container">{renderPie()}</div>;
};

const mapStateToProps = (state) => {
  return {
    shopsByMonths: state.data.shopsByMonths,
    selectedShops: state.menus.selectedShops,
    selectedMonths: state.menus.selectedMonths,
  };
};

export default connect(mapStateToProps, {
  getShopExpenseByMonth,
  cleanSelectedShops,
})(ShopsPieChart);
