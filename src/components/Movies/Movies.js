import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Movie from "./Movie/Movie";
import { makeStyles } from "@material-ui/core/styles";
import { MoviesContext } from "../../context";

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: "#FAF7F2"
  },

  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function Movies() {
  const classes = useStyles();
  const movies = React.useContext(MoviesContext);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {movies.data &&
          movies.data.map(movie => <Movie key={movie.id} movie={movie} />)}
      </Grid>
    </Container>
  );
}
