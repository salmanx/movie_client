import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Chip from "@material-ui/core/Chip";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: "#FAF7F2"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const handleRaiting = (event, rating, movie) => {
  console.log(event);
  console.log(rating);
};

export default function Movie(props) {
  const { movie } = props;
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="subtitle1">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {movie.created_at}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="https://avatars1.githubusercontent.com/u/3165635?s=460&v=4"
          title={movie.title}
        />
        <CardActions disableSpacing>
          <Box
            component="fieldset"
            mb={3}
            fontSize={10}
            borderColor="transparent"
          >
            <Chip
              label={movie.category.name}
              href="#chip"
              clickable
              color="primary"
              size="small"
              variant="outlined"
            />
            <br />
            <br />
            <Rating
              name="simple-controlled"
              value={0}
              onChange={(event = null, newValue) => {
                handleRaiting(event, newValue, movie);
              }}
            />
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}
