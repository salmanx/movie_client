import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import FlashMessage from "../layouts/FlashMessage";
import Movie from "./movie/Movie";
import { withStyles } from "@material-ui/core/styles";
import { getAllMovies } from "../../redux/actions/movies";
import MoviesPagination from "../layouts/MoviesPagination";

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

  componentDidMount() {
    this.props.getAllMovies();
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

  handleRating = () => {
    const category = this.props.movies.selectedCategory.id;
    const page = this.props.movies.movies.current_page;

    this.props.getAllMovies({
      category: category,
      page: page
    });
  };

  render() {
    const { classes } = this.props;
    const data = this.props.movies;

    return (
      <Container className={classes.cardGrid} maxWidth="md">
        <FlashMessage
          open={this.state.snackBarOpen}
          flashType={this.state.flashType}
        />

        <Grid container spacing={4}>
          {data.loading ? (
            <Grid container justify="center">
              <div className={classes.circularProgress}>
                <CircularProgress color="primary" />
              </div>
            </Grid>
          ) : data.movies.entries.length > 0 ? (
            data.movies.entries.map(movie => (
              <Movie
                key={movie.id}
                movie={movie}
                showSneakbar={this.handleFlashMessage}
                rate={this.handleRating}
              />
            ))
          ) : (
            <Grid container justify="center">
              <h2>No Movies found</h2>
            </Grid>
          )}
          {data.movies.total_entries > 9 && (
            <Grid container justify="center">
              <MoviesPagination total_pages={data.movies.total_pages} />
            </Grid>
          )}
        </Grid>
      </Container>
    );
  }
}

Movies.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    movies: state.movieReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllMovies: data => dispatch(getAllMovies(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(Movies));
