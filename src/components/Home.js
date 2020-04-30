import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { initData } from "../actions";
import { Header, Grid, Container } from "semantic-ui-react";
import MyLoader from "./MyLoader";

const Home = ({ dataFetched, initData }) => {
  useEffect(() => {
    if (!dataFetched) {
      initData();
    }
  }, [dataFetched, initData]);

  if (!dataFetched) {
    return <MyLoader message="Fetching all data"></MyLoader>;
  } else {
    return (
      <Container>
        <Header as="h2" textAlign="center">
          <Header.Content>
            Click any of the buttons to show data about you money!
          </Header.Content>
        </Header>
        <Grid doubling columns={4}>
          {/* <Grid.Row> */}
          <Grid.Column>
            <Link to="/shops_distribution" className="ui button primary">
              Show shops distribution
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/spent_by_month" className="ui button primary">
              Show Montly expenses
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/shops_expenses_by_month" className="ui button primary">
              Show shops by months
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/monthly_balance" className="ui button primary">
              Show monthly balance
            </Link>
          </Grid.Column>
          {/* </Grid.Row> */}
        </Grid>
      </Container>
    );
  }
};

const mapStateToProps = (state) => {
  return { dataFetched: state.data.dataFetched };
};

export default connect(mapStateToProps, { initData })(Home);
