// src/App.js
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./component/Nav";
import Homepage from "./component/Homepage/Home";
import LoginPage from "./component/Loginpage/Login";
import ManUpage from "./component/ManUpage/Man_U";
import Mancipage from "./component/Mancipage/Manci";
import Liverpoolpage from "./component/Liverpoolpage/Liver";
import Arsenalpage from "./component/Arsenalpage/Arsenal";
import Liverdetailpage from "./component/Liverdetailpage/Liverdetail";
import Manudetailpage from "./component/Manudetailpage/manudetail";
import Manudetail from "./component/Manudetailpage/manudetail";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/ManUpage">
            <ManUpage />
          </Route>

          <Route exact path="/Mancipage">
            <Mancipage />
          </Route>

          {/* Route for Liverpool page */}
          <Route exact path="/Liverpoolpage">
            <Liverpoolpage />
          </Route>

          {/* Route for Arsenal page */}
          <Route exact path="/Arsenalpage">
            <Arsenalpage />
          </Route>

          {/* Route for product details */}
          <Route path="/Liverdetailpage">
            <Liverdetailpage />
          </Route>

          {/* Additional route for product details with parameter */}
          <Route exact path="/Manudetailpage/:id">
            <Manudetailpage />
          </Route>

          {/* Route for individual product detail */}
          <Route path="/Manudetailpage/:id">
            <Manudetail />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
