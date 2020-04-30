import React from "react";

import FetchDataButton from "../components/FetchDataButton";
import StartProcessButton from "../components/StartProcessButton";
import { Header, Grid, Container } from "semantic-ui-react";

const WelcomePage = () => {
  const renderText = () => {
    return (
      <Container>
        <Header
          as="h2"
          color="blue"
          textAlign="center"
          style={{ margin: "15px" }}
        >
          Welcome to Yoav and Daphna finance page
        </Header>
        <Grid textAlign="center" doubling columns={2}>
          <Grid.Column>
            <StartProcessButton></StartProcessButton>
          </Grid.Column>
          <Grid.Column>
            <FetchDataButton message="Start with mock data!"></FetchDataButton>
          </Grid.Column>
        </Grid>
      </Container>
    );
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

export default WelcomePage;
