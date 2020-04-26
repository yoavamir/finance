import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FetchDataButton from "../components/FetchDataButton";
import StartProcessButton from "../components/StartProcessButton";
import { Header, Grid, Container } from "semantic-ui-react";

const WelcomePage = ({ dataFetched }) => {
  const renderText = () => {
    if (!dataFetched) {
      return (
        <Container>
          <Header as="h2" color="blue" textAlign="center">
            Welcome to Yoav and Daphna finance page
          </Header>
          <Grid textAlign="center">
            <Grid.Row>
              <Grid.Column width={6}>
                <StartProcessButton></StartProcessButton>
              </Grid.Column>
              <Grid.Column width={6}>
                <FetchDataButton message="Start with mock data!"></FetchDataButton>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      );
    } else {
      return (
        <div style={{ margin: "20px" }}>
          <Header as="h2" textAlign="center">
            <Header.Content>
              Click any of the buttons to show data about you money!
            </Header.Content>
          </Header>
          <div className="ui grid" textalign="center">
            <Link to="/shops_distribution" className="ui button primary">
              Show shops distribution
            </Link>
            <Link to="/spent_by_month" className="ui button primary">
              Show Montly expenses
            </Link>
            <Link to="/shops_expenses_by_month" className="ui button primary">
              Show shops by months
            </Link>
            <Link to="/monthly_balance" className="ui button primary">
              Show monthly balance
            </Link>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        display: "flex",
      }}
    >
      {renderText()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { dataFetched: state.data.dataFetched };
};

export default connect(mapStateToProps)(WelcomePage);
