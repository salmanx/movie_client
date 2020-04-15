import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import { createHashHistory } from "history";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import axios from "axios";
import { red } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import { apiUrl } from "../../../config";
import AuthHelperMethods from "../../../helpers/AuthHelper";

const useStyles = theme => ({
  root: {
    width: 280,
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
  },
  actionBtn: {
    margin: theme.spacing(1)
  }
});
// const history = createHashHistory();

class Movie extends React.Component {
  auth = new AuthHelperMethods();

  constructor(props) {
    super(props);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.editMovie = this.editMovie.bind(this);
  }

  editMovie = movieId => {
    this.props.history.push(`/admin/movies/edit/${movieId}`, { id: movieId });
  };

  deleteMovie = movieId => {
    console.log(movieId);

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    // Setting Authorization header
    if (this.auth.loggedIn()) {
      headers["Authorization"] = this.auth.gettoken();
    }

    if (window.confirm("Do you really want to delete the movie?")) {
      axios
        .delete(`${apiUrl}/movies/${movieId}`, {
          headers: headers
        })
        .then(response => {
          this.props.history.push("/admin/movies");
        })
        .catch(error => {
          console.log(error);
        });
      this.props.history.push("/admin/movies");
    } else {
      return;
    }
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
          image="https://avatars1.githubusercontent.com/u/3165635?s=460&v=4"
          title="Paella dish"
        />
        <CardContent>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.actionBtn}
            onClick={() => this.editMovie(movie.id)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.actionBtn}
            onClick={() => this.deleteMovie(movie.id)}
          >
            Delete
          </Button>
        </CardContent>
        <CardActions disableSpacing>
          <Rater total={5} rating={movie.rating} interactive={false} />
        </CardActions>
      </Card>
    );
  }
}

Movie.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(Movie);
