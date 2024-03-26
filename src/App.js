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
import Manudetailpage from "./component/Manudetailpage/manudetail";
import Manudetail from "./component/Manudetailpage/manudetail";
import Arsenaldetailpage from "./component/Arsenaldetailpage/arsenaldetail";
import Arsenaldetail from "./component/Arsenaldetailpage/arsenaldetail";
import Mancidetailpage from "./component/Mancidetailpage/mancidetail";
import Mancidetail from "./component/Mancidetailpage/mancidetail";
import Liverdetailpage from "./component/Liverdetailpage/liverdetail";
import Liverdetail from "./component/Liverdetailpage/liverdetail";
import ManUPaymentPage from "./component/ManUPaymentpage/Manupayment";
import Manupayment from "./component/ManUPaymentpage/Manupayment";

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

          {/* Additional route for product details with parameter */}
          <Route exact path="/Manudetailpage/:id">
            <Manudetailpage />
          </Route>

          {/* Route for individual product detail */}
          <Route path="/Manudetailpage/:id">
            <Manudetail />
          </Route>

          {/* Additional route for product details with parameter */}
          <Route exact path="/Arsenaldetailpage/:id">
            <Arsenaldetailpage />
          </Route>

          {/* Route for individual product detail */}
          <Route path="/Arsenaldetailpage/:id">
            <Arsenaldetail />
          </Route>

          <Route exact path="/Mancidetailpage/:id">
            <Mancidetailpage />
          </Route>

          {/* Route for individual product detail */}
          <Route path="/Mancidetailpage/:id">
            <Mancidetail />
          </Route>

          <Route exact path="/Liverdetailpage/:id">
            <Liverdetailpage />
          </Route>

          {/* Route for individual product detail */}
          <Route path="/Liverdetailpage/:id">
            <Liverdetail />
          </Route>

          <Route exact path="/ManUPaymentpage/:id">
            <ManUPaymentPage />
          </Route>

          <Route path="/ManUPaymentpage/:id">
            <Manupayment />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
