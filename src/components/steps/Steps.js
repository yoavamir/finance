import React from "react";
import { Step } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Steps = ({ activeStep }) => {
  const isActiveStep = (step) => {
    return activeStep === step;
  };

  return (
    <Step.Group ordered>
      <Link to="/files">
        <Step active={isActiveStep(1)} completed={isActiveStep(2)}>
          <Step.Content>
            <Step.Title>Upload Files</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>
      </Link>
      <Link to="income_form">
        <Step link active={isActiveStep(2)}>
          <Step.Content>
            <Step.Title>Income</Step.Title>
            <Step.Description>
              Enter details about your income sources
            </Step.Description>
          </Step.Content>
        </Step>
      </Link>
    </Step.Group>
  );
};

const mapStateToProps = (state) => {
  return { activeStep: state.registration.activeStep };
};

export default connect(mapStateToProps)(Steps);
