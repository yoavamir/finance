import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import WelcomePage from "./WelcomePage";
import Header from "./header/Header";
import amountSpentBarChart from "./charts/AmountSpentBarChart";
import ShopsPieChart from "./charts/ShopsPieChart";
import CategoryDoughnut from "./charts/CategoryDoughnut";
import MonthlyExpenses from "./charts/MonthlyExpenses";
import ShopsByMonthsChart from "./charts/ShopsByMonthsChart";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header></Header>
        <div style={{ width: "100%", height: "200vh" }}>
          <Switch>
            <Route path="/" exact component={WelcomePage}></Route>
            {/* <Route path="/upload_file" exact component={FileUpload}></Route> */}
            {/* <Route
              path="/amount_spent_bar_chart"
              exact
              component={amountSpentBarChart}
            ></Route> */}
            <Route
              path="/shops_distribution"
              exact
              component={ShopsPieChart}
            ></Route>
            {/* <Route
              path="/category_distribution"
              exact
              component={CategoryDoughnut}
            ></Route> */}
            <Route
              path="/spent_by_month"
              exact
              component={MonthlyExpenses}
            ></Route>
            <Route
              path="/shops_expenses_by_month"
              exact
              component={ShopsByMonthsChart}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
