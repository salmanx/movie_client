import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Chip from "@material-ui/core/Chip";
import Axios from "axios";
import { red } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import { apiUrl } from "../../../config";
import AuthHelperMethods from "../../../helpers/AuthHelper";

const useStyles = theme => ({
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
});

class Movie extends React.Component {
  auth = new AuthHelperMethods();

  constructor(props) {
    super(props);
    this.movie = props.movie;
    // this.handleRaiting = this.handleRaiting.bind(this);
  }

  // handleRaiting(rating) {
  //   console.log(this.props);
  //   // const headers = {
  //   //   Accept: "application/json",
  //   //   "Content-Type": "application/json"
  //   // };
  //   // // Setting Authorization header
  //   // if (this.auth.loggedIn()) {
  //   //   headers["Authorization"] = this.auth.gettoken();
  //   // }
  //
  //   Axios.post(
  //     `${apiUrl}/rating`,
  //     {
  //       rating: {
  //         movie_id: this.movie.id,
  //         rating: rating
  //       }
  //     },
  //     { headers }
  //   )
  //     .then(response => {
  //       // this.props.history.push(`/`);
  //       console.log(this.props);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  render() {
    const { classes } = this.props;
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    // Setting Authorization header
    if (this.auth.loggedIn()) {
      headers["Authorization"] = this.auth.gettoken();
    }
    return (
      <Grid item xs={6} sm={4} md={3}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="subtitle1">
              {this.movie.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {this.movie.id}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            image="https://avatars1.githubusercontent.com/u/3165635?s=460&v=4"
            title={this.movie.title}
          />
          <CardActions disableSpacing>
            <Box
              component="fieldset"
              mb={3}
              fontSize={10}
              borderColor="transparent"
            >
              <Chip
                label={this.movie.category.name}
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
                value={this.movie.rating}
                onChange={(event, newValue) => {
                  Axios.post(
                    `${apiUrl}/rating`,
                    {
                      rating: {
                        movie_id: this.movie.id,
                        rating: newValue
                      }
                    },
                    { headers }
                  )
                    .then(response => {
                      // this.props.history.push(`/`);
                      console.log(this.props);
                    })
                    .catch(error => {
                      console.log(error);
                    });
                }}
              />
            </Box>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

Movie.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(Movie);
