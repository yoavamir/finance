import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import TotalAmountSpent from "./TotalAmountSpent";
import FileUpload from "./FileUpload";
import WelcomePage from "./WelcomePage";
import Header from "./Header";
import amountSpentBarChart from "./charts/AmountSpentBarChart";
import ShopsPieChart from "./charts/ShopsPieChart";
import CategoryDoughnut from "./charts/CategoryDoughnut";
import AmountSpentBarChart from "./charts/AmountSpentBarChart";

const App = () => {
  return (
    <div className="ui container divider">
      <Header></Header>
      {/* <WelcomePage></WelcomePage> */}
      <FileUpload></FileUpload>
      <AmountSpentBarChart></AmountSpentBarChart>
      <ShopsPieChart></ShopsPieChart>
      <CategoryDoughnut></CategoryDoughnut>
      {/* <Router history={history}>
        <Header></Header>
        <div>
          <Switch>
            <Route path="/" exact component={WelcomePage}></Route>
            <Route path="/upload_file" exact component={FileUpload}></Route>
            <Route path="/amount" exact component={TotalAmountSpent}></Route>
            <Route
              path="/amount_spent_bar_chart"
              exact
              component={amountSpentBarChart}
            ></Route>
            <Route
              path="/shops_distribution"
              exact
              component={ShopsPieChart}
            ></Route>
            <Route
              path="/category_distribution"
              exact
              component={CategoryDoughnut}
            ></Route>
          </Switch>
        </div>
      </Router> */}
    </div>
  );
};

export default App;
