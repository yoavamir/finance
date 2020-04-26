import React from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { setMonthIncome } from "../../../actions";

const MonthIncomeForm = ({ month, setMonthIncome }) => {
  console.log(month);
  const [income, setIncome] = React.useState(0);

  const onChange = (e, { value }) => {
    e.preventDefault();
    setIncome(value);
  };

  const onClick = () => {
    setMonthIncome(month, income);
  };

  return (
    <Form widths="50%">
      <Form.Input
        label={month}
        placeholder="insert month income"
        name="income"
        value={income}
        onChange={onChange}
      ></Form.Input>
      <Form.Button content="Submit" primary onClick={onClick}></Form.Button>
    </Form>
  );
};

export default connect(null, { setMonthIncome })(MonthIncomeForm);
