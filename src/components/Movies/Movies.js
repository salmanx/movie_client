import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
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

  const [expanded, setExpanded] = React.useState(false);
  const movies = useContext(MoviesContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {movies.data &&
          movies.data.map(movie => (
            <Grid item key={movie.id} xs={6} sm={4} md={3}>
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
                      value={4}
                      onChange={() => {
                        console.log("rated");
                      }}
                    />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
