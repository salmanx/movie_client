import React, { Component } from "react";
import AuthHelper from "../helpers/AuthHelper";

export default function withAuth(AuthComponent) {
  const Auth = new AuthHelper();

  return class AuthWrapped extends Component {
    state = {
      confirm: null,
      loaded: false
    };

    componentWillMount() {
      if (!Auth.loggedIn()) {
        this.props.history.replace("/signin");
      } else {
        try {
          const confirm = Auth.getConfirm();
          this.setState({
            confirm: confirm,
            loaded: true
          });
        } catch (err) {
          Auth.logout();
          this.props.history.replace("/login");
        }
      }
    }

    render() {
      if (this.state.loaded === true) {
        if (this.state.confirm) {
          return (
            <AuthComponent
              history={this.props.history}
              confirm={this.state.confirm}
            />
          );
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  };
}
