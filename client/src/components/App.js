import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import TotalAmountSpent from "./TotalAmountSpent";
import FileUpload from "./FileUpload";
import WelcomePage from "./WelcomePage";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container divider">
      <Router history={history}>
        <Header></Header>
        <div>
          <Switch>
            <Route path="/" exact component={WelcomePage}></Route>
            <Route path="/upload_file" exact component={FileUpload}></Route>
            <Route path="/amount" exact component={TotalAmountSpent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
