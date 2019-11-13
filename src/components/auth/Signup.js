import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

import Axios from "axios";
import { apiUrl } from "../../config";
import AuthHelperMethods from "../../helpers/AuthHelper";

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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class Signup extends React.Component {
  auth = new AuthHelperMethods();

  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      error: ""
    };
  }

  handleRegister(e) {
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

      Axios.post(`${apiUrl}/sign_up`, {
        user: {
          firstName,
          lastName,
          email,
          password
        }
      })
        .then(response => {
          localStorage.setItem("token", response.data.token);
          const user = this.auth.currentUser();
          this.props.history.push(`/`);
        })
        .catch(error => {
          console.log(error.response);
          this.setState(() => {
            return {
              error: error.response.data.errors
            };
          });
        });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {this.state.error && (
            <p className="alert alert-danger">{this.state.error}</p>
          )}
          <form
            className={classes.form}
            noValidate
            onSubmit={this.handleRegister}
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
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(Signup);
