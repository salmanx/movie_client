import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

import Axios from "axios";
import { apiUrl } from "../../config";
import AuthHelperMethods from "../../helpers/AuthHelper";
import withAuth from "../withAuth";

const useStyles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class UserUpdate extends React.Component {
  auth = new AuthHelperMethods();

  constructor(props) {
    super(props);
    this.handleUserUpdate = this.handleUserUpdate.bind(this);

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      error: "",
      user: {}
    };
  }

  componentDidMount() {
    if (this.auth.currentUser()) {
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
      // Setting Authorization header
      if (this.auth.loggedIn()) {
        headers["Authorization"] = this.auth.gettoken();
      }

      Axios.get(`${apiUrl}/users/${this.auth.currentUser().user_id}`, {
        headers
      })
        .then(res => {
          this.setState(() => ({
            user: res.data
          }));
        })
        .catch(err => console.log(err));
    }
  }

  handleUserUpdate(e) {
    e.preventDefault();

    if (!e.target.elements.firstName.value) {
      this.setState({ error: "Please provide your first name" });
    } else if (!e.target.elements.lastName.value) {
      this.setState({ error: "Please provide your last email" });
    } else if (!e.target.elements.email.value) {
      this.setState({ error: "Please provide your valid email" });
    } else if (!e.target.elements.password.value) {
      this.setState({ error: "Please provide your valid password" });
    } else {
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      const firstName = e.target.elements.firstName.value;
      const lastName = e.target.elements.lastName.value;

      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
      // Setting Authorization header
      if (this.auth.loggedIn()) {
        headers["Authorization"] = this.auth.gettoken();
      }

      Axios.put(
        `${apiUrl}/users/${this.auth.currentUser().user_id}`,
        {
          user: {
            first_name: firstName,
            last_name: lastName,
            email,
            password
          }
        },
        { headers }
      )
        .then(response => {
          this.props.history.push(`/`);
        })
        .catch(error => {
          console.log(error);
          // this.setState(() => {
          //   return {
          //     error: error.response.data.errors
          //   };
          // });
        });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Update your profile here
          </Typography>
          {this.state.error && (
            <p className="alert alert-danger">{this.state.error}</p>
          )}
          <form
            className={classes.form}
            noValidate
            onSubmit={this.handleUserUpdate}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  defaultValue={this.state.user.first_name || ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  defaultValue={this.state.user.last_name || ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  defaultValue={this.state.user.email || ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Update
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

UserUpdate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withAuth(withStyles(useStyles)(UserUpdate));
