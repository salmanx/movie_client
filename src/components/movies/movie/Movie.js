import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Axios from "axios";
import { red } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import { apiUrl } from "../../../config";
import AuthHelperMethods from "../../../helpers/AuthHelper";

const useStyles = theme => ({
  root: {
    maxWidth: 280,
    margin: "10px"
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
    backgroundColor: red[500],
    fontSize: "8px",
    wordBreak: "break-all",
    textAlign: "center"
  }
});
// const history = createHashHistory();

class Movie extends React.Component {
  auth = new AuthHelperMethods();

  constructor(props) {
    super(props);
    this.handleRating = this.handleRating.bind(this);
  }

  handleRating = (rating, movieId) => {
    if (!this.auth.loggedIn()) {
      this.props.showSneakbar("requiredAuth");
      return;
    }

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    // Setting Authorization header
    if (this.auth.loggedIn()) {
      headers["Authorization"] = this.auth.gettoken();
    }

    Axios.post(
      `${apiUrl}/rating`,
      {
        rating: {
          movie_id: movieId,
          rating: rating.rating
        }
      },
      { headers }
    )
      .then(response => {
        this.props.showSneakbar();
        this.props.rate();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { classes } = this.props;
    const movie = this.props.movie;

    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {movie.category.name}
            </Avatar>
          }
          title={movie.title}
          subheader={movie.created_at}
        />
        <CardMedia
          className={classes.media}
          image="https://placehold.it/300x300.png"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.text}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Rater
            total={5}
            rating={movie.rating}
            onRate={rating => {
              this.handleRating(rating, movie.id);
            }}
          />
        </CardActions>
      </Card>
    );
  }
}

Movie.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(Movie);
