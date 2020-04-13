import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import FlashMessage from "../layouts/FlashMessage";
import Movie from "./Movie/Movie";
import { MoviesConsumer } from "../../context";
import { withStyles } from "@material-ui/core/styles";

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

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      snackBarOpen: false,
      flashType: undefined
    };
  }

  componentDidMount() {}

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
        <FlashMessage
          open={this.state.snackBarOpen}
          flashType={this.state.flashType}
        />
        <MoviesConsumer>
          {data => (
            <Grid container spacing={4}>
              {data.loading === null ? (
                <Grid container justify="center">
                  <div className={classes.circularProgress}>
                    <CircularProgress color="primary" />
                  </div>
                </Grid>
              ) : data.movies.length > 0 ? (
                data.movies &&
                data.movies.map(movie => (
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
          )}
        </MoviesConsumer>
      </Container>
    );
  }
}

Movies.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(Movies);
