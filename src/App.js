import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// load Components
import Navbar from "./components/layouts/Navbar";
import NavbarSearch from "./components/layouts/NavbarSearch";
import Footer from "./components/layouts/Footer";
import Default from "./components/Default";
import Home from "./components/home/Home";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <NavbarSearch />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={Signin} exact />
            <Route path="/signup" component={Signup} exact />
            <Route component={Default} />
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
