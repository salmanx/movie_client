import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Movie from "./Movie/Movie";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { apiUrl } from "../../config";
import AuthHelperMethods from "../../helpers/AuthHelper";
import withAuth from "../withAuth";

const useStyles = theme => ({
  cardGrid: {
    marginTop: "20px",
    paddingTop: "40px"
  },

  card: {
    backgroundColor: "#7F2"
  },

  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },

  circularProgress: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    },
    align: "center"
  }
});

class AdminMovies extends React.Component {
  auth = new AuthHelperMethods();

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: null,
      snackBarOpen: false,
      flashType: undefined
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    // Setting Authorization header
    if (this.auth.loggedIn()) {
      headers["Authorization"] = this.auth.gettoken();
    }
    axios
      .get(`${apiUrl}/users/movies`, { headers })
      .then(res => {
        this.setState({
          movies: res.data,
          loading: false
        });
      })
      .catch(err => console.log(err));
    this.setState({ loading: null });
  }

  handleFlashMessage = (flag = "") => {
    this.setState(
      {
        snackBarOpen: true,
        flashType: flag
      },
      () =>
        this.setState({
          snackBarOpen: false
        })
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {this.state.loading === null ? (
            <Grid container justify="center">
              <div className={classes.circularProgress}>
                <CircularProgress color="primary" />
              </div>
            </Grid>
          ) : this.state.movies.length > 0 ? (
            this.state.movies &&
            this.state.movies.map(movie => (
              <Movie
                key={movie.id}
                movie={movie}
                showSneakbar={this.handleFlashMessage}
                history={this.props.history}
              />
            ))
          ) : (
            <Grid container justify="center">
              <h2>No Movies found</h2>
            </Grid>
          )}
        </Grid>
      </Container>
    );
  }
}

AdminMovies.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withAuth(withStyles(useStyles)(AdminMovies));
