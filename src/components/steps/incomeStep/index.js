import React from "react";
import { Grid } from "semantic-ui-react";
import IncomeList from "./IncomeList";
import FetchDataButton from "../../FetchDataButton";

const IncomeStep = () => {
  return (
    <Grid>
      <Grid.Row>
        <IncomeList></IncomeList>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <FetchDataButton message="Let's get started"></FetchDataButton>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default IncomeStep;
