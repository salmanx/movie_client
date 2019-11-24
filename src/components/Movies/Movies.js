import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Movie from "./Movie/Movie";
import { MoviesConsumer } from "../../context";
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
  }
});

class Movies extends React.Component {
  state = {
    movies: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { classes } = this.props;

    return (
      <Container className={classes.cardGrid} maxWidth="md">
        <MoviesConsumer>
          {data => (
            <Grid container spacing={4}>
              {data.movies &&
                data.movies.map(movie => (
                  <Movie key={movie.id} movie={movie} />
                ))}
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
