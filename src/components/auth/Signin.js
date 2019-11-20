import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Axios from "axios";
import { apiUrl } from "../../config";

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
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  handleLogin(e) {
    e.preventDefault();

    if (!e.target.elements.email.value || !e.target.elements.password.value) {
      this.setState({ error: "Please provide your valid credentials" });
    } else {
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      Axios.post(`${apiUrl}/sign_in`, {
        email,
        password
      })
        .then(response => {
          console.log(response);
          localStorage.setItem("token", response.data.token);
          // this.props.history.push("/");
          window.location.href = "/";
        })
        .catch(error => {
          console.log(error.response);
          this.setState({
            error: error.response.data.errors
          });
        });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {this.state.error && (
              <p className="alert alert-danger">{this.state.error}</p>
            )}
            <form
              className={classes.form}
              noValidate
              onSubmit={this.handleLogin}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(Signin);
