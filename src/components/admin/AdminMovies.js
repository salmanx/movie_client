import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import FlashMessage from "../layouts/FlashMessage";
import Movie from "./Movie/Movie";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { apiUrl } from "../../config";

const useStyles = theme => ({
  card: {
    backgroundColor: "#FAF7F2"
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
    axios
      .get(`${apiUrl}/movies`)
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

export default withStyles(useStyles)(AdminMovies);
