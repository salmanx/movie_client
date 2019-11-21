import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Axios from "axios";
import AuthHelperMethods from "../../helpers/AuthHelper";
import withAuth from "../withAuth";
import { withStyles } from "@material-ui/core/styles";
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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class CreateMovie extends React.Component {
  auth = new AuthHelperMethods();

  constructor(props) {
    super(props);
    this.handleCreateMovie = this.handleCreateMovie.bind(this);

    this.state = {
      title: null,
      text: null,
      user: {}
    };
  }

  handleCreateMovie(e) {
    e.preventDefault();

    if (!e.target.elements.title.value) {
      this.setState({ error: "Please provide movie title" });
    } else if (!e.target.elements.text.value) {
      this.setState({ error: "Please provide movie details" });
    } else {
      const title = e.target.elements.title.value;
      const text = e.target.elements.text.value;

      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
      // Setting Authorization header
      if (this.auth.loggedIn()) {
        headers["Authorization"] = this.auth.gettoken();
      }

      Axios.post(
        `${apiUrl}/movies`,
        {
          movie: {
            category_id: 1,
            title,
            text
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
            Create a movie here!
          </Typography>
          {this.state.error && (
            <p className="alert alert-danger">{this.state.error}</p>
          )}
          <form
            className={classes.form}
            noValidate
            onSubmit={this.handleCreateMovie}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  variant="outlined"
                  required
                  fullWidth
                  id="title"
                  label="Movie Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="text"
                  label="Movie Details"
                  name="text"
                  autoComplete="lname"
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
              Create Movie
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

CreateMovie.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withAuth(withStyles(useStyles)(CreateMovie));
