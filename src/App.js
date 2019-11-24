import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// load Components
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Default from "./components/Default";
import Home from "./components/home/Home";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import UserUpdate from "./components/auth/UserUpdate";
import CreateMovie from "./components/movies/CreateMovie";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={Signin} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/users/edit/:id" component={UserUpdate} exact />
            <Route path="/movies/new" component={CreateMovie} exact />
            <Route component={Default} />
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
